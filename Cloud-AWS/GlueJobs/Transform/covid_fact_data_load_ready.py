import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
import gs_sequence_id
import gs_format_timestamp
from awsglue import DynamicFrame


def sparkSqlQuery(glueContext, query, mapping, transformation_ctx) -> DynamicFrame:
    for alias, frame in mapping.items():
        frame.toDF().createOrReplaceTempView(alias)
    result = spark.sql(query)
    return DynamicFrame.fromDF(result, glueContext, transformation_ctx)


args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

# Script generated for node DateDim Amazon Redshift
DateDimAmazonRedshift_node1683100056488 = glueContext.create_dynamic_frame.from_options(
    connection_type="redshift",
    connection_options={
        "redshiftTmpDir": "s3://bda-covid-data/temp/",
        "useConnectionProperties": "true",
        "dbtable": "public.date_dim",
        "connectionName": "covid-redshift-connector",
        "aws_iam_user": "arn:aws:iam::046624142871:role/GlueAccessRole",
    },
    transformation_ctx="DateDimAmazonRedshift_node1683100056488",
)

# Script generated for node Data Catalog table
DataCatalogtable_node1 = glueContext.create_dynamic_frame.from_catalog(
    database="covid_raw_data",
    table_name="covid_raw_data_state_partitioned",
    transformation_ctx="DataCatalogtable_node1",
)

# Script generated for node StateDim Amazon Redshift
StateDimAmazonRedshift_node1683098334119 = (
    glueContext.create_dynamic_frame.from_options(
        connection_type="redshift",
        connection_options={
            "redshiftTmpDir": "s3://bda-covid-data",
            "useConnectionProperties": "true",
            "dbtable": "public.states_dim",
            "connectionName": "covid-redshift-connector",
            "aws_iam_user": "arn:aws:iam::046624142871:role/GlueAccessRole",
        },
        transformation_ctx="StateDimAmazonRedshift_node1683098334119",
    )
)

# Script generated for node Format Timestamp
FormatTimestamp_node1683130703909 = (
    DateDimAmazonRedshift_node1683100056488.gs_format_timestamp(
        colName="full_date_time", dateFormat="%d/%m/%Y"
    )
)

# Script generated for node SQL Query 1
SqlQuery167 = """
SELECT date_announced, state_code, detected_district, 
SUM(CASE WHEN a.current_status = 'Hospitalized' THEN cast(a.num_cases as integer) ELSE 0 END) AS total_conf_cases,
SUM(CASE WHEN a.current_status = 'Deceased' THEN cast(a.num_cases as integer) ELSE 0 END) AS total_death_cnt,
SUM(CASE WHEN a.current_status = 'Recovered' THEN cast(a.num_cases as integer) ELSE 0 END) AS total_cured_cnt 
FROM myDataSource a
group by date_announced, state_code, detected_district

"""
SQLQuery1_node1683065785798 = sparkSqlQuery(
    glueContext,
    query=SqlQuery167,
    mapping={"myDataSource": DataCatalogtable_node1},
    transformation_ctx="SQLQuery1_node1683065785798",
)

# Script generated for node SQL Query 2
SqlQuery166 = """
select b.date_id,concat('IN.',a.state_code) as state_code,a.detected_district,a.total_conf_cases,a.total_death_cnt,a.total_cured_cnt
from myDataSource a left outer join date_dim b
on a.date_announced = b.full_date_time
"""
SQLQuery2_node1683065915645 = sparkSqlQuery(
    glueContext,
    query=SqlQuery166,
    mapping={
        "myDataSource": SQLQuery1_node1683065785798,
        "date_dim": FormatTimestamp_node1683130703909,
    },
    transformation_ctx="SQLQuery2_node1683065915645",
)

# Script generated for node SQL Query 3
SqlQuery168 = """
select a.date_id,b.state_id,a.detected_district,a.total_conf_cases,a.total_death_cnt,a.total_cured_cnt
from myDataSource a left outer join state_dim b
on a.state_code = b.state_code
"""
SQLQuery3_node1683067548182 = sparkSqlQuery(
    glueContext,
    query=SqlQuery168,
    mapping={
        "myDataSource": SQLQuery2_node1683065915645,
        "state_dim": StateDimAmazonRedshift_node1683098334119,
    },
    transformation_ctx="SQLQuery3_node1683067548182",
)

# Script generated for node Add Identifier
AddIdentifier_node1683131766633 = SQLQuery3_node1683067548182.gs_sequence_id(
    colName="covid_trans_id", unique=False
)

# Script generated for node SQL Query
SqlQuery165 = """
select covid_trans_id,state_id,date_id,detected_district,total_conf_cases,total_death_cnt,total_cured_cnt
from myDataSource
"""
SQLQuery_node1683134248215 = sparkSqlQuery(
    glueContext,
    query=SqlQuery165,
    mapping={"myDataSource": AddIdentifier_node1683131766633},
    transformation_ctx="SQLQuery_node1683134248215",
)

# Script generated for node Amazon S3
AmazonS3_node1683095781262 = glueContext.write_dynamic_frame.from_options(
    frame=SQLQuery_node1683134248215,
    connection_type="s3",
    format="csv",
    connection_options={
        "path": "s3://bda-covid-data/load-data/covid_fact_load/",
        "partitionKeys": [],
    },
    transformation_ctx="AmazonS3_node1683095781262",
)

job.commit()
