# Get groups of entities

{% hint style="info" %}
See the [API overview](./) for info on pagination, authentication, etc.
{% endhint %}

Sometimes instead of just listing entities, you want to _group them_ into facets, and count how many entities are in each group. For example, maybe you want to count the number of `Works` by [open access status](../about-the-data/work.md#oa\_status). To do that, you call the [entity endpoint](./#entity-endpoint), adding the `?group_by` parameter. Example:

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

So from this we can see that the majority of works (66,862,508 of them) are `closed`, with another 10,499,470 `bronze`, and so forth. &#x20;

You can group by most of the same properties that you can [filter](get-lists-of-entities/filter-entity-lists.md) by, and you can combine grouping with filtering.&#x20;

## Group properties

Each group object in the `group_by` list contains three properties:

#### `key`

Value: a string; the [OpenAlex ID](../about-the-data/#the-openalex-id) or raw value of the `group_by` parameter for members of this group. See details on [`key` and `key_display_name`](get-groups-of-entities.md#key-and-key\_display\_name).

#### `key_display_name`

Value: a string; the `display_name` or raw value of the `group_by` parameter for members of this group. See details on [`key` and `key_display_name`](get-groups-of-entities.md#key-and-key\_display\_name).

#### `count`

Value: an integer; the number of entities in the group.&#x20;

## `key` and `key_display_name`

If the value being grouped by is an [OpenAlex `Entity`](../about-the-data/), the [`key`](get-groups-of-entities.md#key) and [`key_display_name`](get-groups-of-entities.md#key\_display\_name) properties will be that `Entity`'s [`id`](../about-the-data/#the-openalex-id) and `display_name`, respectively.

* Group `Works` by `Institution`:\
  [`https://api.openalex.org/works?group_by=authorships.institutions.id`](https://api.openalex.org/works?group\_by=authorships.institutions.id)
* For one group, `key` is "[https://openalex.org/I136199984](https://openalex.org/I136199984)" and `key_display_name` is "Harvard University".

Otherwise, `key` is the same as `key_display_name`; both are the raw value of the `group_by` parameter for this group.

* Group `Concepts` by [`level`](../about-the-data/concept.md#level):\
  [`https://api.openalex.org/concepts?group_by=level`](https://api.openalex.org/concepts?group\_by=level)
* For one group, both `key` and `key_display_name` are "3".

## Groupable attributes

Each Entity type has a different set of attributes you can group by. These are mostly the same as the [filterable](get-lists-of-entities/#filter) attributes - excluding two main types of filters:

* Dates like _to\_publication\_date_ that only make sense for filtering because there isn't a single value that belongs to each entity.
* Wide-ranging numeric attributes like _cited\_by\_count_ with high cardinality. Grouping on these values produces too many groups to be useful.

### `/works` group\_by attributes

* ``[`alternate_host_venues.id`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.license`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`authors_count`](get-lists-of-entities/filter-entity-lists.md#authors\_count)``
* ``[`authorships.author.id`](../about-the-data/work.md#authorships) (alias `author.id`)
* ``[`authorships.author.orcid`](../about-the-data/work.md#authorships) (alias `author.orcid`)
* ``[`authorships.institutions.country_code`](../about-the-data/work.md#authorships) (alias `institutions.country_code`)
* ``[`authorships.institutions.continent`](global-regions.md#group-by-continent) (alias `institutions.continent`)
* ``[`authorships.institutions.is_global_south`](global-regions.md#group-by-global-south)``
* ``[`authorships.institutions.id`](../about-the-data/work.md#authorships) (alias `institutions.id`)
* ``[`authorships.institutions.ror`](../about-the-data/work.md#authorships) (alias `institutions.ror`)
* ``[`authorships.institutions.type`](../about-the-data/work.md#authorships) (alias `institutions.type`)
* ``[`cited_by_count`](../about-the-data/work.md#cited\_by\_count)``
* ``[`cites`](get-lists-of-entities/#additional-filters)``
* ``[`concepts_count`](get-lists-of-entities/filter-entity-lists.md#concepts\_count)``
* ``[`concepts.id`](../about-the-data/work.md#concepts)``
* ``[`concepts.wikidata`](../about-the-data/work.md#concepts)``
* ``[`has_abstract`](../about-the-data/work.md#abstract\_inverted\_index)``
* ``[`has_doi`](get-lists-of-entities/#additional-filters)``
* ``[`has_orcid`](get-lists-of-entities/filter-entity-lists.md#has\_orcid)``
* ``[`has_pmid`](../about-the-data/work.md#ids)``
* ``[`has_pmcid`](../about-the-data/work.md#ids)``
* ``[`has_ngrams`](get-n-grams.md)``
* ``[`has_references`](get-lists-of-entities/filter-entity-lists.md#has\_references)``
* ``[`host_venue.id`](../about-the-data/work.md#host\_venue) (alias `journal.id`)
* ``[`host_venue.issn`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.license`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.publisher`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.version`](../about-the-data/work.md#version)``
* ``[`open_access.is_oa`](../about-the-data/work.md#open\_access) (alias `is_oa`)
* ``[`open_access.oa_status`](../about-the-data/work.md#open\_access) (alias `oa_status`)
* ``[`is_paratext`](../about-the-data/work.md#is\_paratext)``
* ``[`is_retracted`](../about-the-data/work.md#is\_retracted)``
* ``[`publication_year`](../about-the-data/work.md#publication\_year)``
* ``[`version`](get-lists-of-entities/filter-entity-lists.md#version)``

### `/authors` group\_by attributes

* ``[`cited_by_count`](../about-the-data/author.md#cited\_by\_count)``
* ``[`has_orcid`](get-lists-of-entities/#additional-filters-1)``
* ``[`last_known_institution.country_code`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.continent`](global-regions.md#group-by-continent)``
* ``[`last_known_institution.is_global_south`](global-regions.md#group-by-global-south)``
* ``[`last_known_institution.id`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.ror`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.type`](../about-the-data/author.md#last\_known\_institution)
* ``[`works_count`](../about-the-data/author.md#works\_count)``

### `/venues` group\_by attributes

* ``[`cited_by_count`](../about-the-data/venue.md#cited\_by\_count)``
* ``[`has_issn`](get-lists-of-entities/#additional-filters-2)``
* ``[`continent`](global-regions.md#group-by-continent)``
* ``[`country_code`](../about-the-data/venue.md#country\_code)``
* ``[`is_global_south`](global-regions.md#group-by-global-south)``
* ``[`is_in_doaj`](../about-the-data/venue.md#is\_in\_doaj)``
* ``[`is_oa`](../about-the-data/venue.md#is\_oa)``
* ``[`issn`](../about-the-data/venue.md#issn)``
* ``[`publisher`](../about-the-data/venue.md#publisher)``
* ``[`type`](../about-the-data/venue.md#type)``
* ``[`works_count`](../about-the-data/venue.md#works\_count)``

### `/institutions` group\_by attributes

* ``[`cited_by_count`](../about-the-data/institution.md#cited\_by\_count)``
* [`continent`](global-regions.md#group-by-continent)``
* ``[`country_code`](../about-the-data/institution.md#type)``
* ``[`is_global_south`](global-regions.md#group-by-global-south)``
* [`has_ror`](get-lists-of-entities/#additional-filters-3)``
* [`type`](../about-the-data/institution.md#type)``
* ``[`works_count`](../about-the-data/institution.md#works\_count)``

### `/concepts` group\_by __ attributes

* ``[`ancestors.id`](../about-the-data/concept.md#ancestors)``
* ``[`cited_by_count`](../about-the-data/concept.md#cited\_by\_count)``
* ``[`has_wikidata`](../about-the-data/concept.md#wikidata)``
* ``[`level`](../about-the-data/concept.md#level)``
* ``[`works_count`](../about-the-data/concept.md#works\_count)``

## Sorting groups

You can sort grouped by results using `count` or `key`. The default is `count:desc`.

* Sort group\_by results by key, ascending\
  [`https://api.openalex.org/works?group_by=oa_status&sort=key:asc`](https://api.openalex.org/works?group\_by=oa\_status\&sort=key:asc)

## Pagination

You cannot page through grouped results using `page`.  However, you can use `per-page` to change the number of results returned. The default (and maximum) is 200 results. Changing `per-page` to a lower number will likely be faster.

## Combining grouping with filtering

The `group_by` and `filter` parameters can be used at the same time. If you use both parameters, only the `Entities` matched by `filter` will be grouped and counted.

*   Group [`Works`](../about-the-data/work.md) by [`is_oa`](../about-the-data/work.md#is\_oa):

    ``[`https://api.openalex.org/works?group_by=is_oa`](https://api.openalex.org/works?group\_by=is\_oa)&#x20;

This gives you the overall count of open and closed Works in OpenAlex. About 68% are OA at the moment.

Combining this with the filter _type:journal-article_ gives you the same count, but for journal articles only.

* Group [`Works`](../about-the-data/work.md) with [`type`](../about-the-data/work.md#type) = "journal-article" by [`is_oa`](../about-the-data/work.md#is\_oa):\
  [`https://api.openalex.org/works?group_by=is_oa&filter=type:journal-article`](https://api.openalex.org/works?group\_by=is\_oa\&filter=type:journal-article)

Journal articles are about 51% OA.

You can filter using all the available [logical expressions](get-lists-of-entities/filter-entity-lists.md#logical-expressions), just as if you weren't grouping.

* Group journal articles with at least one author affiliated with the [University of Florida](https://ror.org/02y3ad647) by `is_oa`:\
  [`https://api.openalex.org/works?filter=institutions.ror:https://ror.org/02y3ad647,type:journal-article&group_by=is_oa`](https://api.openalex.org/works?filter=institutions.ror:https://ror.org/02y3ad647,type:journal-article\&group\_by=is\_oa)

## Download as CSV or Excel

You can export any group-by results to a CSV or Excel file by adding the `format` parameter with values `csv` or `xlsx`.

* Download a CSV file with a count of institutions by country code\
  [https://api.openalex.org/institutions?group-by=country\_code\&format=csv](https://api.openalex.org/institutions?group-by=country\_code\&format=csv)
* Download an Excel file containing works records count by publication year\
  [https://api.openalex.org/works?group-by=publication\_year\&format=xlsx](https://api.openalex.org/works?group-by=publication\_year\&format=xlsx)

When exporting you will always receive up to 200 results.
