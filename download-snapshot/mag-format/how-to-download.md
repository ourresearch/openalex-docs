# How to download

The MAG dataset was hosted on Azure. The OpenAlex replacement isn't: it's stored in [Amazon S3](https://aws.amazon.com/s3/), in the `openalex-mag-format` bucket. You'll need to modify your download scripts accordingly.

Unlike MAG, the OpenAlex snapshot (in both its standard and MAG formats) is completely free to download.

The easiest way to get the files is with the Amazon Web Services Command Line Interface (AWS CLI). You can find instructions for installing it on your system here: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

This shell command will copy everything in the `openalex-mag-format` S3 bucket to a local folder named `openalex-mag-snapshot`. It'll take up about 600GB of disk space. It's free and you don't need an Amazon account.



```
aws s3 sync 's3://openalex-mag-format' 'openalex-mag-snapshot' --no-sign-request
```
