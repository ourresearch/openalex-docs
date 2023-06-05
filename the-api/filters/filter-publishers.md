# Filter publishers

You can filter publishers with the `filter` parameter:

* Get publishers that are hierarchy level 0\
  [https://api.openalex.org/publishers?filter=hierarchy\_level:0](https://api.openalex.org/publishers?filter=hierarchy\_level:0)

{% hint style="info" %}
It's best to [read about filters](../get-lists-of-entities/filter-entity-lists.md) before trying these out. It will show you how to combine filters and build an AND, OR, or negation query
{% endhint %}

### `/publishers` attribute filters

You can filter using these attributes of the `Publisher` entity object (click each one to view their documentation on the [`Publisher`](../../the-data/publishers/publisher-object.md) object page):

* [`cited_by_count`](../../the-data/publishers/publisher-object.md#cited\_by\_count)
* [`country_codes`](../../the-data/publishers/publisher-object.md#country\_codes)
* [`hierarchy_level`](../../the-data/publishers/publisher-object.md#hierarchy\_level)
* [`ids.openalex`](../../the-data/publishers/publisher-object.md#ids) (alias: `openalex`)
* [`ids.ror`](../../the-data/publishers/publisher-object.md#ids) (alias: `ror`)
* [`ids.wikidata`](../../the-data/publishers/publisher-object.md#ids) (alias: `wikidata`)
* [`lineage`](../../the-data/publishers/publisher-object.md#lineage) — Use this with a publisher ID to find that publisher and all of its children
* [`parent_publisher`](../../the-data/publishers/publisher-object.md#parent\_publisher)
* [`summary_stats.2yr_mean_citedness`](../../the-data/publishers/publisher-object.md#summary\_stats) (accepts float, null, !null, can use range queries such as < >)
* [`summary_stats.h_index`](../../the-data/publishers/publisher-object.md#summary\_stats) (accepts integer, null, !null, can use range queries)
* [`summary_stats.i10_index`](../../the-data/publishers/publisher-object.md#summary\_stats) (accepts integer, null, !null, can use range queries)
* [`works_count`](../../the-data/publishers/publisher-object.md#works\_count)

### `/publishers` convenience filters

These filters aren't attributes of the [`Publisher`](../../the-data/publishers/publisher-object.md) object, but they're included to address some common use cases:

#### `continent`

Value: a String with a valid [continent filter](../../the-data/geo/continents.md#filter-by-continent)

Returns: publishers that are located in the chosen continent.

* Get publishers that are located in South America\
  [https://api.openalex.org/publishers?filter=continent:south\_america](https://api.openalex.org/publishers?filter=continent:south\_america)

#### `default.search`

Value: a search string

This works the same as using the [`search` parameter](../../the-data/publishers/search-publishers.md#search-publishers) for Publishers.

#### `display_name.search`

Value: a search string

Returns: publishers with a [`display_name`](../../the-data/publishers/publisher-object.md#display\_name) containing the given string; see the [search page](../../the-data/publishers/search-publishers.md#search-a-specific-field) for details.

* Get publishers with names containing "elsevier":\
  [`https://api.openalex.org/publishers?filter=display_name.search:elsevier`](https://api.openalex.org/publishers?filter=display\_name.search:elsevier)\`\`

{% hint style="info" %}
In most cases, you should use the [`search` parameter](../../the-data/publishers/search-publishers.md) instead of this filter because it uses a better search algorithm.
{% endhint %}
