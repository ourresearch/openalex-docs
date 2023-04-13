# Filter sources

You can filter sources with the `filter` parameter:

* Get sources that have an ISSN\
  [https://api.openalex.org/sources?filter=has\_issn:true](https://api.openalex.org/sources?filter=has\_issn:true)

{% hint style="info" %}
It's best to [read about filters](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md) before trying these out. It will show you how to combine filters and build an AND, OR, or negation query
{% endhint %}

### `/sources` attribute filters

You can filter using these attributes of the `Source` entity object (click each one to view their documentation on the [`Source`](venue-object.md) object page):

* [`apc_prices.currency`](venue-object.md#apc\_prices)
* [`apc_prices.price`](venue-object.md#apc\_prices)
* [`apc_usd`](venue-object.md#apc\_usd)
* [`cited_by_count`](venue-object.md#cited\_by\_count)
* [`country_code`](venue-object.md#country\_code)
* [`host_organization`](venue-object.md#host\_organization) (alias: `host_organization.id`)
* [`ids.openalex`](venue-object.md#ids) (alias: `openalex`)
* [`is_in_doaj`](venue-object.md#is\_in\_doaj)
* [`is_oa`](venue-object.md#is\_oa)
* [`issn`](venue-object.md#issn)
* [`publisher`](venue-object.md#publisher) (requires exact match)
* [`summary_stats.2yr_mean_citedness`](venue-object.md#summary_stats) (accepts float, null, !null, can use range queries such as < >)
* [`summary_stats.h_index`](venue-object.md#summary_stats) (accepts integer, null, !null, can use range queries)
* [`summary_stats.i10_index`](venue-object.md#summary_stats) (accepts integer, null, !null, can use range queries)
* [`type`](venue-object.md#type)
* [`works_count`](venue-object.md#works\_count)
* [`x_concepts.id`](venue-object.md#x\_concepts) (alias: `concepts.id` or `concept.id`)

{% hint style="info" %}
Want to filter by `host_organization.display_name`? This is a two-step process:

1. Find the host organization's ID by searching by `display_name` in Publishers or Institutions, depending on which type you are looking for.
2. Filter works by `host_organization.id`.

To learn more about why we do it this way, [see here.](../works/search-works.md#why-cant-i-search-by-name-of-related-entity-author-name-institution-name-etc.)
{% endhint %}

### `/sources` convenience filters

These filters aren't attributes of the [`Source`](venue-object.md) object, but they're included to address some common use cases:

#### `continent`

Value: a String with a valid [continent filter](../geo/continents.md#filter-by-continent)

Returns: sources that are associated with the chosen continent.

* Get sources that are associated with Asia\
  [https://api.openalex.org/sources?filter=continent:asia](https://api.openalex.org/sources?filter=continent:asia)

#### `display_name.search`

Value: a search string

Returns: sources with a [`display_name`](venue-object.md#display\_name) containing the given string; see the [search page](search-venues.md) for details.

* Get sources with names containing "Neurology":\
  [`https://api.openalex.org/sources?filter=display_name.search:Neurology`](https://api.openalex.org/sources?filter=display\_name.search:Neurology)``

{% hint style="info" %}
In most cases, you should use the [`search`](search-venues.md#venues-full-search) parameter instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_issn`

Value: a Boolean (`true` or `false`)

Returns: sources that have or lack an [ISSN](broken-reference), depending on the given value.

* Get sources without ISSNs:\
  [`https://api.openalex.org/sources?filter=has_issn:false`](https://api.openalex.org/sources?filter=has\_issn:false)``

#### `is_global_south`

Value: a Boolean (`true` or `false`)

Returns: sources that are associated with the [Global South](../geo/regions.md#global-south).

* Get sources that are located in the Global South\
  [https://api.openalex.org/sources?filter=is\_global\_south:true](https://api.openalex.org/sources?filter=is\_global\_south:true)
