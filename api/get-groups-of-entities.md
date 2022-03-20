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
        count: 5,
        db_response_time_ms: 26,
        page: 1,
        per_page: 50
    },
    results: [ ],
    group_by: [
        {
            key: "closed",
            key_display_name: "closed",
            count: 66862508
        },
        {
            key: "gold",
            key_display_name: "gold",
            count: 11087903
        },
        {
            key: "bronze",
            key_display_name: "bronze",
            count: 10499470
        },
        {
            key: "green",
            key_display_name: "green",
            count: 6918466
        },
        {
            key: "hybrid",
            key_display_name: "hybrid",
            count: 3277958
        }
    ]
}
```

So from this we can see that the majority of works (66,862,508 of them) are `closed`, with another 10,499,470 `bronze` ones, and so forth. &#x20;

You can group by most of the same properties that you can filter by, and you can combine grouping with filtering.&#x20;
