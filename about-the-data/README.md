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

The OpenAlex ID is the primary key for all entities. It's a URL shaped like this: `https://openalex.org/<OpenAlex_key>`. Here's a real-world example:&#x20;

``[`https://openalex.org/W2741809807`](https://openalex.org/W2741809807)``

### The OpenAlex Key

The OpenAlex ID has two parts. The first part is the Base; it's always `https://openalex.org/.` The second part is the Key; it's the unique primary key that identifies a given resource in our database.

The key starts with a letter; that letter tells you what kind of entity you've got: **W**(ork), **A**(uthor), **V**(enue), **I**(nstitution), or **C**(oncept). The IDs are not case-sensitive, so `w2741809807` is just as valid as `W2741809807`. So in the example above, the Key is `W2741809807`, and the `W` at the front tells us that this is a `Work`. &#x20;

Because OpenAlex was launched as a replacement for [Microsoft Academic Graph (MAG)](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/), OpenAlex IDs are designed to be backwards-compatible with MAG IDs, where they exist. To find the MAG ID, just take the first letter off the front of the unique part of the ID (so in the example above, the MAG ID is `2741809807`). Of course this won't yield anything useful for entities that don't have a MAG ID.

### Getting format you want

An OpenAlex ID is a URL that identifies a resource (data about an entity). You can use [content negotiation](../website.md#content-negotiation) to request this same resource in different formats. Currently this means either using the ID in its default form to get a webpage, or appending `.json` to it to get a JSON API response:

* Get a webpage describing this work:\
  [`https://openalex.org/W2741809807`](https://openalex.org/W2741809807)``
* Get a JSON object describing this same work, via our API (note the `.json` at the end):\
  [`https://openalex.org/W2741809807.json`](https://openalex.org/W2741809807.json)``



## Dehydrated entity objects

The full entity objects can get pretty unwieldy, especially when you're embedding a list of them in another object (for instance, a list of `Concept`s in a `Work`). For these cases, all the entities except `Work`s have a dehydrated version. This is a stripped-down representation of the entity that carries only its most essential properties. These properties are documented individually on their respective entity pages.

##

