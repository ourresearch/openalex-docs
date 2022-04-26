---
description: Get a single entity, based on an ID
---

# Get single entities

{% hint style="info" %}
See the [API overview](./) for info on rate limiting, authentication, etc.
{% endhint %}

It's easy to retrieve a singleton [entity object](https://docs.openalex.org/about-the-data#entity-objects) from any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints): just add an ID to the path of any entity endpoint like so:

`https://api.openalex.org/<entity_name>/<:id>`

So for example, if you want to get the work with the OpenAlex ID [https://openalex.org/W2741809807](https://openalex.org/W2741809807), you'd make this query:

``[`https://api.openalex.org/works/https://openalex.org/W2741809807`](https://api.openalex.org/works/https://openalex.org/W2741809807)``

That will return a [`Work`](../about-the-data/work.md) object, describing everything OpenAlex knows about the work with that ID.    You can use IDs other than OpenAlex IDs, and you can also format the IDs in different ways. Read below to learn more.

{% hint style="info" %}
To get a single entity, you need a single _unambiguous_ identifier, like an ORCID or an OpenAlex ID. If you've got an ambiguous identifier (like an author's name) then it may apply to many entities, so you need filter a _list_ of them. For example, this gets a list of the authors called Einstein: \
\
[`https://api.openalex.org/authors?filter=display_name.search:einstein`](https://api.openalex.org/authors?filter=display\_name.search:einstein)\
\
To learn more, see [Get lists of entities](get-lists-of-entities/).


{% endhint %}



## Supported IDs

For each entity type, you can retrieve the entity using by any of the external IDs we support--not just the native OpenAlex IDs. So for example:

* Get the work with this doi: `https://doi.org/10.7717/peerj.4375`:\
  [https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375](https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375)

This works with DOIs, ISSNs, ORCIDs, and lots of other IDs...in fact, you can use any ID listed in an entity's `ids` property, as listed below:

* ``[`Work.ids`](https://docs.openalex.org/entity-objects/work#ids)``
* ``[`Author.ids`](https://docs.openalex.org/entity-objects/author#ids)``
* ``[`Venue.ids`](https://docs.openalex.org/entity-objects/venue#ids)``
* ``[`Institution.ids`](https://docs.openalex.org/entity-objects/institution#ids)``
* ``[`Concept.ids`](https://docs.openalex.org/entity-objects/concept#ids)``

## ID formats

Most of the external IDs OpenAlex supports are canonically expressed as URLs...for example, [the canonical form of a DOI](https://www.crossref.org/display-guidelines/) always starts with `https://doi.org/`. You can always use these URL-style IDs in the entity endpoints. Examples:

* Get the institution with the ROR [https://ror.org/02y3ad647](https://ror.org/02y3ad647) (University of Florida):\
  [`https://api.openalex.org/institutions/https://ror.org/02y3ad647`](https://api.openalex.org/institutions/https://ror.org/02y3ad647)``
* Get the author with the ORCID [https://orcid.org/0000-0003-1613-5981](https://orcid.org/0000-0003-1613-5981) (Heather Piwowar):\
  [`https://api.openalex.org/authors/https://orcid.org/0000-0003-1613-5981`](https://api.openalex.org/authors/https://orcid.org/0000-0003-1613-5981)``

For simplicity and clarity, you may also want to express those IDs in a simpler, URN-style format, and that's supported as well; you just write the namespace of the ID, followed by the ID itself. Here are the same examples from above, but in the namespace:id format:

* Get the institution with the ROR [https://ror.org/02y3ad647](https://ror.org/02y3ad647) (University of Florida):\
  [`https://api.openalex.org/institutions/ror:02y3ad647`](https://api.openalex.org/institutions/ror:02y3ad647)``
* Get the author with the ORCID [https://orcid.org/0000-0003-1613-5981](https://orcid.org/0000-0003-1613-5981) (Heather Piwowar):\
  [`https://api.openalex.org/authors/orcid:0000-0003-1613-5981`](https://api.openalex.org/authors/orcid:0000-0003-1613-5981)``

Finally, if you're using an OpenAlex ID, you can be even more succinct, and just use the [Key](../about-the-data/#the-openalex-key) part of the ID all by itself, the part that looks like `w1234567`:

* Get the work with OpenAlex ID https://openalex.org/W2741809807:\
  [https://api.openalex.org/works/W2741809807](https://api.openalex.org/works/W2741809807)

## Random entity

You can get a random entity by using the string `random` where an ID would normally go. OMG that's so random! Each time you call this URL you'll get a different entity.  Examples:

* Get a random institution:\
  [`https://api.openalex.org/institutions/random`](https://api.openalex.org/institutions/random)``
* Get a random concept:\
  [`https://api.openalex.org/concepts/random`](https://api.openalex.org/concepts/random)

\
