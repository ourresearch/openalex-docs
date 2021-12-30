# Load to a relational database

Compared to using a data warehouse, loading the dataset into a relational database takes more work up front but lets you write simpler queries on less powerful machines. One important caveat is that this is a _lot_ of data, and exploration will be very slow in most relational databases.

We’re going to use [PostgreSQL](https://www.postgresql.org) as an example and skip the database server setup itself. We’ll assume you have a working postgres 13+ installation on which you can create schemas and tables and run queries. With that as a starting point, we'll take you through these steps:

1. Define the tables the data will be stored in and some key relationships between them (the "schema")
2. Convert the [JSON Lines](https://jsonlines.org) files you [downloaded](../download-to-your-machine.md) to [CSV](https://en.wikipedia.org/wiki/Comma-separated\_values) files that can be read by the database application. We'll flatten them to fit a [hierarchical database model](https://en.wikipedia.org/wiki/Hierarchical\_database\_model).&#x20;
3. Load the CSV data into to the tables you created.
4. Run some queries on the data you loaded

## Step 1: Create the schema

Running this SQL on your databae (in [psql](https://www.postgresql.org/docs/13/app-psql.html) for example) will initialize the schema for you: [https://gist.github.com/richard-orr/4c30f52cf5481ac68dc0b282f46f1905](https://gist.github.com/richard-orr/4c30f52cf5481ac68dc0b282f46f1905)

Run it and you'll be set up to follow the next steps. To show you what it's doing, we'll explain some excerpts here, using the [concept](../../about-the-data/concept.md) entity as an example.&#x20;

{% hint style="warning" %}
SQL in this section isn't anything you need to run. It's part of the schema we already defined above.
{% endhint %}

The key thing we're doing is "flattening" the nested JSON data. Some parts are easy. [Concept.id](../../about-the-data/concept.md#id) is just a string, so it goes in a text column called "id":

```sql
CREATE TABLE openalex.concepts (
    id text NOT NULL,
    -- plus some other columns ...
);
```

