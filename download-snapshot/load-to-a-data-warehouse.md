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
See docs: [bq load](https://cloud.google.com/bigquery/docs/reference/bq-cli-reference#bq\_load)
{% endhint %}

This part of the command may need some explanation:

> `--source_format=CSV -F '\t' --schema 'work:string'`

Bigquery is expecting multiple columns with predefined datatypes (a “schema”). We’re tricking it into accepting a single text column (`--schema 'work:string'`) by specifying [CSV](https://en.wikipedia.org/wiki/Comma-separated\_values) format (`--source_format=CSV`) with a column delimiter that isn’t present in the file (`-F '\t')`  (\t means “tab”).

`bq load` can only handle one file at a time, so you must run this command once per file. But remember that that real dataset will have many more files than this example does, so it's impractical to copy, edit, and rerun the command each time. It's easier to handle all the files in a loop, like this:

```bash
for data_file in openalex-snapshot/works/*/*.gz;
do
    bq load --source_format=CSV -F '\t' \
        --schema 'work:string' \
        --project_id openalex-demo \
        openalex.works $data_file;
done
```

Do this once per entity type, substituting each entity name for `work`/`works` as needed. When you’re finished, you’ll have five tables that look like this:

![a screenshot of two rows of the works table from the BigQuery console](<../.gitbook/assets/Screen Shot 2021-12-29 at 11.57.21 AM.png>)

## **Step 4: Run your queries!**

Now you have the all the OpenAlex data in a place where you can do anything you want with it using [BigQuery JSON functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/json\_functions) through [bq query](https://cloud.google.com/bigquery/docs/reference/bq-cli-reference#bq\_query) or the BigQuery [console](https://console.cloud.google.com/bigquery).&#x20;

Here’s a simple one, extracting the OpenAlex ID and OA status for each work:

```sql
select 
    json_value(work, '$.id') as work_id, 
    json_value(work, '$.open_access.is_oa') as is_oa
from
    `openalex-demo.openalex.works`;
```

It will give you a list of IDs like this:

|                                                                      |       |
| -------------------------------------------------------------------- | ----- |
| [https://openalex.org/W2741809807](https://openalex.org/W2741809807) | TRUE  |
| [https://openalex.org/W1491283979](https://openalex.org/W1491283979) | FALSE |
| [https://openalex.org/W1491315632](https://openalex.org/W1491315632) | FALSE |

You can run queries like this directly in your shell:

```bash
bq query \
--project_id=openalex-demo \
--use_legacy_sql=false \
"select json_value(work, '$.id') as work_id, json_value(work, '$.open_access.is_oa') as is_oa from openalex.works;"
```

But even simple queries are hard to read and edit this way. It’s better to write them in a file than directly on the command line. Here’s an example of a slightly more complex query - finding the author with the most open access works of all time:

```sql
with work_authorships_oa as (
   select
       json_value(work, '$.id') as work_id,
       json_query_array(work, '$.authorships') as authorships,
       cast(json_value(work, '$.open_access.is_oa') as BOOL) as is_oa
   from `openalex-demo.openalex.works`
), flat_authorships as (
   select work_id, authorship, is_oa
   from work_authorships_oa,
   unnest(authorships) as authorship
)
select json_value(authorship, '$.author.id') as author_id
from flat_authorships
where is_oa
group by author_id
order by count(distinct work_id) desc
limit 1;
```

<mark style="color:yellow;">**TODO: update this when the full data is live**</mark> We get one result, [https://openalex.org/A1969205032](https://openalex.org/A1969205032). Checking out [https://api.openalex.org/authors/A1969205032](https://api.openalex.org/authors/A1969205032), we see that this is our own Heather A. Piwowar. Your results may differ slightly when you query the live dataset.
