---
description: Topics assigned to works
---

# 💡 Topics

Works in OpenAlex are tagged with Topics using an automated system that takes into account the available information about the work, including title, abstract, source (journal) name, and citations.

There are around 4,500 Topics. Topics are grouped into subfields, which are grouped into fields, which are grouped into top-level domains. This is shown in the diagram below, along with the counts for each.

<figure><img src="../../.gitbook/assets/topics_diag1.png" alt=""><figcaption></figcaption></figure>

Works are assigned topics using a model that assigns scores for each topic for a work. The highest-scoring topic is that work's [`primary_topic`](../works/work-object/README.md#primary_topic). Each topic has one subfield, one field, and one domain, so each of these may also be used to classify the work, depending on the level of granularity you want. We also provide additional highly ranked topics for works, in [`Work.topics`](../works/work-object/README.md#topics).

To learn more about how OpenAlex topics work in general, see [the Topics page at OpenAlex help pages](https://help.openalex.org/how-it-works/topics).

For a detailed description of the methods behind OpenAlex Topics, see our paper: "OpenAlex: End-to-End Process for Topic Classification" (LINK COMING SOON). The code and model are available at (LINK COMING SOON).

## What's next

Learn more about what you can do with topics:

* [The Topic object](topic-object.md)
* [Get a single topic](get-a-single-topic.md)
* [Get lists of topics](get-lists-of-topics.md)
* [Filter topics](filter-topics.md)
* [Search topics](search-topics.md)
* [Group topics](group-topics.md)
