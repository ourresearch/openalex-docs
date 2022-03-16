# Get lists of entities

{% hint style="info" %}
See the [API overview](./) for info on API rate-limits, authentication, etc.
{% endhint %}

Any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints) can return a list of entities; you simply call the endpoint directly, adn get a list of all the entities we have of that type. For example:

* Get a list of all the concepts in OpenAlex:\
  [`https://api.openalex.org/concepts`](https://api.openalex.org/concepts)

This query returns a `meta` object with details about the query, a `results` list of [entity objects](../about-the-data/), and an empty [`group_by`](get-groups-of-entities.md) list:

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

These responses become a lot more useful when you add parameters to [filter](get-lists-of-entities.md#filter), [search](get-lists-of-entities.md#search), [sort](get-lists-of-entities.md#sort-results), and [group](get-groups-of-entities.md) them.

## Filter

Filters narrow the list down to just entities that meet a particular condition--specifically, a particular value for a particular attribute. Supported attributes for each endpoints are listed below.

Filters are formatted thusly: `attribute:value`. You set them using the `?filter` query parameter. Filters are case-insensitive. Examples:

* Get works whose [type](https://docs.openalex.org/entity-objects/work#type) is `book`:\
  [`https://api.openalex.org/works?filter=type:book`](https://api.openalex.org/works?filter=type:book)
* Get authors whose name is Einstein:\
  [`https://api.openalex.org/authors?filter=display_name.search:einstein`](https://api.openalex.org/authors?filter=display\_name.search:einstein)``

If the attribute you're filtering is a number or an ISO-formatted date string, you can filter using "less than" or "greater than." Example:

* Get venues that host more than 1000 works:\
  [`https://api.openalex.org/venues?filter=works_count:>1000`](https://api.openalex.org/venues?filter=works\_count:%3E1000)\`\`

If you want to filter for a specific time range of a work you can use `from_publication_date` and `to_publication_date` (the bounds are inclusive). Example:

* Get all publications between 2022-01-01 and 2022-01-26 (including those dates):\
  [`https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26`](https://api.openalex.org/works?filter=from\_publication\_date:2022-01-01,to\_publication\_date:2022-01-26)\`\`

You can stack filters together, and the list will return entities that satisfy all the filters--in other words, it combines multiple filters using "AND." Separate multiple filter with commas. Example:

* Get US-based authors who've been cited more than 100 times:\
  [`https://api.openalex.org/authors?filter=last_known_institution.country_code:US,cited_by_count:>100`](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E0)\`\`

Each endpoint supports its own list of filters. Here they are, by endpoint:

### `/works` filters

You can filter using these attributes of the `Works` object. You can find more documentation about each attribute on the [Work page](../about-the-data/work.md).

* `display_name.search` (alias: `title.search`)
* `publication_year`
* `publication_date`
* `from_publication_date`
* `to_publication_date`
* `host_venue.issn`
* `host_venue.publisher`
* `host_venue.id`
* `type`
* `is_paratext`
* `open_access.oa_status` (alias: `oa_status`)
* `open_access.is_oa` (alias: `is_oa`)
* `authorships.author.id` (alias: `author.id`)
* `authorships.author.orcid` (alias: `author.orcid`)
* `authorships.institutions.id` (alias `institutions.id`)
* `authorships.institutions.ror` (alias: `institutions.ror`)
* `authorships.institutions.country_code` (alias: `institutions.country_code`)
* `authorships.institutions.type` (alias: `institutions.type`)
* `cited_by_count`
* `is_retracted`
* `concepts.id`
* `concepts.wikidata`
* `alternate_host_venues.license`
* `alternate_host_venues.version`
* `alternate_host_venues.venue_id`
* `referenced_works` (alias: `cites`)

### `/authors` filters

You can filter using these attributes of the `Authors` object. You can find more documentation about each attribute on the [Author page.](../about-the-data/author.md)

* `display_name.search`
* `works_count`
* `cited_by_count`
* `last_known_institution.id`
* `last_known_institution.ror`
* `last_known_institution.country_code`
* `last_known_institution.type`
* `x_concepts.id`

### `/venues` filters

You can filter using these attributes of the `Venue` object. You can find more documentation about each attribute on the [Venue page](../about-the-data/venue.md).

* `display_name.search`
* `issn`
* `publisher` (requires exact match)
* `works_count`
* `cited_by_count`
* `x_concepts.id`
* `is_oa`
* `is_in_doaj`

### `/institutions` filters

You can filter using these attributes of the `Institution` object. You can find more documentation about each attribute on the [Institution page](../about-the-data/institution.md).

* `display_name.search`
* `country_code`
* `type`
* `works_count`
* `cited_by_count`
* `x_concepts.id`

### `/concepts` filters

You can filter using these attributes of the `Concept` object. You can find more documentation about each attribute on the [Concept page.](../about-the-data/concept.md)

* `display_name.search`
* `level`
* `works_count`
* `cited_by_count`
* `ancestors.id`

## Search

Search is just another kind of filter, one that all five endpoints support. But unlike the other filters, search doesn't require an exact match. To filter using search, append `.search` to the end of the property you're filtering for.

Currently, only the `display_name` property supports fulltext search (also the `Work.title` property, which is just an alias for `Work.display_name`). You can't yet do fulltext search on abstract, or any other field. Examples:

* Get authors who have "Einstein" as part of their name:\
  [https://api.openalex.org/authors?filter=display\_name.search:einstein](https://api.openalex.org/authors?filter=display\_name.search:einstein)
* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

By default, multi-word searches are treated as separate terms, but given more weight when they appear together. You can also require an exact match for a given phrase by enclosing it with quotes. Example:

* Get works with the exact phrase "intensive treatment of diabetes" in the title:\
  [https://api.openalex.org/works?filter=title.search:"intensive treatment of diabetes"](https://api.openalex.org/works?filter=title.search:%22intensive%20treatment%20of%20diabetes%22)

When you use a search filter, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`.\\

## Sort results

Use the ?sort parameter to specify the property you want your list sorted by. You can sort by these properties, where they exist:

* `display_name`
* `cited_by_count`
* `works_count`
* `publication_date`
* `relevance_score` (only exists if there's a [search filter](get-lists-of-entities.md#search) active)

By default, sort direction is ascending. You can reverse this by appending `:desc` to the sort key like `works_count:desc`. You can sort by multiple properties by providing multiple sort keys, separated by commas. Examples:

* All works, sorted by `cited_by_count` (highest counts first)\
  [https://api.openalex.org/works?sort=cited\_by\_count:desc](https://api.openalex.org/works?sort=cited\_by\_count:desc)
* All venues, in alphabetical order by title:\
  [https://api.openalex.org/venues?sort=display\_name](https://api.openalex.org/venues?sort=display\_name)

## Pagination

### Basic pagination (up to 10,000 results)

To page through results, specify the page you want using the `?page` query parameter. By default there are 25 results per page; you can use the `?per-page` parameter to change that to any number between 1 and 200.

Currently you can only use paging to read the first 10,000 results of any list. To read more, you'll need to use cursor pagination.

### Cursor pagination

Request a cursor by appending `cursor=*` to any endpoint. Such as:

[https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=\*](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=\*)

This creates a `next_cursor` value within meta that can be used to page through all results:

`next_cursor: "IlsxNjA5MzcyODAwMDAwXSI="`

To retrieve the next page of results, copy the `next_cursor` value into the cursor field in the URL:

[https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=IlsxNjA5MzcyODAwMDAwXSI=](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=IlsxNjA5MzcyODAwMDAwXSI=)

You can use the new `next_cursor` within that result to continue paging. You will know you reached the end of results when `next_cursor` is null and the results set is empty.
