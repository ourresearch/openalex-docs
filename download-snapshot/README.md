# Download snapshot

<mark style="color:yellow;">vvv old notes here vvv</mark>

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
