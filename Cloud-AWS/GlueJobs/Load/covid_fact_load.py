import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
from awsglue import DynamicFrame

args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

# Script generated for node S3 bucket
S3bucket_node1 = glueContext.create_dynamic_frame.from_options(
    format_options={
        "quoteChar": '"',
        "withHeader": True,
        "separator": ",",
        "optimizePerformance": False,
    },
    connection_type="s3",
    format="csv",
    connection_options={
        "paths": ["s3://bda-covid-data/load-data/covid_fact_load/"],
        "recurse": True,
    },
    transformation_ctx="S3bucket_node1",
)

# Script generated for node ApplyMapping
ApplyMapping_node2 = ApplyMapping.apply(
    frame=S3bucket_node1,
    mappings=[
        ("date_id", "string", "date_id", "string"),
        ("state_id", "string", "state_id", "string"),
        ("detected_district", "string", "detected_district", "string"),
        ("total_conf_cases", "string", "total_conf_cases", "string"),
        ("total_death_cnt", "string", "total_death_cnt", "string"),
        ("total_cured_cnt", "string", "total_cured_cnt", "string"),
        ("covid_trans_id", "string", "covid_trans_id", "string"),
    ],
    transformation_ctx="ApplyMapping_node2",
)

# Script generated for node Amazon Redshift
AmazonRedshift_node3 = glueContext.write_dynamic_frame.from_options(
    frame=ApplyMapping_node2,
    connection_type="redshift",
    connection_options={
        "redshiftTmpDir": "s3://bda-covid-data/temp/",
        "useConnectionProperties": "true",
        "dbtable": "public.covid_cases_fact",
        "connectionName": "covid-redshift-connector",
        "preactions": "CREATE TABLE IF NOT EXISTS public.covid_cases_fact (date_id VARCHAR, state_id VARCHAR, detected_district VARCHAR, total_conf_cases VARCHAR, total_death_cnt VARCHAR, total_cured_cnt VARCHAR, covid_trans_id VARCHAR);",
        "aws_iam_user": "arn:aws:iam::046624142871:role/GlueAccessRole",
    },
    transformation_ctx="AmazonRedshift_node3",
)

job.commit()
