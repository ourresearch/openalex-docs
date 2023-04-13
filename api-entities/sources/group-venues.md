# Group sources

You can group sources with the `group_by` parameter:

* Get counts of sources by publisher:\
  [https://api.openalex.org/sources?group\_by=publisher](https://api.openalex.org/sources?group\_by=publisher)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/sources` group\_by attributes

* [`apc_prices.currency`](venue-object.md#apc\_prices)
* [`apc_usd`](venue-object.md#apc\_usd)
* [`cited_by_count`](venue-object.md#cited\_by\_count)
* [`has_issn`](filter-venues.md#has\_issn)
* [`continent`](../geo/continents.md#group-by-continent)
* [`country_code`](venue-object.md#country\_code)
* [`host_organization`](venue-object.md#host\_organization) (alias: `host_organization.id`)
* [`is_global_south`](../geo/regions.md#group-by-global-south)
* [`is_in_doaj`](venue-object.md#is\_in\_doaj)
* [`is_oa`](venue-object.md#is\_oa)
* [`issn`](venue-object.md#issn)
* [`publisher`](venue-object.md#publisher)
* [`summary_stats.2yr_mean_citedness`](venue-object.md#summary_stats)
* [`summary_stats.h_index`](venue-object.md#summary_stats)
* [`summary_stats.i10_index`](venue-object.md#summary_stats)
* [`type`](venue-object.md#type)
* [`works_count`](venue-object.md#works\_count)
