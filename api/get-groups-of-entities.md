# Get groups of entities

{% hint style="info" %}
See the [API overview](./) for info on rate limiting, authentication, etc.
{% endhint %}

Sometimes instead of just listing entities, you want to _group them_ into facets, and count how many entities are in each group. For example, maybe want to . To do that, you call the appropriate entity endpoint, adding the `?group_by` parameter. Here's an example:

* Get counts of works by Open Access status:\
  [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group\_by=oa\_status)

This returns a `meta` object with details about the query, an empty `results` object, and a `group_by` object with the groups you've asked for:

```json
{
    meta: {
        count: 85668865,
        db_response_time_ms: 112,
        page: 1,
        per_page: 50
        },
    results: [ ],
    group_by: [
        {
        key: "closed",
        count: 25629370
        },
        {
        key: "bronze",
        count: 3806644
        },
        {
        key: "gold",
        count: 3608769
        },
        {
        key: "green",
        count: 2636551
        },
        {
        key: "hybrid",
        count: 1109128
        }
    ]
}
```

So from this we can see that the majority of works (25,629,370 of them) are `closed`, with another 3,806,644 `bronze` ones, and so forth. &#x20;
