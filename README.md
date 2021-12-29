# Welcome!

OpenAlex is an [open](https://docs.openalex.org/about-the-data#license) catalog of the global research system. It's named after the [ancient Library of Alexandria.](https://en.wikipedia.org/wiki/Library\_of\_Alexandria)

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. There are five types of entities:

* :page\_facing\_up: [Works](about-the-data/work.md) are papers, books, datasets, etc; they _cite_ other works
* :woman: [Authors](about-the-data/author.md) are people who _create_ works
* :books: [Venues](about-the-data/venue.md) are journals and repositories that _host_ works
* :school: [Institutions](about-the-data/institution.md) are universities and other orgs that are _affiliated with_ works (via authors)
* :bulb: [Concepts](about-the-data/concept.md) _tag_ Works with a topic

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of of hundreds of millions of entities and over a billion connections between them all.

There are three ways to access the OpenAlex dataset:

* The [website](website.md),
* the [API](api/), and
* the [database snapshot](download-snapshot/).

This documentation has sections for each of these three. Finally, there's a section [about the data itself](about-the-data/), and a [FAQ](faq.md).

