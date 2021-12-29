---
description: Get a single entity, based on an ID
---

# Get single entities

{% hint style="info" %}
See the [API overview](./) for more information about API usage.
{% endhint %}

It's easy to retrieve a singleton [entity object](https://docs.openalex.org/about-the-data#entity-objects) from any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints): just add an ID to the path of any entity endpoint, the first path parameter like so:

`/<entity_name>/<:id>`

So for example, if you want to get the work with the OpenAlex ID `W2741809807`, you'd make this query:

``[`https://api.openalex.org/works/W2741809807`](https://api.openalex.org/works/W2741809807)``

That will return a [Work](../about-the-data/work.md) object, describing everything OpenAlex knows about the work with that ID.

## ID formats

The OpenAlex API accepts IDs in three formats:

* **namespace:id**, for example `doi:10.123`, `ror:456`, or `openalex:w4242`. Works for all IDs.
* **url**, for example `https://doi.org/10.123` or `https://openalex.org/w4242`. Works for IDs where the ID provider pubically documents a URL format.
* **id-only**, for example, `w4242`. Works _exclusively_ for OpenAlex IDs.

## Supported IDs

Here are the IDs and formats supported by each endpoint:

* `/works`&#x20;
  * `OpenAlex (all formats)`
  * `DOI (namespace:id, url)`
  * ``
* `/authors`
* `/venues`
* `/institutions`
* `/concepts`
