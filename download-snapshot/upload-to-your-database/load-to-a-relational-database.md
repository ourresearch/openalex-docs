# Load to a relational database

Compared to using a data warehouse, loading the dataset into a relational database takes more work up front but lets you write simpler queries on less powerful machines. One important caveat is that this is a _lot_ of data, and exploration will be very slow in most relational databases.

We’re going to use [PostgreSQL](https://www.postgresql.org) as an example and skip the database server setup itself. We’ll assume you have a working postgres 13+ installation on which you can create schemas and tables and run queries. With that as a starting point, we'll take you through these steps:

1. Define the tables the data will be stored in and some key relationships between them (the "schema")
2. Convert the [JSON Lines](https://jsonlines.org) files you [downloaded](../download-to-your-machine.md) to [CSV](https://en.wikipedia.org/wiki/Comma-separated\_values) files that can be read by the database application. We'll flatten them to fit a [hierarchical database model](https://en.wikipedia.org/wiki/Hierarchical\_database\_model).&#x20;
3. Load the CSV data into to the tables you created.
4. Run some queries on the data you loaded
