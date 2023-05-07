import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

# Script generated for node Data Catalog table
DataCatalogtable_node1 = glueContext.create_dynamic_frame.from_catalog(
    database="covid_raw_data",
    table_name="t_covid_raw_covid_raw_data_covid_raw_data",
    transformation_ctx="DataCatalogtable_node1",
)

# Script generated for node ApplyMapping
ApplyMapping_node2 = ApplyMapping.apply(
    frame=DataCatalogtable_node1,
    mappings=[
        ("notes", "string", "notes", "string"),
        ("status_change_date", "string", "status_change_date", "string"),
        ("gender", "string", "gender", "string"),
        ("date_announced", "string", "date_announced", "string"),
        ("contacted_from", "string", "contacted_from", "string"),
        ("detected_city", "string", "detected_city", "string"),
        ("types_of_transmission", "string", "types_of_transmission", "string"),
        ("detected_district", "string", "detected_district", "string"),
        ("nationality", "string", "nationality", "string"),
        ("patient_num", "string", "patient_num", "string"),
        ("detected_state", "string", "detected_state", "string"),
        ("source_2", "string", "source_2", "string"),
        ("current_status", "string", "current_status", "string"),
        ("source_3", "string", "source_3", "string"),
        ("source_1", "string", "source_1", "string"),
        ("age_bracket", "string", "age_bracket", "string"),
        ("state_code", "string", "state_code", "string"),
        ("entry_id", "int", "entry_id", "int"),
        ("state_patient_num", "string", "state_patient_num", "string"),
        ("num_cases", "int", "num_cases", "int"),
    ],
    transformation_ctx="ApplyMapping_node2",
)

# Script generated for node S3 bucket
S3bucket_node3 = glueContext.write_dynamic_frame.from_options(
    frame=ApplyMapping_node2,
    connection_type="s3",
    format="glueparquet",
    connection_options={
        "path": "s3://bda-covid-data/raw-data/raw_data_state_partitioned-parquet/",
        "partitionKeys": ["state_code"],
    },
    format_options={"compression": "gzip"},
    transformation_ctx="S3bucket_node3",
)

job.commit()
