# Get groups of entities

{% hint style="info" %}
See the [API overview](./) for info on rate limiting, authentication, etc.
{% endhint %}

Sometimes instead of just listing entities, you want to _group them_ into facets, and count how many entities are in each group. For example, maybe you want to count the number of `Works` by [open access status](../about-the-data/work.md#oa\_status). To do that, you call the appropriate entity endpoint, adding the `?group_by` parameter. Here's an example:

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

You can group by most of the same properties that you can [filter](get-lists-of-entities.md#filter) by, and you can combine grouping with filtering.&#x20;

Each group contains three properties:

* `key`
  * The value of the `group_by` parameter for this group.
    * If the property being grouped by is an OpenAlex [Entity](../about-the-data/), `key` will be the entity's [OpenAlex ID](../about-the-data/#the-openalex-id). For example, if you [group Works by Institution](https://api.openalex.org/works?group\_by=authorships.institutions.id), one group's `key` might be [https://openalex.org/I136199984](https://openalex.org/I136199984)
    * If grouping by a string, boolean, or numeric value, `key` is just the value, and is the same as `key_display_name`. For example, if you [group Concepts by level](https://api.openalex.org/concepts?group\_by=level), one group might have both the both `key` and `key_display_name` "2".
* `key_display_name`
  * If the group\_by parameter is an Entity, the Entity's display name. Otherwise, the value being grouped by, and the same as `key`.
* `count`
  * The number of entities in the group.&#x20;

### Groupable attributes

Each Entity type has a different set of attributes you can group by. These are mostly the same as the [filterable](get-lists-of-entities.md#filter) attributes - excluding two main types of filters:

* Dates like _to\_publication\_date_ that only make sense for filtering because there isn't a single value that belongs to each entity.
* Wide-ranging numeric attributes like _cited\_by\_count_ with high cardinality. Grouping on these values produces too many groups to be useful.

#### `/works` group\_by attributes

* ``[`alternate_host_venues.id`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.license`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](../about-the-data/work.md#alternate\_host\_venues)``
* ``[`authorships.author.id`](../about-the-data/work.md#authorships) (alias `author.id`)
* ``[`authorships.author.orcid`](../about-the-data/work.md#authorships) (alias `author.orcid`)
* ``[`authorships.institutions.country_code`](../about-the-data/work.md#authorships) (alias `institutions.country_code`)
* ``[`authorships.institutions.id`](../about-the-data/work.md#authorships) (alias `institutions.id`)
* ``[`authorships.institutions.ror`](../about-the-data/work.md#authorships) (alias `institutions.ror`)
* ``[`authorships.institutions.type`](../about-the-data/work.md#authorships) (alias `institutions.type`)
* ``[`cites`](get-lists-of-entities.md#additional-filters)``
* ``[`concepts.id`](../about-the-data/work.md#concepts)``
* ``[`concepts.wikidata`](../about-the-data/work.md#concepts)``
* ``[`has_doi`](get-lists-of-entities.md#additional-filters)``
* ``[`host_venue.id`](../about-the-data/work.md#host\_venue) (alias `journal.id`)
* ``[`host_venue.issn`](../about-the-data/work.md#host\_venue)``
* ``[`host_venue.publisher`](../about-the-data/work.md#host\_venue)``
* ``[`open_access.is_oa`](../about-the-data/work.md#open\_access) (alias `is_oa`)
* ``[`open_access.oa_status`](../about-the-data/work.md#open\_access) (alias `oa_status`)
* ``[`is_paratext`](../about-the-data/work.md#is\_paratext)``
* ``[`is_retracted`](../about-the-data/work.md#is\_retracted)``
* ``[`publication_year`](../about-the-data/work.md#publication\_year)``

#### `/authors` group\_by attributes

* ``[`has_orcid`](get-lists-of-entities.md#additional-filters-1)``
* ``[`last_known_institution.country_code`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.id`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.ror`](../about-the-data/author.md#last\_known\_institution)``
* ``[`last_known_institution.type`](../about-the-data/author.md#last\_known\_institution)

#### `/venues` group\_by attributes

* ``[`has_issn`](get-lists-of-entities.md#additional-filters-2)``
* ``[`is_in_doaj`](../about-the-data/venue.md#is\_in\_doaj)``
* ``[`is_oa`](../about-the-data/venue.md#is\_oa)``
* ``[`issn`](../about-the-data/venue.md#issn)``
* ``[`publisher`](../about-the-data/venue.md#publisher)``

#### `/institutions` group\_by attributes

* [`country_code`](../about-the-data/institution.md#type)``
* [`has_ror`](get-lists-of-entities.md#additional-filters-3)``
* [`type`](../about-the-data/institution.md#type)``

#### `/concepts` group\_by __ attributes

* ``[`ancestors.id`](../about-the-data/concept.md#ancestors)``
* ``[`level`](../about-the-data/concept.md#level)``
* ``[`has_wikidata`](get-lists-of-entities.md#additional-filters-4)``

### Sorting groups

You can sort grouped by results using `count` or `key`. The default is `count:desc`.

* Sort group\_by results by key, ascending\
  [https://api.openalex.org/works?group\_by=oa\_status\&sort=key:asc](https://api.openalex.org/works?group\_by=oa\_status\&sort=key:asc)

### Pagination

You cannot page through grouped results using `page` or `per-page`. You will always receive one page of results and per-page is fixed at 200.

This means 200 is the maximum number of groups that can be returned - [https://api.openalex.org/works?group\_by=host\_venue.publisher](https://api.openalex.org/works?group\_by=host\_venue.publisher) will only provide work counts for the top 200 publishers.
