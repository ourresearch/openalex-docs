# Download snapshot

{% hint style="info" %}
This section is about the OpenAlex Standard Format snapshot. If you need a drop-in replacement for [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/), see the docs for the [MAG format](mag-format/).
{% endhint %}

For most use cases, the REST API is your best option. However, you can also download and install a complete copy of the OpenAlex database on your own server, using the database snapshot. The snapshot consists of five files (split into smaller files for convenience), with one file for each of our five entity types. The files are in the [JSON Lines](https://jsonlines.org) format; each line is a JSON object, exactly the same as [you'd get from our API.](../api/get-single-entities.md) The properties of these JSON objects are documented in the [Entity objects](../about-the-data/) section.

This guide will tell you how to (a) download the snapshot and (b) upload it to your own database. We’ll cover two general approaches:

* Load the intact OpenAlex records to a data warehouse (we’ll use [BigQuery](https://cloud.google.com/bigquery) as an example) and use native JSON functions to query the [Work](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/work), [Author](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/author), [Venue](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/venue), [Institution](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/institution), and [Concept](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/concept) objects directly.
* Flatten the records into a normalized schema in a relational database (we’ll use [PostgreSQL](https://www.postgresql.org)) while preserving the relationships between objects.

We’ll assume you’re initializing a fresh snapshot - keeping an existing one up to date will be covered separately.

{% hint style="warning" %}
This is hard. Working with such a big and complicated dataset hardly ever goes according to plan. If it gets scary, try the [REST API](https://openalex.org/rest-api). In fact, try the REST API first. It can answer most of your questions and has a much lower barrier to entry.&#x20;
{% endhint %}

There’s more than one way to do everything. We’ve tried to pick one reasonable default way to do each step, so if something doesn’t work in your environment or with the tools you have available, let us know.

If you've worked with a dataset like this before, [just the highlights](just-the-highlights.md) may be all you need to get going. If not, we have more detailed instructions for [downloading the data](download-to-your-machine.md) and [getting it into your database](upload-to-your-database/).

