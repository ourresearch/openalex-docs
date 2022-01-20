# How to download

The MAG dataset was hosted on Azure. The OpenAlex replacement isn't: it's stored in [Amazon S3](https://aws.amazon.com/s3/), in the `openalex-mag-format` bucket. You'll need to modify your download scripts accordingly.

Unlike MAG, the OpenAlex snapshot (in both its standard and MAG formats) is completely free to download.

{% hint style="info" %}
Many thanks to the [AWS Open Data program](https://aws.amazon.com/opendata/). They cover the data-transfer fees (about $70 per download!) so users don't have to.
{% endhint %}

The easiest way to get the files is with the Amazon Web Services Command Line Interface (AWS CLI). You can find instructions for installing it on your system here: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

This shell command will copy the latest snapshot from the `openalex-mag-format` S3 bucket to a local folder named `openalex-mag-snapshot`. It'll take up about 600GB of disk space. It's free and you don't need an Amazon account (the exact command is subject to change as new snapshots are released.):

```
aws s3 sync 's3://openalex-mag-format/data_dump_v1/2021-12-06/' 'openalex-mag-snapshot' --no-sign-request
```

{% hint style="info" %}
Each dated prefix under s3://openalex-mag-format/data\_dump\_v1/ contains a full copy of the snapshot. Unless you want to look at how the records have changed over time (and you have a lot of extra space) you don't need to download the whole bucket.
{% endhint %}
