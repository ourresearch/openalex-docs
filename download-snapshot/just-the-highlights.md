# Just the highlights

If you’ve worked with dataset like this before and have a toolchain picked out, this may be all you need to know. If you want the more detailed steps, start with [download the data](download-to-your-machine.md).

* All the data is stored in [Amazon S3](https://aws.amazon.com/s3/), in the `openalex` bucket.
* The bucket contains one prefix (folder) for each entity type: work, author, venue, institution, and concept.
* Within each entity type prefix:
  * Files are prefixed by their records’ last-updated date and separated into objects (files) under 2GB. At the time of writing the first, oldest works object is `/works/updated_date=2021-12-28/0000_part_00.gz`
* The manifest file is JSON (in [redshift manifest](https://docs.aws.amazon.com/redshift/latest/dg/loading-data-files-using-manifest.html) format) and lists all the data files for each object type - `/works/manifest` lists all the works.
* Since you’re making a fresh snapshot, just get all the `.gz` files. The date prefixes aren’t important unless you are doing an incremental update.
* The data files are gzip-compressed [JSON Lines](https://jsonlines.org), one row per entity.

The structure of each entity type is documented here: [work](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/work), [author](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/author), [venue](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/venue), [institution](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/institution), and [concept](https://app.gitbook.com/o/q9WAeozYo93Avo9VPiOf/s/Sj6S26Opvy3KVj3QQGMc/about-the-data/concept).
