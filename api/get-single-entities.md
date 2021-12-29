---
description: Get a single entity, based on an ID
---

# Get single entities



It's easy to retrieve a singleton entity object from any of the five entity endpoints: just add an ID as the first path parameter like so:

`/<entity_name>/<:id>`

So for example, if I want to get the work with the OpenAlex ID `W2741809807`, I'd make this query:

``[`https://api.openalex.org/works/W2741809807`](https://api.openalex.org/works/W2741809807)``

That will return a Work object, describing everything OpenAlex knows about the&#x20;
