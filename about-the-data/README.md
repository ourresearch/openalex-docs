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

![](https://i.imgur.com/FXTji65.png)

Together, all these entities and the links between them make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of hundreds of millions of entities and billions of connections.

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

## Merged Entities

Every [OpenAlex ID](./#the-openalex-id) will be supported forever. But the IDs and the Entities they represent are only a model of the world, and that model is always changing. Sometimes we have two Entities, and thus two IDs, that refer to the same person or thing in the real world. This poses a problem: If we learn that Entities A and B refer to the same thing, for example if two author IDs refer to the same person, what do we do with them? We can't delete one since both IDs need to work forever, but it needs to be clear that both IDs represent the same person.

Our solution to this problem to "merge" the IDs. If authors A1 and A2 are the same person, and we decide to keep A2 as this person's canonical ID, we change all internal references to A111 to A222 and update all relevant data, for example A2 will be credited with A1's Works. Inside OpenAlex, A1 effectively _is_ deleted, but we we have to take a few extra steps to keep A1 working [in our API](../api/get-single-entities.md#merged-entity-ids) and in any [copies of the snapshot](../download-snapshot/snapshot-data-format.md#merged-entities).

## Canonical External IDs

Every entity has an OpenAlex ID. Most entities also have IDs in other systems, too. There are hundreds of different ID systems, but we've selected a single external ID system for each entity to provide the **Canonical External ID**--this is the ID in the system that's been most fully adopted by the community, and is most frequently used in the wild. We support other external IDs as well, but the canonical ones get a privileged spot in the API and dataset.&#x20;

These are the Canonical External IDs:

* Works: [DOI](work.md#title)
* Authors: [ORCID](author.md#orcid)
* Venues: [ISSN-L](venue.md#issn\_l)
* Institutions: [ROR ID](institution.md#ror)
* Concepts: [Wikidata ID](concept.md#wikidata)

## Dehydrated entity objects

The full entity objects can get pretty unwieldy, especially when you're embedding a list of them in another object (for instance, a list of `Concept`s in a `Work`). For these cases, all the entities except `Work`s have a dehydrated version. This is a stripped-down representation of the entity that carries only its most essential properties. These properties are documented individually on their respective entity pages.

##

