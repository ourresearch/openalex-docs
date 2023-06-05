# Get groups of entities

Sometimes instead of just listing entities, you want to _group them_ into facets, and count how many entities are in each group. For example, maybe you want to count the number of `Works` by [open access status](../../the-data/works/work-object/#open\_access). To do that, you call the entity endpoint, adding the `?group_by` parameter. Example:

* Get counts of works by Open Access status:\
  [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group\_by=oa\_status)

This returns a `meta` object with details about the query, an empty `results` object, and a `group_by` object with the groups you've asked for:

```json
{
    meta: {
        count: 6,
        db_response_time_ms: 26,
        page: 1,
        per_page: 200
    },
    results: [ ],
    group_by: [
        {
            key: "unknown",
            key_display_name: "unknown",
            count: 110691108
        },
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

So from this we can see that the majority of works (66,862,508 of them) are `closed`, with another 10,499,470 `bronze`, and so forth.

You can group by most of the same properties that you can [filter](../get-lists-of-entities/filter-entity-lists.md) by, and you can combine grouping with filtering.

## Group properties

Each group object in the `group_by` list contains three properties:

#### `key`

Value: a string; the [OpenAlex ID](../get-single-entities/#the-openalex-id) or raw value of the `group_by` parameter for members of this group. See details on [`key` and `key_display_name`](./#key-and-key\_display\_name).

#### `key_display_name`

Value: a string; the `display_name` or raw value of the `group_by` parameter for members of this group. See details on [`key` and `key_display_name`](./#key-and-key\_display\_name).

#### `count`

Value: an integer; the number of entities in the group.

## `key` and `key_display_name`

If the value being grouped by is an OpenAlex `Entity`, the [`key`](./#key) and [`key_display_name`](./#key\_display\_name) properties will be that `Entity`'s `id` and `display_name`, respectively.

* Group `Works` by `Institution`:\
  [`https://api.openalex.org/works?group_by=authorships.institutions.id`](https://api.openalex.org/works?group\_by=authorships.institutions.id)
* For one group, `key` is "[https://openalex.org/I136199984](https://openalex.org/I136199984)" and `key_display_name` is "Harvard University".

Otherwise, `key` is the same as `key_display_name`; both are the raw value of the `group_by` parameter for this group.

* Group `Concepts` by [`level`](../../the-data/concepts/concept-object.md#level):\
  [`https://api.openalex.org/concepts?group_by=level`](https://api.openalex.org/concepts?group\_by=level)
* For one group, both `key` and `key_display_name` are "3".
