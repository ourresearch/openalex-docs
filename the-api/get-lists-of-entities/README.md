# Get lists of entities

It's easy to get a list of entity objects from from the API:`/<entity_name>.` Here's an example:

* Get a list of _all_ the concepts in OpenAlex:\
  [`https://api.openalex.org/concepts`](https://api.openalex.org/concepts)

This query returns a `meta` object with details about the query, a `results` list of [`Concept`](../../the-data/concepts/concept-object.md) objects, and an empty [`group_by`](../get-groups-of-entities/) list:

```json
meta: {
    count: 64,843,
    db_response_time_ms: 11,
    page: 1,
    per_page: 25
    },
results: [
    // long list of Concept entities
 ],
group_by: [] // empty
```

Listing entities is a lot more useful when you add parameters to [page](paging.md), [filter](filter-entity-lists.md), [search](search-entities.md), and [sort](sort-entity-lists.md) them. Keep reading to learn how to do that.
