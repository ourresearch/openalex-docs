# Group institutions

You can group institutions with the `group_by` parameter:

*   Get counts of institutions by country code:\
    <https://api.openalex.org/institutions?group_by=country_code>

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/institutions` group\_by attributes

*   [`cited_by_count`](institution-object.md#cited_by_count)
*   [`continent`](filter-institutions.md#continent)
*   [`country_code`](institution-object.md#country_code)
*   [`is_global_south`](filter-institutions.md#is_global_south)
*   [`has_ror`](filter-institutions.md#has_ror)
*   [`repositories.host_organization`](institution-object.md#repositories)
*   [`summary_stats.2yr_mean_citedness`](institution-object.md#summary_stats)
*   [`summary_stats.h_index`](institution-object.md#summary_stats)
*   [`summary_stats.i10_index`](institution-object.md#summary_stats)
*   [`type`](institution-object.md#type)
*   [`works_count`](institution-object.md#works_count)
