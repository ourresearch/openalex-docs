# Download snapshot

If you want to do things with the data that our API can’t do for you, you’ll need your own copy of the dataset. This guide will tell you how to get one. We’ll cover two general approaches:

* Load the intact OpenAlex records to a data warehouse (we’ll use [BigQuery](https://cloud.google.com/bigquery) as an example) and use its native JSON functions to query the [Work](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/work), [Author](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/author), [Venue](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/venue), [Institution](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/institution), and [Concept](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/concept) objects directly.
* Flatten the records into a normalized schema in a relational database (we’ll use [PostgreSQL](https://www.postgresql.org)) while preserving the relationships between objects.

We’ll assume you’re initializing a fresh snapshot - keeping an existing one up to date will be covered separately.

There’s more than one way to do everything. We’ve tried to pick one reasonable default way to do each step, so if something doesn’t work in your environment or with the tools you have available, let us know.

If you've worked with a dataset like this before, [just the highlights](just-the-highlights.md) may be all you need to get going. If not, we have more detailed instructions for [downloading the data](download-to-your-machine.md) and [getting it into your database](upload-to-your-database/).





<mark style="color:yellow;">vvv old notes here vvv</mark>

{% hint style="warning" %}
This section hasn't been written yet!
{% endhint %}

notes to mention:

* describe the snapshot some
* should i use the snapshot or the api?
* index (point to the things you can do)

stuff about the format to mention (from h email)

* There will be a /authors/ etc parallel to /works/ so all 5 entity types
* In each of them there will be a bunch of directories as you can see under /works/
* they will have updated\_date= in the dir name as you see, it is Hive format or something, one for each day that had at least one line last updated that day
* there will be a "manifest" file parallel to these subfolders, as you can see in the sample, listing all the files for that entity type.  It will be the first thing deleted and the last thing written, so a semaphore for the subdirectory being valid (manifest file format is redshift manifest file, described here:[https://docs.aws.amazon.com/redshift/latest/dg/r\_COPY\_command\_examples.html#copy-command-examples-manifest](https://docs.aws.amazon.com/redshift/latest/dg/r\_COPY\_command\_examples.html#copy-command-examples-manifest))
* in each dir there are files that are less then 2GB big, gzipped, in jsonlines format&#x20;
* these works don't have abstracts in them but the real ones will.
