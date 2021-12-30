# Download to your machine

First off: anyone can get the data for free. While the files are hosted on [S3](https://aws.amazon.com/s3/) and we’ll be using Amazon tools in these instructions, you don’t need an Amazon account.

Before you load the snapshot contents to your database, you’ll need to get the files that make it up onto your own computer. There are exceptions, like [loading to redshift from s3](https://docs.aws.amazon.com/redshift/latest/dg/tutorial-loading-data.html) or using an ETL product like [Xplenty](https://xplenty.com) with an S3 connector. If either of these apply to you, try [just the highlights](just-the-highlights.md).

The easiest way to get the files is with the Amazon Web Services Command Line Interface (AWS CLI). Sample commands in this documentation will use the AWS CLI. You can find instructions for installing it on your system here: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

You can also browse the snapshot files using the AWS console here: [https://s3.console.aws.amazon.com/s3/buckets/openalex](https://s3.console.aws.amazon.com/s3/buckets/openalex). You need to be logged into an Amazon account to use the console, but it’s still free. The CLI will work without an account.

This command will copy everything in the `openalex` S3 bucket to a local folder named `openalex-snapshot`. It'll take up about 200GB of disk space.

```
$ aws s3 sync 's3://openalex' openalex-snapshot
```

\


$ aws s3 sync 's3://openalex' openalex-snapshot







