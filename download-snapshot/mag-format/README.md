# MAG format

{% hint style="warning" %}
**This format is deprecated**. The MAG format snapshot will be maintained and updated until July 2, 2022. After that, the [OpenAlex format snapshot](../) will be the only one supported.
{% endhint %}

{% hint style="info" %}
This section is still being written.
{% endhint %}

All the MAG-formatted data is stored in [Amazon S3](https://aws.amazon.com/s3/), in the `openalex-mag-format` bucket.

The easiest way to get the files is with the Amazon Web Services Command Line Interface (AWS CLI). You can find instructions for installing it on your system here: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

This shell command will copy everything in the `openalex-mag-format` S3 bucket to a local folder named `openalex-mag-snapshot`. It'll take up about 600GB of disk space. It's free and you don't need an Amazon account.



```
aws s3 sync 's3://openalex-mag-format' 'openalex-mag-snapshot' --no-sign-request
```







