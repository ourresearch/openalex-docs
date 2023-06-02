# Overview

<figure><img src=".gitbook/assets/OpenAlex-logo-5.png" alt=""><figcaption></figcaption></figure>

**OpenAlex** is a free and open catalog of the global research system. It's named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library\_of\_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).

The heart of OpenAlex is the [OpenAlex dataset](broken-reference), which describes scholarly [_entities_ ](api-entities/entities-overview.md)and how those entities are connected to each other. Types of entities include [works](api-entities/works/), [authors](api-entities/authors/), [sources](api-entities/sources/), [institutions](api-entities/institutions/), [concepts](api-entities/concepts/), [publishers](api-entities/publishers/), and [funders](api-entities/funders/).

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and billions of connections between them all.

We offer three ways to make use of this dataset:

1. [**The web interface** ](broken-reference)is the quickest way to get started. It lets you explore, search, and analyze the data with an intuitive visual app.
2. [**The API** ](broken-reference)offers a more powerful way to access the data, but requires some coding experience. It is a fast, modern REST API with generous limits and no authentication requirements. The web interface is built entirely on the API.
3. [**The data snapshot** ](broken-reference)is a full dump of the dataset available to download, which we update about once per month.

**All three of these options are free.**

We also offer [**OpenAlex Premium,** ](https://openalex.org/pricing)which includes services above and beyond the free tier, such as a higher daily limit for the API, and more frequent data updates. This is also a great way to support our mission and help keep us sustainable, so please check it out if you enjoy OpenAlex.

## Data

The OpenAlex dataset describes scholarly [_entities_ ](api-entities/entities-overview.md)and how those entities are connected to each other. Types of entities include [works](api-entities/works/), [authors](api-entities/authors/), [sources](api-entities/sources/), [institutions](api-entities/institutions/), [concepts](api-entities/concepts/), [publishers](api-entities/publishers/), and [funders](api-entities/funders/).

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and billions of connections between them all.

## Access

The API is the primary way to get OpenAlex data. It's free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, [add your email](how-to-use-the-api/rate-limits-and-authentication.md#the-polite-pool) to all API requests, like `mailto=example@domain.com`. [Learn more](how-to-use-the-api/api-overview.md)

There is also a complete database snapshot available to download. [Learn more about the data snapshot here.](download-all-data/openalex-snapshot.md)

The API has a limit of 100,000 calls per day, and the snapshot is updated monthly. If you need a higher limit, or more frequent updates, please look into [**OpenAlex Premium.**](https://openalex.org/pricing)

The web interface for OpenAlex is currently in development, with a beta launch coming in July. [Sign up to be notified about the launch here.](https://forms.gle/NDoXAQVKGQLpkF5U8)

## Why OpenAlex?

OpenAlex offers an open replacement for industry-standard scientific knowledge bases like Elsevier's Scopus and Clarivate's Web of Science. [Compared to](https://openalex.org/about#comparison) these paywalled services, OpenAlex offers significant advantages in terms of inclusivity, affordability, and avaliability.

OpenAlex is:

* _Big —_ We have about twice the coverage of the other services, and have significantly better coverage of non-English works and works from the Global South.
* _Easy —_ Our service is fast, modern, and well-documented.
* _Open —_ Our complete dataset is free under the CC0 license, which allows for transparency and reuse.

Many people and organizations have already found great value using OpenAlex. Have a look at the [Testimonials](https://openalex.org/testimonials) to hear what they've said!

## Contact

For tech support and bug reports, please visit our [help page](https://openalex.org/help). You can also join the [OpenAlex user group](https://groups.google.com/g/openalex-users), and follow us on [Twitter (@OpenAlex\_org)](https://twitter.com/openalex\_org) and [Mastodon](https://mastodon.social/@OpenAlex).

## Citation

If you use OpenAlex in research, please cite [this paper](https://arxiv.org/abs/2205.01833):

> Priem, J., Piwowar, H., & Orr, R. (2022). _OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts_. ArXiv. https://arxiv.org/abs/2205.01833
