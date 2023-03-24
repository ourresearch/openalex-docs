# Group institutions

You can group institutions with the `group_by` parameter:

* Get counts of institutions by country code:\
  [https://api.openalex.org/institutions?group\_by=country\_code](https://api.openalex.org/institutions?group\_by=country\_code)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/institutions` group\_by attributes

* [`cited_by_count`](institution-object.md#cited\_by\_count)
* [`continent`](filter-institutions.md#continent)
* [`country_code`](institution-object.md#country\_code)
* [`is_global_south`](filter-institutions.md#is\_global\_south)
* [`has_ror`](filter-institutions.md#has\_ror)
* [`type`](institution-object.md#type)
* [`works_count`](institution-object.md#works\_count)
