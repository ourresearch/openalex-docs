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

### Negation (NOT)

You can negate any filter, numerical or otherwise, by prepending the exclamation mark symbol (`!`) to the filter value. Example:

* Get all institutions _except_ for ones located in the US:\
  [`https://api.openalex.org/institutions?filter=country_code:!us`](https://api.openalex.org/institutions?filter=country\_code:!us)``

### Intersection (AND)

By default, the returned result set includes only records that satisfy _all_ the supplied filters. In other words, filters are combined as an AND query. Example:

* Get all works that have been cited more than once _and_ are free to read:\
  [`https://api.openalex.org/works?filter=cited_by_count:>1,is_oa:true`](https://api.openalex.org/works?filter=cited\_by\_count:%3E1,is\_oa:true)``
* Get all the works that have an author from France _and_ an author from the UK:\
  [`https://api.openalex.org/works?filter=institutions.country_code:fr,institutions.country_code:gb`](https://api.openalex.org/works?filter=institutions.country\_code:fr,institutions.country\_code:gb)``

You can repeat a filter to create an AND query within a single attribute. Example:

* Get all works that have concepts "Medicine" _and_ "Artificial Intelligence":\
  [`https://api.openalex.org/works?filter=concepts.id:C71924100,concepts.id:C154945302`](https://api.openalex.org/works?filter=concepts.id:C71924100,concepts.id:C154945302)``

### Addition (OR)

Use the pipe symbol (`|`) to input lists of values such that _any_ of the values can be satisfied--in other words, when you separate filter values with a pipe, they'll be combined as an `OR` query. Example:

* Get all the works that have an author from France or an author from the UK:\
  [`https://api.openalex.org/works?filter=institutions.country_code:fr|gb`](https://api.openalex.org/works?filter=institutions.country\_code:fr|gb)``

This is particularly useful when you want to retrieve a many records by ID all at once. Instead of making a whole bunch of [singleton calls](../get-single-entities.md) in a loop, you can make one call, like this:

* Get the works with DOI `10.1371/journal.pone.0266781` _or_ with DOI `10.1371/journal.pone.0267149` (note the pipe separator between the two DOIs): \
  [https://api.openalex.org/works?filter=doi:https://doi.org/10.1371/journal.pone.0266781|https://doi.org/10.1371/journal.pone.0267149](https://api.openalex.org/works?filter=doi:https://doi.org/10.1371/journal.pone.0266781|https://doi.org/10.1371/journal.pone.0267149)

You can combine up to 50 values for a given filter in this way.&#x20;

{% hint style="info" %}
You can use OR for values _within_ a given filter, but not _between_ different filters. So this, for example, doesn't work and will return an error:&#x20;

* Get either French works _or_ ones published in the journal with ISSN 0957-1558:\
  [`https://api.openalex.org/works?filter=institutions.country_code:fr|host_venue.issn:0957-1558`](https://api.openalex.org/works?filter=institutions.country\_code:fr|host\_venue.issn:0957-1558)``
{% endhint %}

\


## `/works` filters

### `/works` attribute filters&#x20;

You can filter using these attributes of the `Work` entity object (click each one to view their documentation on the [`Work` entity page](../../about-the-data/work.md)):

* ``[`publication_year`](../../about-the-data/work.md#publication\_year)``
* ``[`publication_date`](../../about-the-data/work.md#publication\_date)``
* &#x20;[`host_venue.id`](../../about-the-data/work.md#host\_venue)``
* ``[`host_venue.issn`](../../about-the-data/work.md#host\_venue)``
* ``[`host_venue.license`](../../about-the-data/work.md)``
* ``[`host_venue.publisher`](../../about-the-data/work.md#host\_venue)``
* ``[`host_venue.type`](../../about-the-data/work.md#host\_venue)``
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
* ``[`doi`](../../about-the-data/work.md#title)``
* ``[`ids.mag`](../../about-the-data/work.md#ids) (alias: `mag`)
* &#x20;[`ids.openalex`](../../about-the-data/work.md#ids) (alias: `openalex`)
* ``[`ids.pmid`](../../about-the-data/work.md#ids) (alias: `pmid`)
* ``[`ids.pmcid`](../../about-the-data/work.md#ids) (alias: `pmcid`)
* ``[`alternate_host_venues.license`](../../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](../../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.venue_id`](../../about-the-data/work.md#alternate\_host\_venues)``

### `/works` convenience filters

These filters aren't attributes of the [`Work` entity](../../about-the-data/work.md) object, but they're handy for solving some common use cases:

#### `display_name.search` (alias: `title.search`)

Value: a search string

Returns: works whose[`display_name`](../../about-the-data/work.md#display\_name) (title) includes the given string; see [the search filter](search-entity-lists.md#the-search-filter) for details.&#x20;

* Get works with titles that mention the word "wombat":\
  [`https://api.openalex.org/works?filter=title.search:wombat`](https://api.openalex.org/works?filter=title.search:wombat)&#x20;

{% hint style="info" %}
For most cases, you should use the [`search` parameter](search-entity-lists.md#the-search-parameter) instead of this filter, because it uses a better search algorithm and searches over abstracts as well as titles.
{% endhint %}

#### `abstract.search`

Value: a search string

Returns: works whose abstract includes the given string. See [the search filter](search-entity-lists.md#the-search-filter) for details on the search algorithm used. &#x20;

* Get works with abstracts that mention "artificial intelligence": [`https://api.openalex.org/works?filter=abstract.search:artificial%20intelligence`](https://api.openalex.org/works?filter=abstract.search:artificial%20intelligence)``

#### **`fulltext.search`**

Value: a search string

Returns: works whose fulltext includes the given string. Fulltext search is powered by an index of word sequences called n-grams - see [Get N-grams](../get-n-grams.md) for coverage details.

* Get works with fulltext that mention "climate change": [`https://api.openalex.org/works?filter=fulltext.search:climate%20change`](https://api.openalex.org/works?filter=fulltext.search:climate%20change)``

#### `raw_affiliation_string.search`

Value: a search string

Returns: works that have at least one [`raw_affiliation_string`](../../about-the-data/work.md#raw\_affiliation\_string) which includes the given string.  See [the search filter](search-entity-lists.md#the-search-filter) for details on the search algorithm used. &#x20;

* Get works with the words _Department of Political Science, University of Amsterdam_ somewhere in at least one author's  `raw_affiliation_string`: [`https://api.openalex.org/works?filter=raw_affiliation_string.search:department%20of%20political%20science%20university%20of%amsterdam`](https://api.openalex.org/works?filter=raw\_affiliation\_string.search:department%20of%20political%20science%20university%20of%20amsterdam)``

#### `has_abstract`

Value: a Boolean (`true` or `false`)

Returns: works that have or lack an abstract, depending on the given value.

* Get the works that have abstracts:\
  [`https://api.openalex.org/works?filter=has_abstract:true`](https://api.openalex.org/works?filter=has\_abstract:true)

#### `has_doi`&#x20;

Value: a Boolean (`true` or `false`)

Returns: works that have or lack a DOI, depending on the given value. It's especially useful for [grouping](../get-groups-of-entities.md).

* Get the works that have no DOI assigned:\
  [`https://api.openalex.org/works?filter=has_doi:false`](https://api.openalex.org/works?filter=has\_doi:false) ``&#x20;

#### `has_ngrams`

Value: a Boolean (`true` or `false`)

Returns: works for which [n-grams](../get-n-grams.md) are available or unavailable, depending on the given value. N-grams power fulltext searches through the [`fulltext.search`](filter-entity-lists.md#fulltext.search) filter and the [`search`](search-entity-lists.md#the-search-parameter) parameter.

* Get the works that have n-grams:\
  [`https://api.openalex.org/works?filter=has_ngrams:true`](https://api.openalex.org/works?filter=has\_ngrams:true)

#### `has_references`

Value: a Boolean (`true` or `false`)

Returns: works that have or lack [referenced\_works](../../about-the-data/work.md#referenced\_works), depending on the given value.

* Get the works that have references:\
  [`https://api.openalex.org/works?filter=has_references:true`](https://api.openalex.org/works?filter=has\_references:true)

#### `cites`

Value: the [OpenAlex ID](../../about-the-data/#the-openalex-id) for a given work

Returns: works that cite the given work. You can think of this as **incoming citations**.&#x20;

* Get works that cite [https://openalex.org/W2741809807](https://openalex.org/W2741809807):  [`https://api.openalex.org/works?filter=cites:W2741809807`](https://api.openalex.org/works?filter=cites:W2741809807)``

{% hint style="info" %}
The number of results returned by this filter may be slightly higher than the work's[`cited_by_count`](../../about-the-data/work.md#cited\_by\_count)due to a timing lag in updating that field.&#x20;
{% endhint %}

#### `cited_by`

Value: the [OpenAlex ID](../../about-the-data/#the-openalex-id) for a given work

Returns: works found in the given work's [`referenced_works`](../../about-the-data/work.md#referenced\_works) section. You can think of this as **outgoing citations**.&#x20;

* Get works cited by [https://openalex.org/W2766808518](https://openalex.org/W2766808518):\
  [`https://api.openalex.org/works?filter=cited_by:W2766808518`](https://api.openalex.org/works?filter=cited\_by:W2766808518)``

#### `related_to`

Value: the [OpenAlex ID](../../about-the-data/#the-openalex-id) for a given work

Returns: works found in the given work's [`related_works`](../../about-the-data/work.md#related\_works) section.&#x20;

* Get works related to [https://openalex.org/W2486144666](https://openalex.org/W2486144666):\
  [`https://api.openalex.org/works?filter=related_to:W2486144666`](https://api.openalex.org/works?filter=related\_to:W2486144666)\


#### `from_publication_date`

Value: a date, formatted as `yyyy-mm-dd`

Returns: works with [`publication_date`](../../about-the-data/work.md#publication\_date) greater than or equal to the given date.

* Get works published on or _after_ March 14th, 2001:\
  [`https://api.openalex.org/works?filter=from_publication_date:2001-03-14`](https://api.openalex.org/works?filter=from\_publication\_date:2001-03-14)``

#### `to_publication_date`

Value: a date, formatted as `yyyy-mm-dd`

Returns: works with [`publication_date`](../../about-the-data/work.md#publication\_date) less than or equal to the given date.

* Get works published on or _before_ March 14th, 2001:\
  [`https://api.openalex.org/works?filter=to_publication_date:2001-03-14`](https://api.openalex.org/works?filter=to\_publication\_date:2001-03-14)``

#### `has_oa_accepted_or_published_version`

Value: a Boolean (`true` or `false`)

Returns: works with at least one [`host_venue`](../../about-the-data/work.md#host\_venue) or [`alternate_host_venue`](../../about-the-data/work.md#alternate\_host\_venues) where [`is_oa`](../../about-the-data/work.md#is\_oa)= true and [`version`](../../about-the-data/work.md#version) is acceptedVersion or publishedVersion. For Works that undergo peer review, like journal articles, this means there is a peer-reviewed OA copy somewhere. For some items, like books, a published version doesn't imply peer review, so they aren't quite synonymous.

* Get Works with an OA accepted or published copy\
  [`https://api.openalex.org/works?filter=has_oa_accepted_or_published_version:true`](https://api.openalex.org/works?filter=has\_oa\_accepted\_or\_published\_version:true)

#### has\_oa\_submitted\_version

Value: a Boolean (`true` or `false`)

Returns: works with at least one [`host_venue`](../../about-the-data/work.md#host\_venue) or [`alternate_host_venue`](../../about-the-data/work.md#alternate\_host\_venues) where [`is_oa`](../../about-the-data/work.md#is\_oa)= true and [`version`](../../about-the-data/work.md#version) is submittedVersion. This is useful for finding works with preprints deposited somewhere.

* Get Works with an OA submitted copy:\
  [`https://api.openalex.org/works?filter=has_oa_submitted_version:true`](https://api.openalex.org/works?filter=has\_oa\_submitted\_version:true)``

#### authorships.institutions.country.is\_\* __ (alias: institutions.country.is\_\*)

You can filter `authorships.institutions.country_code` by a global region using one of the following boolean filters:

* authorships.institutions.country.is\_antarctica
* authorships.institutions.country.is_north_america
*

Value: a Boolean (true or false)



## `/authors` filters

### `/authors` attribute filters

You can filter using these attributes of the `Author` entity object (click each one to view their documentation on the [`Author` entity page](../../about-the-data/author.md)):

* ``[`works_count`](../../about-the-data/author.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/author.md#cited\_by\_count)``
* ``[`last_known_institution.id`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.ror`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.country_code`](../../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.type`](../../about-the-data/author.md#last\_known\_institution)``
* [`ids.openalex`](../../about-the-data/author.md#ids) (alias: `openalex`)
* ``[`x_concepts.id`](../../about-the-data/author.md#x\_concepts)``

### `/authors` convenience filters

These filters aren't attributes of the [`Author` entity](../../about-the-data/author.md) object, but they're included to address some common use cases:

#### `display_name.search`

Value: a search string

Returns: Authors whose [`display_name`](../../about-the-data/author.md#display\_name) contains the given string; see [the search filter](search-entity-lists.md#the-search-filter) for details.

* Get authors named "tupolev":\
  [`https://api.openalex.org/authors?filter=display_name.search:tupolev`](https://api.openalex.org/authors?filter=display\_name.search:tupolev)&#x20;

{% hint style="info" %}
In most cases, you should use the [`search` parameter](search-entity-lists.md#the-search-parameter) instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_orcid`

Value: a Boolean (`true` or `false`)

Returns: authors that have or lack an [orcid](../../about-the-data/author.md#orcid), depending on the given value.

* Get the authors that have an ORCID:\
  ``[`https://api.openalex.org/authors?filter=has_orcid:true`](https://api.openalex.org/authors?filter=has\_orcid:true)

## `/venues` filters

### `/venues` attribute filters

You can filter using these attributes of the `Venue` entity object (click each one to view their documentation on the [`Venue` entity page](../../about-the-data/venue.md)):

* ``[`issn`](../../about-the-data/venue.md#issn)``
* ``[`publisher`](../../about-the-data/venue.md#publisher) (requires exact match)
* ``[`works_count`](../../about-the-data/venue.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/venue.md#cited\_by\_count)``
* ``[`x_concepts.id`](../../about-the-data/venue.md#x\_concepts)``
* ``[`is_oa`](../../about-the-data/venue.md#is\_oa)``
* ``[`is_in_doaj`](../../about-the-data/venue.md#is\_in\_doaj)``
* [`ids.openalex`](../../about-the-data/venue.md#ids) (alias: `openalex`)

### `/venues` convenience filters

These filters aren't attributes of the [`Venue` entity](../../about-the-data/venue.md) object, but they're included to address some common use cases:

#### `display_name.search`

Value: a search string

Returns: venues with a [`display_name`](../../about-the-data/venue.md#display\_name) containing the given string; see [the search filter](search-entity-lists.md#the-search-filter) for details.

* Get venues with names containing "Neurology":\
  [`https://api.openalex.org/venues?filter=display_name.search:Neurology`](https://api.openalex.org/venues?filter=display\_name.search:Neurology)

{% hint style="info" %}
In most cases, you should use the [`search` parameter](search-entity-lists.md#the-search-parameter) instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_issn`

Value: a Boolean (`true` or `false`)

Returns: venues that have or lack an [ISSN](../../about-the-data/venue.md#issn), depending on the given value.

* Get venues without ISSNs:\
  [`https://api.openalex.org/venues?filter=has_issn:false`](https://api.openalex.org/venues?filter=has\_issn:false)

## `/institutions` filters

### `/institutions` attribute filters

You can filter using these attributes of the `Institution` entity object (click each one to view their documentation on the [`Institution` entity page](../../about-the-data/institution.md)):

* ``[`country_code`](../../about-the-data/institution.md#country\_code)``
* ``[`type`](../../about-the-data/institution.md#type)``
* ``[`works_count`](../../about-the-data/institution.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/institution.md#cited\_by\_count)``
* [`ids.openalex`](../../about-the-data/institution.md#ids) (alias: `openalex`)
* ``[`x_concepts.id`](../../about-the-data/institution.md#x\_concepts)``

### `/institutions` convenience filters

These filters aren't attributes of the [`Institution` entity](../../about-the-data/institution.md) object, but they're included to address some common use cases:

#### `display_name.search`

Value: a search string

Returns: institutions with a [display\_name](../../about-the-data/institution.md#display\_name) containing the given string; see [the search filter](search-entity-lists.md#the-search-filter) for details.

* Get institutions with names containing "technology":\
  [`https://api.openalex.org/institutions?filter=display_name.search:technology`](https://api.openalex.org/institutions?filter=display\_name.search:technology)

{% hint style="info" %}
In most cases, you should use the [search parameter](search-entity-lists.md#the-search-parameter) instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_ror`

Value: a Boolean (`true` or `false`)

Returns: institutions that have or lack a [ROR ID](../../about-the-data/institution.md#ror), depending on the given value.

* Get institutions without ROR IDs:\
  [`https://api.openalex.org/institutions?filter=has_ror:false`](https://api.openalex.org/institutions?filter=has\_ror:false)

## `/concepts` filters

### `/concepts` attribute filters

You can filter using these attributes of the `Concept` entity object ((click each one to view their documentation on the [`Concept` entity page](../../about-the-data/concept.md)):

* ``[`level`](../../about-the-data/concept.md#level)``
* ``[`works_count`](../../about-the-data/concept.md#works\_count)``
* ``[`cited_by_count`](../../about-the-data/concept.md#cited\_by\_count)``
* ``[`ancestors.id`](../../about-the-data/concept.md#ancestors)``
* [`ids.openalex`](../../about-the-data/concept.md#ids) (alias: `openalex`)

### `/concepts` convenience filters

These filters aren't attributes of the [`Concept` entity ](../../about-the-data/concept.md)object, but they're included to address some common use cases:

#### `display_name.search`

Value: a search string

Returns: concepts with a [display\_name](../../about-the-data/concept.md#display\_name) containing the given string; see [the search filter](search-entity-lists.md#the-search-filter) for details.

* Get concepts with display names containing "electrodynamics":\
  [`https://api.openalex.org/concepts?filter=display_name.search:electrodynamics`](https://api.openalex.org/concepts?filter=display\_name.search:electrodynamics)

{% hint style="info" %}
In most cases, you should use the [search parameter ](search-entity-lists.md#the-search-parameter)instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_wikidata`

Value: a Boolean (`true` or `false`)

Returns: concepts that have or lack a [Wikidata ID](../../about-the-data/concept.md#wikidata), depending on the given value. For now, all concepts in OpenAlex _do_ have Wikidata IDs.

* Get concepts without Wikidata IDs:\
  [`https://api.openalex.org/concepts?filter=has_wikidata:false`](https://api.openalex.org/concepts?filter=has\_wikidata:false)
