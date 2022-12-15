# Welcome!

OpenAlex is a [fully open](license.md) catalog of the global research system. It's named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library\_of\_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).

## Data

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. There are five types of entities:

* :page\_facing\_up: [Works](about-the-data/work.md) are papers, books, datasets, etc; they _cite_ other works
* :woman: [Authors](about-the-data/author.md) are people who _create_ works
* :books: [Venues](about-the-data/venue.md) are journals and repositories that _host_ works
* :school: [Institutions](about-the-data/institution.md) are universities and other orgs that are _affiliated with_ works (via authors)
* :bulb: [Concepts](about-the-data/concept.md) _tag_ Works with a topic

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and billions of connections between them all.

You can read more about the [entity objects](about-the-data/) that make up OpenAlex, or [about the data](about-the-data.md) more broadly.

## Access

OpenAlex data is completely free and open, provided under a [CC0 license](license.md). There are three ways to actually get the OpenAlex dataset:

* the [API](api/)
* the [website](website.md) (launching soon), and
* the [database snapshot](download-snapshot/).

## Contact

For tech support and bug reports, submit them via our [help request](https://openalex.org/help) form. You can follow us on Twitter at [@OpenAlex\_org](https://twitter.com/openalex\_org). For announcements and discussion, join the [OpenAlex Users newsgroup](https://groups.google.com/g/openalex-users).

## Funding

OpenAlex is made with generous support from [Arcadia—a charitable fund of Lisbet Rausing and Peter Baldwin](https://www.arcadiafund.org.uk/).

## Citation

If you use OpenAlex in research, please cite [this paper](https://arxiv.org/abs/2205.01833):&#x20;

> Priem, J., Piwowar, H., & Orr, R. (2022). _OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts_. ArXiv. https://arxiv.org/abs/2205.01833
