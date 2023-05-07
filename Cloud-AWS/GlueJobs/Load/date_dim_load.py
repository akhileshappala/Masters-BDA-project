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
        "withHeader": False,
        "separator": ",",
        "optimizePerformance": False,
    },
    connection_type="s3",
    format="csv",
    connection_options={
        "paths": ["s3://bda-covid-data/load-data/state_dim_load/"]
    },
    transformation_ctx="S3bucket_node1",
)

# Script generated for node ApplyMapping
ApplyMapping_node2 = ApplyMapping.apply(
    frame=S3bucket_node1,
    mappings=[
        ("date_id", "int", "date_id", "int"),
        ("full_date_time", "string", "full_date_time", "timestamp"),
        ("year", "int", "year", "int"),
        ("month", "string", "month", "string"),
        ("day", "string", "day", "string"),
        ("weekend_flag", "boolean", "weekend_flag", "boolean"),
        ("holiday_flag", "boolean", "holiday_flag", "boolean"),
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
        "dbtable": "public.date_dim",
        "connectionName": "covid-redshift-connector",
        "preactions": "CREATE TABLE IF NOT EXISTS public.date_dim (date_id INTEGER, full_date_time TIMESTAMP, year INTEGER, month VARCHAR, day VARCHAR, weekend_flag BOOLEAN, holiday_flag BOOLEAN);",
        "aws_iam_user": "arn:aws:iam::046624142871:role/GlueAccessRole",
    },
    transformation_ctx="AmazonRedshift_node3",
)

job.commit()
