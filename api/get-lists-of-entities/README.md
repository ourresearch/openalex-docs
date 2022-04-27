# Get lists of entities

{% hint style="info" %}
See the [API overview](../) for info on API rate-limits, authentication, etc.
{% endhint %}

Any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints) can return a list of entities; you simply call the endpoint directly, and get a list of all the entities we have of that type. For example:

* Get a list of all the concepts in OpenAlex:\
  [`https://api.openalex.org/concepts`](https://api.openalex.org/concepts)

This query returns a `meta` object with details about the query, a `results` list of [entity objects](../../about-the-data/), and an empty [`group_by`](../get-groups-of-entities.md) list:

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

Listing entities is a lot more useful when you add parameters to [filter](filter-entity-lists.md), [search](search-entity-lists.md), [sort](sort-entity-lists.md) them.

