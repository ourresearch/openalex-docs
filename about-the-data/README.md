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

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and over a billion connections between them all.

## The OpenAlex ID

The OpenAlex ID is the primary key for all entities. Its canonical format is a URL shaped like this: `https://openalex.org/<OpenAlexID>`. Here's a real-world example:&#x20;

``[`https://openalex.org/W2741809807`](https://openalex.org/W2741809807)``

The resource served at that URL is always the same, but its representation depends on what you ask for. By default, you'll get a webpage. If you [append a `.json` to the ID](https://openalex.org/W2741809807.json), you'll get the same resource but in JSON, via our [API](../api/).

The first letter in the unique part of the ID tells you what kind of entity you've got. In the example above, the unique part of the ID is `W2741809807`; the `W` at the front tells us that this is a work. The other possible first letters are `A` (author), `V` (venue), `I` (institution), and `C` (concept). The IDs are not case-sensitive, so `w2741809807` is just as valid as `W2741809807`.

Because OpenAlex was launched as a replacement for [Microsoft Academic Graph (MAG)](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/), OpenAlex IDs are designed to be backwards-compatible with MAG IDs. To find the MAG ID, just take the first letter off the front of the unique part of the ID (so in the example above, the MAG ID is `2741809807`). Of course this won't yield anything useful for entities that don't have a MAG ID.

## Dehydrated entity objects

The full entity objects can get pretty unwieldy, especially when you're embedding a list of them in another object (for instance, a list of concepts in a work). For these cases, all the entities except works have a dehydrated version. This is a stripped-down representation of the entity that carries only its most essential properties. These properties are documented individually on their respective entity pages.

##

