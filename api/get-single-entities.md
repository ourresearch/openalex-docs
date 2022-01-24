---
description: Get a single entity, based on an ID
---

# Get single entities

{% hint style="info" %}
See the [API overview](./) for info on rate limiting, authentication, etc.
{% endhint %}



It's easy to retrieve a singleton [entity object](https://docs.openalex.org/about-the-data#entity-objects) from any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints): just add an ID to the path of any entity endpoint like so:

`/<entity_name>/<:id>`

So for example, if you want to get the work with the OpenAlex ID `W2741809807`, you'd make this query:

``[`https://api.openalex.org/works/W2741809807`](https://api.openalex.org/works/W2741809807)``

That will return a [`Work`](../about-the-data/work.md) object, describing everything OpenAlex knows about the work with that ID. Naturally any endpoint will accept an OpenAlex ID, but but many external IDs (eg DOI, ISSN) are accepted as well, in several formats.

## ID formats

The OpenAlex API accepts IDs in one of two formats:

{% hint style="info" %}
For [OpenAlex IDs](https://docs.openalex.org/entity-objects#the-openalex-id), there's a simpler format: you can just use the unique part of the ID (it looks like `w424242`) by itself, without any namespace or URL.
{% endhint %}

### **`namespace:id` format**

This is the namespace of the identifier, followed by a colon, and then the ID itself. It works for all IDs that we support. examples:

* `doi:10.123`
* `ror:456`
* `openalex:w4242`

### URL format

Many [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) are canonically expressed as a URL that will take you to the thing being identified. Where these URL formats exist, OpenAlex treats them as the canonical ID, and also accepts them as valid IDs. Examples:

* &#x20;`https://doi.org/10.123`&#x20;
* `https://openalex.org/w4242`.&#x20;

## Supported IDs

For each entity type, you can query by any of the IDs we include in that entity's `ids` property:

* ``[`Work.ids`](https://docs.openalex.org/entity-objects/work#ids)``
* ``[`Author.ids`](https://docs.openalex.org/entity-objects/author#ids)``
* ``[`Venue.ids`](https://docs.openalex.org/entity-objects/venue#ids)``
* ``[`Institution.ids`](https://docs.openalex.org/entity-objects/institution#ids)``
* ``[`Concept.ids`](https://docs.openalex.org/entity-objects/concept#ids)``

## Random entity

You can get a random entity by using the string random where an ID would normally go. Each time you call this URL you'll get a different entity.  Examples:

* Get a random institution:\
  [`https://api.openalex.org/institutions/random`](https://api.openalex.org/institutions/random)``
* Get a random concept:\
  [`https://api.openalex.org/concepts/random`](https://api.openalex.org/concepts/random)\
