---
description: Get a single entity, based on an ID
---

# Get single entities

{% hint style="info" %}
See the [API overview](./) for more information about endpoints and how to call them..
{% endhint %}

It's easy to retrieve a singleton [entity object](https://docs.openalex.org/about-the-data#entity-objects) from any of the five entity endpoints: just add an ID to the path of any entity endpoint, the first path parameter like so:

`/<entity_name>/<:id>`

So for example, if you want to get the work with the OpenAlex ID `W2741809807`, you'd make this query:

``[`https://api.openalex.org/works/W2741809807`](https://api.openalex.org/works/W2741809807)``

That will return a [Work](../about-the-data/work.md) object, describing everything OpenAlex knows about the work with that ID.
