# Get lists of entities

{% hint style="info" %}
See the [API overview](./) for info on API rate-limits, authentication, etc.
{% endhint %}

Any of the five [entity endpoints](https://docs.openalex.org/api#entity-endpoints) can return a list of entities; you simply call the endpoint directly, and get a list of all the entities we have of that type. For example:

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
  [`https://api.openalex.org/venues?filter=works_count:>1000`](https://api.openalex.org/venues?filter=works\_count:%3E1000)

If you want to filter for a specific time range of a work you can use `from_publication_date` and `to_publication_date` (the bounds are inclusive). Example:

* Get all publications between 2022-01-01 and 2022-01-26 (including those dates):\
  [`https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26`](https://api.openalex.org/works?filter=from\_publication\_date:2022-01-01,to\_publication\_date:2022-01-26)

You can stack filters together, and the list will return entities that satisfy all the filters--in other words, it combines multiple filters using "AND." Separate multiple filter with commas. Example:

* Get US-based authors who've been cited more than 100 times:\
  [`https://api.openalex.org/authors?filter=last_known_institution.country_code:US,cited_by_count:>100`](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E0)

Each endpoint supports its own list of filters. Here they are, by endpoint:

### Boolean OR within filter clauses

In the above examples, the comma-separated filter clauses are combined using AND. The query [https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:>100](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E100) requests authors where `last_known_institution.country code = US AND cited_by_count > 100`.

Within each clause, you can include multiple values using the pipe character `|` to create multiple filter clauses on that attribute and combine them with OR. IF you change the query above to [https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:FR|DE,cited\_by\_count:>100](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:FR|DE,cited\_by\_count:%3E100), you're now asking for authors where `(last_known_institution.country code = FR  OR  last_known_institution.country code = DE) AND cited_by_count > 100`.

One application of this feature is to look up multiple entities by ID in the same query: [https://api.openalex.org/works?filter=openalex\_id:W2412437380|W2739898018](https://api.openalex.org/works?filter=openalex\_id:W2412437380|W2739898018)



### `/works` filters

You can filter using these attributes of the `Works` object. You can find more documentation about each attribute on the [Work page](../about-the-data/work.md).

* ``[`publication_year`](../about-the-data/work.md#publication\_year)``
* ``[`publication_date`](../about-the-data/work.md#publication\_date)``
* ``[`host_venue.issn`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.publisher`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.id`](../about-the-data/work.md#host\_venue)``
* ``[`type`](../about-the-data/work.md#type)``
* ``[`is_paratext`](../about-the-data/work.md#is\_paratext)``
* ``[`open_access.oa_status`](../about-the-data/work.md#open\_access) (alias: `oa_status`)
* ``[`open_access.is_oa`](../about-the-data/work.md#open\_access) (alias: `is_oa`)
* ``[`authorships.author.id`](../about-the-data/work.md#authorships) (alias: `author.id`)
* ``[`authorships.author.orcid`](../about-the-data/work.md#authorships) (alias: `author.orcid`)
* ``[`authorships.institutions.id`](../about-the-data/work.md#authorships) (alias `institutions.id`)
* ``[`authorships.institutions.ror`](../about-the-data/work.md#authorships) (alias: `institutions.ror`)
* ``[`authorships.institutions.country_code`](../about-the-data/work.md#authorships) (alias: `institutions.country_code`)
* ``[`authorships.institutions.type`](../about-the-data/work.md#authorships) (alias: `institutions.type`)
* ``[`cited_by_count`](../about-the-data/work.md#cited\_by\_count)``
* ``[`is_retracted`](../about-the-data/work.md#is\_retracted)``
* ``[`concepts.id`](../about-the-data/work.md#concepts)``
* ``[`concepts.wikidata`](../about-the-data/work.md#concepts)``
* ``[`alternate_host_venues.license`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.venue_id`](../about-the-data/work.md#alternate\_host\_venues)``

#### Additional filters

These filters aren't attributes of the [Work entity](../about-the-data/work.md) object, but they're included to address some important use cases:

* `display_name.search` (alias: `title.search`)
  * Takes a string and returns Works with [`display_name`](../about-the-data/work.md#display\_name)s exactly matching that string. In most cases, the [`search` parameter](get-lists-of-entities.md#search) is better at finding works relevant to your search terms. Unless you're specifically interested in the content of titles, the [`search` parameter](get-lists-of-entities.md#search) is better than using [search as a filter](get-lists-of-entities.md#search-as-a-filter).
* `has_doi`&#x20;
  * Takes a boolean (`true` or `false`) and returns a list of works that have/lack a DOI. It's mostly useful for [grouping](get-groups-of-entities.md).&#x20;
  * Example: \
    Get a count of all the works in OpenAlex that have a DOI, and all the ones that don't:\
    [`https://api.openalex.org/works?group_by=has_doi`](https://api.openalex.org/works?group\_by=has\_doi)
* `cites`
  * Takes an OpenAlex ID and returns the list of works that cite that work. You can think of this as **incoming citations**.&#x20;
  * Example: Get works that cite [https://openalex.org/W2741809807](https://openalex.org/W2741809807) ("The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles")  [`https://api.openalex.org/works?filter=cites:W2741809807`](https://api.openalex.org/works?filter=cites:W2741809807)``
* `cited_by`
  * Takes an OpenAlex ID and returns the list of works found in that record's `referenced_works` section. You can think of this as **outgoing citations**. Example: [https://api.openalex.org/works?filter=cited\_by:W2766808518](https://api.openalex.org/works?filter=cited\_by:W2766808518)
* `related_to`
  * Takes an OpenAlex ID and returns the list of works found in that record's `related_works` section. Example: [https://api.openalex.org/works?filter=related\_to:W2486144666](https://api.openalex.org/works?filter=related\_to:W2486144666)
* `from_publication_date`
  * Takes a date (yyyy-mm-dd) and returns a list of works with [`publication_date`](../about-the-data/work.md#publication\_date) greater than or equal to that date.
* `to_publication_date`
  * Takes a date (yyyy-mm-dd) and returns a list of works with [`publication_date`](../about-the-data/work.md#publication\_date) less than or equal to that date.

### `/authors` filters

You can filter using these attributes of the `Authors` object. You can find more documentation about each attribute on the [Author page.](../about-the-data/author.md)

* ``[`works_count`](../about-the-data/author.md#works\_count)``
* ``[`cited_by_count`](../about-the-data/author.md#cited\_by\_count)``
* ``[`last_known_institution.id`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.ror`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.country_code`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.type`](../about-the-data/author.md#last\_known\_institution)``
* ``[`x_concepts.id`](../about-the-data/author.md#x\_concepts)``

#### Additional Filters

These filters aren't attributes of the [Author entity](../about-the-data/author.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Authors with [`display_name`](../about-the-data/author.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](get-lists-of-entities.md#search) is better than using [search as a filter](get-lists-of-entities.md#search-as-a-filter).
* `has_orcid`
  * Takes a boolean (`true` or `false`) and returns a list of Authors that have/lack an [orcid](../about-the-data/author.md#orcid).
  * Example: \
    Get a count of all the authors in OpenAlex that have an orcid, and all the ones that don't: [https://api.openalex.org/authors?group\_by=has\_orcid](https://api.openalex.org/authors?group\_by=has\_orcid)

### `/venues` filters

You can filter using these attributes of the `Venue` object. You can find more documentation about each attribute on the [Venue page](../about-the-data/venue.md).

* ``[`issn`](../about-the-data/venue.md#issn)``
* ``[`publisher`](../about-the-data/venue.md#publisher) (requires exact match)
* ``[`works_count`](../about-the-data/venue.md#works\_count)``
* ``[`cited_by_count`](../about-the-data/venue.md#cited\_by\_count)``
* ``[`x_concepts.id`](../about-the-data/venue.md#x\_concepts)``
* ``[`is_oa`](../about-the-data/venue.md#is\_oa)``
* ``[`is_in_doaj`](../about-the-data/venue.md#is\_in\_doaj)``

#### Additional Filters

These filters aren't attributes of the [Venue entity](../about-the-data/venue.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Venues with [`display_name`](../about-the-data/venue.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](get-lists-of-entities.md#search) is better than using [search as a filter](get-lists-of-entities.md#search-as-a-filter).
* `has_issn`
  * Takes a boolean (`true` or `false`) and returns a list of Venues that have/lack an [issn](../about-the-data/venue.md#issn).
  * Example: \
    Get a count of all the Venues in OpenAlex that have an issn, and all the ones that don't: [https://api.openalex.org/venues?group\_by=has\_issn](https://api.openalex.org/venues?group\_by=has\_issn)

### `/institutions` filters

You can filter using these attributes of the `Institution` object. You can find more documentation about each attribute on the [Institution page](../about-the-data/institution.md).

* ``[`country_code`](../about-the-data/institution.md#country\_code)``
* ``[`type`](../about-the-data/institution.md#type)``
* ``[`works_count`](../about-the-data/institution.md#works\_count)``
* ``[`cited_by_count`](../about-the-data/institution.md#cited\_by\_count)``
* ``[`x_concepts.id`](../about-the-data/institution.md#x\_concepts)``

#### Additional Filters

These filters aren't attributes of the [Institution entity](../about-the-data/institution.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Institutions with [`display_name`](../about-the-data/institution.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](get-lists-of-entities.md#search) is better than using [search as a filter](get-lists-of-entities.md#search-as-a-filter).
* `has_ror`
  * Takes a boolean (`true` or `false`) and returns a list of Venues that have/lack a [ror](../about-the-data/institution.md#ror).
  * Example: \
    Get a count of all the Institutions in OpenAlex that have a ror, and all the ones that don't: [https://api.openalex.org/institutions?group\_by=has\_ror](https://api.openalex.org/institutions?group\_by=has\_ror)

### `/concepts` filters

You can filter using these attributes of the `Concept` object. You can find more documentation about each attribute on the [Concept page.](../about-the-data/concept.md)

* ``[`level`](../about-the-data/concept.md#level)``
* ``[`works_count`](../about-the-data/concept.md#works\_count)``
* ``[`cited_by_count`](../about-the-data/concept.md#cited\_by\_count)``
* ``[`ancestors.id`](../about-the-data/concept.md#ancestors)``

#### Additional Filters

These filters aren't attributes of the [Concept entity](../about-the-data/concept.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Concepts with [`display_name`](../about-the-data/concept.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](get-lists-of-entities.md#search) is better than using [search as a filter](get-lists-of-entities.md#search-as-a-filter).
* `has_wikidata`
  * Takes a boolean (`true` or `false`) and returns a list of Concepts that have/lack a [Wikidata ID](../about-the-data/concept.md#wikidata). For now, all concepts in OpenAlex _do_ have Wikidata IDs.
  * Example: \
    Get a count of all the Concepts in OpenAlex that have Wikidata ID, and all the ones that don't: [https://api.openalex.org/concepts?group\_by=has\_wikidata](https://api.openalex.org/concepts?group\_by=has\_wikidata)

## Search

Search is supported on all five endpoints and can be combined with filters. Search does not require an exact match. Use the `?search` parameter to search any endpoint with full-text:

* Get works with search term "dna"\
  [https://api.openalex.org/works?search=dna](https://api.openalex.org/works?search=dna)

For `works`, search uses `display_name` and `abstract_inverted_index` fields to find results. The `concepts` endpoint uses `display_name` and `description` to build results. All other endpoints use `display_name` only.

Multi-word searches are treated as separate terms, but given more weight when they appear together. You can also require an exact match for a given phrase by enclosing it with quotes:

* Get works with the exact phrase "intensive treatment of diabetes" in the title:\
  [https://api.openalex.org/works?search="intensive%20treatment%20of%20diabetes"](https://api.openalex.org/works?search=%22intensive%20treatment%20of%20diabetes%22)

When you using search, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`.

### Search as a filter

You can limit search to exact fields by using it as a filter. Append `.search` to the end of the property you are filtering for:

* Get authors who have "Einstein" as part of their name:\
  [https://api.openalex.org/authors?filter=display\_name.search:einstein](https://api.openalex.org/authors?filter=display\_name.search:einstein)
* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

Currently, only the `display_name` property supports full-text search (also the `Work.title` property, which is just an alias for `Work.display_name`). The fields `abstract_inverted_index` from `works` and `description` from `concepts` are coming soon.

## Sort results

Use the `?sort` parameter to specify the property you want your list sorted by. You can sort by these properties, where they exist:

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

You can sort by relevance\_score when searching:

* Sort by year, then by relevance\_score when searching for "bioplastics"\
  [https://api.openalex.org/works?filter=display\_name.search:bioplastics\&sort=publication\_year:desc,relevance\_score:desc](https://api.openalex.org/works?filter=display\_name.search:bioplastics\&sort=publication\_year:desc,relevance\_score:desc)

An error is thrown if attempting to sort by relevane\_score without a search query.

## Pagination

### Basic paging (up to 10,000 results)

To page through results easily, specify the page you want using the `?page` query parameter. By default there are 25 results per page; you can use the `?per-page` parameter to change that to any number between 1 and 200.

* Get the 2nd page of results, with 100 results per page\
  [https://api.openalex.org/works?per-page=100\&page=2](https://api.openalex.org/works?per-page=100\&page=2)

You can only use paging to read the first 10,000 results of any list. To read more, you'll need to use cursor pagination.

### Cursor paging

Cursor paging is a more advanced method when you need to retrieve results over 10,000 records. The number of results using cursor paging is unlimited.

Request a cursor by appending `cursor=*` to any endpoint.

* Get a cursor in order to start cursor pagination\
  [https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=\*](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=\*)

This creates a `next_cursor` value within meta that can be used to page through all results:

```json
{
  "meta": {
    "count": 8695857,
    "db_response_time_ms": 28,
    "page": null,
    "per_page": 100,
    "next_cursor": "IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI="
  },
  "results" : [
    // the first page of results
  ]
}
```

To retrieve the next page of results, copy the `next_cursor` value into the cursor field in the URL.

* Get the next page of results using a cursor value: [https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI=](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI=)

You can use the `next_cursor` value within that result to continue paging. You will know you reached the end of results when `next_cursor` is null and the results set is empty.

{% hint style="warning" %}
Since the number of results is unlimited, you can use cursor paging to retrieve every Entity of a given type. _Please don't do this._

* It's bad for you because it can easily take several days to page through a long list like _Works_ or _Authors_.
* It's bad for us (and other users!) because it puts a heavy load on our servers during that time.

Instead, try the [data snapshot](../download-snapshot/). You'll get all the results much faster and in the same format as the API responses.
{% endhint %}
