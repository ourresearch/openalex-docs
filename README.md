# Overview

OpenAlex is a fully open catalog of the global research system. It's named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library\_of\_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).

## Data

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. There are five types of entities: [works](api-entities/works/), [authors](api-entities/authors/), [sources](api-entities/venues/), [institutions](api-entities/institutions/), [concepts](api-entities/concepts/), [publishers](api-entities/publishers/) and [geo](api-entities/geo/).

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and billions of connections between them all.

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

## Access

The API is the primary way to get OpenAlex data. It's free and requires no authentication. For best performance, [add your email](how-to-use-the-api/rate-limits-and-authentication.md#the-polite-pool) to all API requests, like `mailto=example@domain.com`.

## Client Libraries&#x20;

There's no officially-supported client library for the API, for now. However, there are several third-party libraries you can use (and if you know of others, give us a shout):

* [openalexR](https://github.com/massimoaria/openalexR) (R)
* [OpenAlexAPI](https://pypi.org/project/openalexapi/) (Python)
* [diophila](https://pypi.org/project/diophila/) (Python)
* [PyAlex](https://github.com/J535D165/pyalex) (Python)

If you're looking for a visual interface, you can also check out the free [VOSviewer](https://www.vosviewer.com/), which lets you make network visualizations based on OpenAlex data:

![](<.gitbook/assets/Screenshot by Dropbox Capture (1).png>)

## Contact

For tech support and bug reports, please visit our [help page](https://openalex.org/help). You can follow us on Twitter at [@OpenAlex\_org](https://twitter.com/openalex\_org).

## Citation

If you use OpenAlex in research, please cite [this paper](https://arxiv.org/abs/2205.01833):&#x20;

> Priem, J., Piwowar, H., & Orr, R. (2022). _OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts_. ArXiv. https://arxiv.org/abs/2205.01833
