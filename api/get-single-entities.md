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

That will return a [Work](../about-the-data/work.md) object, describing everything OpenAlex knows about the work with that ID. Naturally any endpoint will accept an OpenAlex ID, but but many external IDs (eg DOI, ISSN) are accepted as well, in several formats.

## ID formats

The OpenAlex API accepts IDs in one of three formats:

### **`namespace:id` format**

This is the namespace of the identifier, followed by a colon, and then the ID itself. It works for all IDs that we support. examples:

* `doi:10.123`
* `ror:456`
* `openalex:w4242`

### URL format

Many [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) are canonically expressed as a URL that will take you to the thing being identified. Where these URL formats exist, OpenAlex treats them as the canonical ID, and also accepts them as valid IDs. Examples:

* &#x20;`https://doi.org/10.123`&#x20;
* `https://openalex.org/w4242`.&#x20;

### ID-only format

{% hint style="info" %}
This only works for OpenAlex IDs. For all other IDs, you must specify the namespace by using either the [namespace:id](get-single-entities.md#namespace-id) format or [URL format](get-single-entities.md#url).
{% endhint %}

Since they're the native IDs for the system, we give OpenAlex IDs special treatment: the unique part of any OpenAlex ID can be used alone, without formatting it as a URL or specifying any namespace.. Example: `w123`



* ## Supported IDs

Here are the IDs and formats supported by each endpoint:

* `/works`&#x20;
  * `OpenAlex (all formats)`
  * `DOI (namespace:id, url)`
  * ``
* `/authors`
* `/venues`
* `/institutions`
* `/concepts`
