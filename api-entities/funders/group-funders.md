# Group funders

You can group funders with the `group_by` parameter:

* Get counts of funders by [`country_code`](funder-object.md#country\_code):\
  [`https://api.openalex.org/funders?group_by=country_code`](https://api.openalex.org/funders?group\_by=country\_code)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/funders` group\_by attributes

* [`cited_by_count`](funder-object.md#cited\_by\_count)
* [`continent`](filter-funders.md#continent)
* [`country_code`](funder-object.md#country\_code)
* [`grants_count`](funder-object.md#grants\_count)
* [`is_global_south`](filter-funders.md#is\_global\_south)
* [`summary_stats.2yr_mean_citedness`](funder-object.md#summary\_stats)
* [`summary_stats.h_index`](funder-object.md#summary\_stats)
* [`summary_stats.i10_index`](funder-object.md#summary\_stats)
* [`works_count`](funder-object.md#works\_count)
