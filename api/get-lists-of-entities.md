# Get lists of entities

* returns a sorted list of entities, based on filters. Optionally you can collapse the list into groups with counts
* list the endpoints



## Filter

Filters narrow the list down to just entities that meet a particular condition.  You describe that condition in this format: `attribute:value` where `attribute` is some property of the entity, and `value` is the value you want it to be. Filters are case-insensitive. Here's an example of a filter in use:

* Get works whose [type](https://docs.openalex.org/entity-objects/work#type) is `book`:\
  [`https://api.openalex.org/works?filter=type:book`](https://api.openalex.org/works?filter=type:book)``



If the attribute you're filtering is a number or an ISO-formatted date string, you can filter using "less than" or "greater than." Example:

* Get venues that host more than 1000 works:\
  [`https://api.openalex.org/venues?filter=works_count:>1000`](https://api.openalex.org/venues?filter=works\_count:%3E1000)``

``

You can stack filters together, and the list will return entities that satisfy all the filters--in other words, it combines multiple filters using "AND." Separate multiple filter with commas. Example:

* Get US-based authors who've been cited more than 100 times:\
  [`https://api.openalex.org/authors?filter=last_known_institution.country_code:US,cited_by_count:>100`](https://api.openalex.org/authors?filter=last\_known\_institution.country\_code:US,cited\_by\_count:%3E0)``

Each endpoint support its own list of filters. Here they are, by endpoint.&#x20;

### `/works` filters

You can filter using these attributes of the `Works` object. You can find more documentation about each attribute on the [Work page](../about-the-data/work.md).

* `display_name.search` (alias: `title.search`)
* `publication_year`
* `publication_date`
* `host_venue.issn`
* `host_venue.publisher`
* `host_venue.id`
* `type`
* `is_paratext`
* `open_access.oa_status` (alias: `oa_status`)
* `open_access.is_oa` (alias: `is_oa`)
* `authorships.author.id` (alias: `author.id`)
* `authorships.institutions.id` (alias `institutions.id`)
* `authorships.institutions.ror` (alias: `institutions.ror`)
* `authorships.institutions.country_code` (alias: `institutions.country_code`)
* `authorships.institutions.type` (alias: `institutions.type`)&#x20;
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

* `display_name.search`&#x20;
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
* `publisher` (requires exact match)&#x20;
* `works_count`
* `cited_by_count`
* `x_concepts.id`
* `is_oa`
* `is_in_doaj`

### `/institutions` filters

You can filter using these attributes of the `Institution` object. You can find more documentation about each attribute on the [Institution page](../about-the-data/institution.md).

* `display_name.search`
* `country_code`
* `type`&#x20;
* `works_count`
* `cited_by_count`
* `x_concepts.id`

### `/concepts` filters

You can filter using these attributes of the `Concept` object. You can find more documentation about each attribute on the [Concept page.](../about-the-data/concept.md)

* `display_name.search`
* `level`&#x20;
* `works_count`
* `cited_by_count`
* `ancestors.id`











``





You can stack these filters together with commas,&#x20;







##

## Search

Search is just another kind of filter, one that all five endpoints support. Unlike the other filters, search doesn't require an exact match. To filter using search, append `.search` to the end of the property you're filtering for.&#x20;

Currently, only the `display_name` property supports fulltext search (also the `Work.title` property, which is just an alias for `Work.display_name`). You can't yet do fulltext search on abstract, or any other field.

&#x20;Examples:

* Get authors who have "Einstein" as part of their name:\
  [https://api.openalex.org/authors?filter=display\_name.search:einstein](https://api.openalex.org/authors?filter=display\_name.search:einstein)
* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

When you use a search filter, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`.

\
&#x20;



## Sort results

sorting stuff



## Endpoints

endpoints stuff
