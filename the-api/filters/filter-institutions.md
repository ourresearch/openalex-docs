# Filter institutions

You can filter institutions with the `filter` parameter:

* Get institutions that are located in Canada\
  [https://api.openalex.org/institutions?filter=country\_code:ca](https://api.openalex.org/institutions?filter=country\_code:ca)

{% hint style="info" %}
It's best to [read about filters](../get-lists-of-entities/filter-entity-lists.md) before trying these out. It will show you how to combine filters and build an AND, OR, or negation query
{% endhint %}

### `/institutions` attribute filters

You can filter using these attributes of the `Institution` entity object (click each one to view their documentation on the [`Institution`](../../the-data/institutions/institution-object.md) object page):

* [`cited_by_count`](../../the-data/institutions/institution-object.md#cited\_by\_count)
* [`country_code`](../../the-data/institutions/institution-object.md#country\_code)
* [`openalex`](../../the-data/institutions/institution-object.md#id): the OpenAlex ID of the Institution
* [`repositories.host_organization`](../../the-data/institutions/institution-object.md#repositories): OpenAlex ID for an [`Institution`](../../the-data/institutions/)
* [`repositories.host_organization_lineage`](../../the-data/institutions/institution-object.md#repositories): OpenAlex ID for an [`Institution`](../../the-data/institutions/)
* [`repositories.id`](../../the-data/institutions/institution-object.md#repositories): the OpenAlex ID of a repository (a [`Source`](../../the-data/sources/))
* [`ror`](../../the-data/institutions/institution-object.md#ror): the ROR ID of the Institution
* [`summary_stats.2yr_mean_citedness`](../../the-data/institutions/institution-object.md#summary\_stats) (accepts float, null, !null, can use range queries such as < >)
* [`summary_stats.h_index`](../../the-data/institutions/institution-object.md#summary\_stats) (accepts integer, null, !null, can use range queries)
* [`summary_stats.i10_index`](../../the-data/institutions/institution-object.md#summary\_stats) (accepts integer, null, !null, can use range queries)
* [`type`](../../the-data/institutions/institution-object.md#type)
* [`works_count`](../../the-data/institutions/institution-object.md#works\_count)
* [`x_concepts.id`](../../the-data/institutions/institution-object.md#x\_concepts) (alias: `concepts.id` or `concept.id`)

### `/institutions` convenience filters

These filters aren't attributes of the [`Institution`](../../the-data/institutions/institution-object.md) object, but they're included to address some common use cases:

#### `continent`

Value: a String with a valid [continent filter](../../the-data/geo/continents.md#filter-by-continent)

Returns: institutions that are located in the chosen continent.

* Get institutions that are located in South America\
  [https://api.openalex.org/institutions?filter=continent:south\_america](https://api.openalex.org/institutions?filter=continent:south\_america)

#### `default.search`

Value: a search string

This works the same as using the [`search` parameter](../../the-data/institutions/search-institutions.md#search-institutions) for Institutions.

#### `display_name.search`

Value: a search string

Returns: institutions with a [`display_name`](../../the-data/institutions/institution-object.md#display\_name) containing the given string; see the [search page](../../the-data/institutions/search-institutions.md#search-a-specific-field) for details.

* Get institutions with names containing "technology":\
  [`https://api.openalex.org/institutions?filter=display_name.search:technology`](https://api.openalex.org/institutions?filter=display\_name.search:technology)

{% hint style="info" %}
In most cases, you should use the [`search` parameter](../../the-data/institutions/search-institutions.md) instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_ror`

Value: a Boolean (`true` or `false`)

Returns: institutions that have or lack a [ROR ID](../../the-data/institutions/institution-object.md#ror), depending on the given value.

* Get institutions without ROR IDs:\
  [`https://api.openalex.org/institutions?filter=has_ror:false`](https://api.openalex.org/institutions?filter=has\_ror:false)

#### `is_global_south`

Value: a Boolean (`true` or `false`)

Returns: institutions that are located in the [Global South](../../the-data/geo/regions.md#global-south).

* Get institutions that are located in the Global South\
  [https://api.openalex.org/institutions?filter=is\_global\_south:true](https://api.openalex.org/institutions?filter=is\_global\_south:true)
