# Group topics

You can group concepts with the `group_by` parameter:

* Get counts of concepts by [`level`](../concepts-1/concept-object.md#level):\
  [https://api.openalex.org/concepts?group\_by=level](https://api.openalex.org/concepts?group\_by=level)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/concepts` group\_by \_\_ attributes

* [`ancestors.id`](../concepts-1/concept-object.md#ancestors)
* [`cited_by_count`](../concepts-1/concept-object.md#cited\_by\_count)
* [`has_wikidata`](../concepts-1/filter-concepts.md#has\_wikidata)
* [`level`](../concepts-1/concept-object.md#level)
* [`summary_stats.2yr_mean_citedness`](../concepts-1/concept-object.md#summary\_stats)
* [`summary_stats.h_index`](../concepts-1/concept-object.md#summary\_stats)
* [`summary_stats.i10_index`](../concepts-1/concept-object.md#summary\_stats)
* [`works_count`](../concepts-1/concept-object.md#works\_count)
