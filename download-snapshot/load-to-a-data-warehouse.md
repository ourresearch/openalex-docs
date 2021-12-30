# Load to a data warehouse

In many data warehouse and document store applications, you can load the OpenAlex entities as-is and query them directly. We’ll use [BigQuery](https://cloud.google.com/bigquery) as an example here. ([Elasticsearch](https://www.elastic.co/elasticsearch/) docs coming soon). To follow along you’ll need the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install). You’ll also need a Google account that can make BigQuery tables that are, well…  big. Which means it probably won’t be free.

We'll show you how to do this in 4 steps:

1. Create a BigQuery Project and Dataset to hold your tables
2. Create the tables that will hold your entity JSON records
3. Copy the data files to the tables you created
4. Run some queries on the data you loaded

## **Step 1: Create a BigQuery Project and Dataset**

In BigQuery, you need a [Project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) and [Dataset](https://cloud.google.com/bigquery/docs/datasets-intro) to hold your tables. We’ll call the project “openalex-demo” and the dataset “openalex”. Follow the linked instructions to create the Project, then create the dataset inside it:

```bash
bq mk openalex-demo:openalex
```

> `Dataset 'openalex-demo:openalex' successfully created`

## Step 2: Create tables for each entity type

Now, we’ll [create tables](https://cloud.google.com/bigquery/docs/tables) inside the dataset. There will be 5 tables, one for each entity type. Since we’re using JSON, each table will have just one text column named after the table.

```bash
bq mk --table openalex-demo:openalex.works work:string
```

> `Table 'openalex-demo:openalex.works' successfully created.`

```bash
bq mk --table openalex-demo:openalex.authors author:string
```

> `Table 'openalex-demo:openalex.authors' successfully created`

and so on for `venues`, `institutions`, and `concepts`.

## Step 3: Load the data files

We’ll load each table’s data from the JSON Lines files we downloaded earlier. For `works`, the files were:&#x20;

* openalex-snapshot/works/updated\_date=2021-12-28/0000\_part\_00.gz&#x20;
* openalex-snapshot/works/updated\_date=2021-12-28/0001\_part\_00.gz&#x20;

Here’s a command to load one `works` file (don’t run it yet):

```bash
bq load \
--project_id openalex-demo \
--source_format=CSV -F '\t' \
--schema 'work:string' \
openalex.works \
'openalex-snapshot/works/updated_date=2021-12-28/0000_part_00.gz'
```

{% hint style="info" %}
Docs: [bq load](https://cloud.google.com/bigquery/docs/reference/bq-cli-reference#bq\_load)
{% endhint %}
