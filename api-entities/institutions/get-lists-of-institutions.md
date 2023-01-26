# Get lists of institutions

You can get lists of institutions:

* Get _all_ institutions in OpenAlex\
  [https://api.openalex.org/institutions](https://api.openalex.org/institutions)

Which returns a response like this:

```json
{
    "meta": {
        "count": 108618,
        "db_response_time_ms": 32,
        "page": 1,
        "per_page": 25
    },
    "results": [
        {
            "id": "https://openalex.org/I27837315",
            "ror": "https://ror.org/00jmfr291",
            "display_name": "University of Michigan–Ann Arbor",
            // more fields (removed to save space)
        },
        {
            "id": "https://openalex.org/I201448701",
            "ror": "https://ror.org/00cvxb145",
            "display_name": "University of Washington",
            // more fields (removed to save space)
        },
        // more results (removed to save space)
    ],
    "group_by": []
}
```

## Page and sort institutions

By default we return 25 results per page. You can change this default and [page](../../how-to-use-the-api/get-lists-of-entities/paging.md) through institutions with the `per-page` and `page` parameters:

* Get the second page of institutions results, with 50 results returned per page\
  [https://api.openalex.org/institutions?per-page=50\&page=2](https://api.openalex.org/institutions?per-page=50\&page=2)

You also can [sort results](../../how-to-use-the-api/get-lists-of-entities/sort-entity-lists.md) with the `sort` parameter:

* Sort institutions by cited by count, descending\
  [https://api.openalex.org/institutions?sort=cited\_by\_count:desc](https://api.openalex.org/institutions?sort=cited\_by\_count:desc)

Continue on to learn how you can [filter](filter-institutions.md) and [search](search-institutions.md) lists of institutions.
