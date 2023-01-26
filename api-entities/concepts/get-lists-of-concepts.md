# Get lists of concepts

You can get lists of concepts:

* Get _all_ concepts in OpenAlex\
  [https://api.openalex.org/concepts](https://api.openalex.org/concepts)

Which returns a response like this:

```json
{
    "meta": {
        "count": 65073,
        "db_response_time_ms": 26,
        "page": 1,
        "per_page": 25
    },
    "results": [
        {
            "id": "https://openalex.org/C41008148",
            "wikidata": "https://www.wikidata.org/wiki/Q21198",
            "display_name": "Computer science",
            // more fields (removed to save space)
        },
        {
            "id": "https://openalex.org/C71924100",
            "wikidata": "https://www.wikidata.org/wiki/Q11190",
            "display_name": "Medicine",
            // more fields (removed to save space)
        },
        // more results (removed to save space)
    ],
    "group_by": []
}
```

## Page and sort concepts

By default we return 25 results per page. You can change this default and [page](../../how-to-use-the-api/get-lists-of-entities/paging.md) through concepts with the `per-page` and `page` parameters:

* Get the second page of concepts results, with 50 results returned per page\
  [https://api.openalex.org/concepts?per-page=50\&page=2](https://api.openalex.org/concepts?per-page=50\&page=2)

You also can [sort results](../../how-to-use-the-api/get-lists-of-entities/sort-entity-lists.md) with the `sort` parameter:

* Sort concepts by cited by count, descending\
  [https://api.openalex.org/concepts?sort=cited\_by\_count:desc](https://api.openalex.org/concepts?sort=cited\_by\_count:desc)

Continue on to learn how you can [filter](filter-concepts.md) and [search](search-concepts.md) lists of concepts.
