# Filter entity lists

Filters narrow the list down to just entities that meet a particular condition--specifically, a particular value for a particular attribute.&#x20;

A list of filters are set using the `filter` parameter,  formatted like this: `filter=attribute:value,attribute2:value2`. Examples:

* Get the works whose [type](https://docs.openalex.org/entity-objects/work#type) is `book`:\
  [`https://api.openalex.org/works?filter=type:book`](https://api.openalex.org/works?filter=type:book)
* Get the authors whose name is Einstein:\
  [`https://api.openalex.org/authors?filter=display_name.search:einstein`](https://api.openalex.org/authors?filter=display\_name.search:einstein)``

Filters are case-insensitive.&#x20;

## Logical expressions

### Inequality

For numerical filters, use the less-than (`<`) and greater-than (`>`) symbols to filter by inequalities. Example:

* Get venues that host more than 1000 works:\
  [`https://api.openalex.org/venues?filter=works_count:>1000`](https://api.openalex.org/venues?filter=works\_count:%3E1000)

Some attributes have special filters that act as syntactic sugar around commonly-expressed inequalities: for example, the `from_publication_date` filter on `works`. See the endpoint-specific documentation below for more information. Example:&#x20;

* Get all works published between 2022-01-01 and 2022-01-26 (inclusive):\
  [`https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26`](https://api.openalex.org/works?filter=from\_publication\_date:2022-01-01,to\_publication\_date:2022-01-26)

### Negation

You can negate any filter, numerical or otherwise, by prepending the exclamation mark symbol (`!`) to the filter value. Example:

* Get all institutions _except_ for ones located in the US:\
  [`https://api.openalex.org/institutions?filter=country_code:!us`](https://api.openalex.org/institutions?filter=country\_code:!us)``

### Intersection

By default, the returned result set includes only records that satisfy _all_ the supplied filters. In other words, filters are combined as an AND query. Example:

* Get all works that have been cited more than once _and_ are free to read:\
  [`https://api.openalex.org/works?filter=cited_by_count:>1,is_oa:true`](https://api.openalex.org/works?filter=cited\_by\_count:%3E1,is\_oa:true)``
* Get all the works that have an author from France _and_ an author from the UK:\
  [`https://api.openalex.org/works?filter=institutions.country_code:fr,institutions.country_code:gb`](https://api.openalex.org/works?filter=institutions.country\_code:fr,institutions.country\_code:gb)``

### Addition

Use the pipe symbol (`|`) to input lists of values such that _any_ of the values can be satisfied



&#x20;the attribute you're filtering is a number or an ISO-formatted date string, you can filter using "less than" or "greater than." Example:

* Get venues that host more than 1000 works:\
  [`https://api.openalex.org/venues?filter=works_count:>1000`](https://api.openalex.org/venues?filter=works\_count:%3E1000)
*

If you want to filter for a specific time range of a work you can use `from_publication_date` and `to_publication_date` (the bounds are inclusive). Example:

* Get all publications between 2022-01-01 and 2022-01-26 (including those dates):\
  [`https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26`](https://api.openalex.org/works?filter=from\_publication\_date:2022-01-01,to\_publication\_date:2022-01-26)
*

You can stack filters together, and the list will return entities that satisfy all the filters--in other words, it combines multiple filters using "AND." Separate multiple filter with commas. Example:

* Get US-based authors who've been cited more than 100 times:\
  [`https://api.openalex.org/authors?filter=last_known_institution.country_code:US,cited_by_count:>100`](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E0)

Each endpoint supports its own list of filters. Here they are, by endpoint:

### Boolean OR within filter clauses

In the above examples, the comma-separated filter clauses are combined using AND. The query [https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:>100](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E100) requests authors where `last_known_institution.country code = US AND cited_by_count > 100`.

Within each clause, you can include multiple values using the pipe character `|` to create multiple filter clauses on that attribute and combine them with OR. If you change the query above to [https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:FR|DE,cited\_by\_count:>100](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:FR|DE,cited\_by\_count:%3E100), you're now asking for authors where `(last_known_institution.country code = FR  OR  last_known_institution.country code = DE) AND cited_by_count > 100`.

One application of this feature is to look up multiple entities by ID in the same query: [https://api.openalex.org/works?filter=openalex\_id:W2412437380|W2739898018](https://api.openalex.org/works?filter=openalex\_id:W2412437380|W2739898018)

You can combine up to 50 filter parameter values in this way.

### `/works` filters

You can filter using these attributes of the `Works` object. You can find more documentation about each attribute on the [Work page](../../about-the-data/work.md).

* ``[`publication_year`](../../about-the-data/work.md#publication\_year)``
* ``[`publication_date`](../../about-the-data/work.md#publication\_date)``
* ``[`host_venue.issn`](../../about-the-data/work.md#host\_venue)``
* ``[`host_venue.publisher`](../../about-the-data/work.md#host\_venue)``
* ``[`host_venue.id`](../../about-the-data/work.md#host\_venue)``
* ``[`type`](../../about-the-data/work.md#type)``
* ``[`is_paratext`](../../about-the-data/work.md#is\_paratext)``
* ``[`open_access.oa_status`](../../about-the-data/work.md#open\_access) (alias: `oa_status`)
* ``[`open_access.is_oa`](../../about-the-data/work.md#open\_access) (alias: `is_oa`)
* ``[`authorships.author.id`](../../about-the-data/work.md#authorships) (alias: `author.id`)
* ``[`authorships.author.orcid`](../../about-the-data/work.md#authorships) (alias: `author.orcid`)
* ``[`authorships.institutions.id`](../../about-the-data/work.md#authorships) (alias `institutions.id`)
* ``[`authorships.institutions.ror`](../../about-the-data/work.md#authorships) (alias: `institutions.ror`)
* ``[`authorships.institutions.country_code`](../../about-the-data/work.md#authorships) (alias: `institutions.country_code`)
* ``[`authorships.institutions.type`](../../about-the-data/work.md#authorships) (alias: `institutions.type`)
* ``[`cited_by_count`](../../about-the-data/work.md#cited\_by\_count)``
* ``[`is_retracted`](../../about-the-data/work.md#is\_retracted)``
* ``[`concepts.id`](../../about-the-data/work.md#concepts)``
* ``[`concepts.wikidata`](../../about-the-data/work.md#concepts)``
* ``[`alternate_host_venues.license`](../../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](../../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.venue_id`](../../about-the-data/work.md#alternate\_host\_venues)``

#### Additional filters

These filters aren't attributes of the [Work entity](../../about-the-data/work.md) object, but they're included to address some important use cases:

* `display_name.search` (alias: `title.search`)
  * Takes a string and returns works with [`display_name`](../../about-the-data/work.md#display\_name)s exactly matching that string. In most cases, the [`search` parameter](filter-entity-lists.md#search) is better at finding works relevant to your search terms. Unless you're specifically interested in the content of titles, the [`search` parameter](filter-entity-lists.md#search) is better than using [search as a filter](filter-entity-lists.md#search-as-a-filter).
* `raw_affiliation_string.search`
  * Takes a string and returns works with at least one [`raw_affiliation_string`](../../about-the-data/work.md#raw\_affiliation\_string) matching that string.
  * Example:\
    Get works with _Department of Political Science, University of Amsterdam_ in a  `raw_affiliation_string`: [https://api.openalex.org/works?filter=raw\_affiliation\_string.search:department%20of%20political%20science%20university%20of%amsterdam](https://api.openalex.org/works?filter=raw\_affiliation\_string.search:department%20of%20political%20science%20university%20of%20amsterdam)
* `has_doi`&#x20;
  * Takes a boolean (`true` or `false`) and returns a list of works that have/lack a DOI. It's mostly useful for [grouping](../get-groups-of-entities.md).&#x20;
  * Example: \
    Get a count of all the works in OpenAlex that have a DOI, and all the ones that don't:\
    [https://api.openalex.org/works?group\_by=has\_doi](https://api.openalex.org/works?group\_by=has\_doi)
* `cites`
  * Takes an OpenAlex ID and returns the list of works that cite that work. You can think of this as **incoming citations**.&#x20;
  * Example: Get works that cite [https://openalex.org/W2741809807](https://openalex.org/W2741809807) ("The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles")  [`https://api.openalex.org/works?filter=cites:W2741809807`](https://api.openalex.org/works?filter=cites:W2741809807)``
* `cited_by`
  * Takes an OpenAlex ID and returns the list of works found in that record's `referenced_works` section. You can think of this as **outgoing citations**. Example: [https://api.openalex.org/works?filter=cited\_by:W2766808518](https://api.openalex.org/works?filter=cited\_by:W2766808518)
* `related_to`
  * Takes an OpenAlex ID and returns the list of works found in that record's `related_works` section. Example: [https://api.openalex.org/works?filter=related\_to:W2486144666](https://api.openalex.org/works?filter=related\_to:W2486144666)
* `from_publication_date`
  * Takes a date (yyyy-mm-dd) and returns a list of works with [`publication_date`](../../about-the-data/work.md#publication\_date) greater than or equal to that date.
* `to_publication_date`
  * Takes a date (yyyy-mm-dd) and returns a list of works with [`publication_date`](../../about-the-data/work.md#publication\_date) less than or equal to that date.

### `/authors` filters

You can filter using these attributes of the `Authors` object. You can find more documentation about each attribute on the [Author page.](../../about-the-data/author.md)

* ``[`works_count`](../../about-the-data/author.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/author.md#cited\_by\_count)``
* ``[`last_known_institution.id`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.ror`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.country_code`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.type`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`x_concepts.id`](../../about-the-data/author.md#x\_concepts)``

#### Additional Filters

These filters aren't attributes of the [Author entity](../../about-the-data/author.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Authors with [`display_name`](../../about-the-data/author.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](filter-entity-lists.md#search) is better than using [search as a filter](filter-entity-lists.md#search-as-a-filter).
* `has_orcid`
  * Takes a boolean (`true` or `false`) and returns a list of Authors that have/lack an [orcid](../../about-the-data/author.md#orcid).
  * Example: \
    Get a count of all the authors in OpenAlex that have an orcid, and all the ones that don't: [https://api.openalex.org/authors?group\_by=has\_orcid](https://api.openalex.org/authors?group\_by=has\_orcid)

### `/venues` filters

You can filter using these attributes of the `Venue` object. You can find more documentation about each attribute on the [Venue page](../../about-the-data/venue.md).

* ``[`issn`](../../about-the-data/venue.md#issn)``
* ``[`publisher`](../../about-the-data/venue.md#publisher) (requires exact match)
* ``[`works_count`](../../about-the-data/venue.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/venue.md#cited\_by\_count)``
* ``[`x_concepts.id`](../../about-the-data/venue.md#x\_concepts)``
* ``[`is_oa`](../../about-the-data/venue.md#is\_oa)``
* ``[`is_in_doaj`](../../about-the-data/venue.md#is\_in\_doaj)``

#### Additional Filters

These filters aren't attributes of the [Venue entity](../../about-the-data/venue.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Venues with [`display_name`](../../about-the-data/venue.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](filter-entity-lists.md#search) is better than using [search as a filter](filter-entity-lists.md#search-as-a-filter).
* `has_issn`
  * Takes a boolean (`true` or `false`) and returns a list of Venues that have/lack an [issn](../../about-the-data/venue.md#issn).
  * Example: \
    Get a count of all the Venues in OpenAlex that have an issn, and all the ones that don't: [https://api.openalex.org/venues?group\_by=has\_issn](https://api.openalex.org/venues?group\_by=has\_issn)

### `/institutions` filters

You can filter using these attributes of the `Institution` object. You can find more documentation about each attribute on the [Institution page](../../about-the-data/institution.md).

* ``[`country_code`](../../about-the-data/institution.md#country\_code)``
* ``[`type`](../../about-the-data/institution.md#type)``
* ``[`works_count`](../../about-the-data/institution.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/institution.md#cited\_by\_count)``
* ``[`x_concepts.id`](../../about-the-data/institution.md#x\_concepts)``

#### Additional Filters

These filters aren't attributes of the [Institution entity](../../about-the-data/institution.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Institutions with [`display_name`](../../about-the-data/institution.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](filter-entity-lists.md#search) is better than using [search as a filter](filter-entity-lists.md#search-as-a-filter).
* `has_ror`
  * Takes a boolean (`true` or `false`) and returns a list of Venues that have/lack a [ror](../../about-the-data/institution.md#ror).
  * Example: \
    Get a count of all the Institutions in OpenAlex that have a ror, and all the ones that don't: [https://api.openalex.org/institutions?group\_by=has\_ror](https://api.openalex.org/institutions?group\_by=has\_ror)

### `/concepts` filters

You can filter using these attributes of the `Concept` object. You can find more documentation about each attribute on the [Concept page.](../../about-the-data/concept.md)

* ``[`level`](../../about-the-data/concept.md#level)``
* ``[`works_count`](../../about-the-data/concept.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/concept.md#cited\_by\_count)``
* ``[`ancestors.id`](../../about-the-data/concept.md#ancestors)``

#### Additional Filters

These filters aren't attributes of the [Concept entity](../../about-the-data/concept.md) object, but they're included to address some important use cases:

* `display_name.search`
  * Takes a string and returns Concepts with [`display_name`](../../about-the-data/concept.md#display\_name)s exactly matching that string. In most cases, unless you're specifically interested in display names, the [`search` parameter](filter-entity-lists.md#search) is better than using [search as a filter](filter-entity-lists.md#search-as-a-filter).
* `has_wikidata`
  * Takes a boolean (`true` or `false`) and returns a list of Concepts that have/lack a [Wikidata ID](../../about-the-data/concept.md#wikidata). For now, all concepts in OpenAlex _do_ have Wikidata IDs.
  * Example: \
    Get a count of all the Concepts in OpenAlex that have Wikidata ID, and all the ones that don't: [https://api.openalex.org/concepts?group\_by=has\_wikidata](https://api.openalex.org/concepts?group\_by=has\_wikidata)
