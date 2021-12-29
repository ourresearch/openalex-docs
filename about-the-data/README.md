---
description: The things OpenAlex is made out of
---

# Entity objects

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. There are five types of entities, each with its own object:

* :page\_facing\_up: [Works](work.md) are papers, books, datasets, etc; they _cite_ other works
* :woman: [Authors](author.md) are people who _create_ works
* :books: [Venues](venue.md) are journals and repositories that _host_ works
* :school: [Institutions](institution.md) are universities and other orgs that are _affiliated with_ works (via authors)
* :bulb: [Concepts](concept.md) _tag_ Works with a topic

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of of hundreds of millions of entities and over a billion connections between them all..

## The OpenAlex ID

The OpenAlex ID is the primary key for all entities. Its canonical format is as a URL shaped like this: `https://openalex.org/<OpenAlexID>`. Example: [https://openalex.org/W2741809807](https://openalex.org/W2741809807)

Following the URL will take you to the resource that the ID is attached to. By default, the resource will be represented by a webpage. But if you append a `.json` to it, you'll get the same resource in JSON via our REST API.

Because OpenAlex was originally launched as a replacement for Microsoft Academic Graph (MAG), OpenAlex IDs are designed to be somewhat backwards-compatible with MAG IDs. For&#x20;

## Dehydrated entity objects

The full entity objects can get pretty unwieldy, especially when you're embedding a list of them in another object (for instance, a list of concepts in a work). For these cases, all the entities except works have a dehydrated version. This is a stripped-down representation of the entity that carries only its most essential properties. These properties are documented individually on their respective entity pages.

##

