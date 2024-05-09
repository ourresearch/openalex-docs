# Filter topics

You can filter topics with the `filter` parameter:

* Get topics that are in the subfield "Epidemiology" (id: 2713)\
  [`https://api.openalex.org/topics?filter=subfield.id:2713`](https://api.openalex.org/topics?filter=subfield.id:2713)

{% hint style="info" %}
It's best to [read about filters](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md) before trying these out. It will show you how to combine filters and build an AND, OR, or negation query
{% endhint %}

### `/topics` attribute filters

You can filter using these attributes of the [`Topic`](../topics/topic-object.md) object (click each one to view their documentation on the `Topic` object page):

* [`cited_by_count`](../topics/topic-object.md#cited\_by\_count)
* [`domain.id`](../topics/topic-object.md#domain)
* [`field.id`](../topics/topic-object.md#field)
* [`ids.openalex`](../topics/topic-object.md#ids) (alias: `openalex`)
* [`subfield.id`](../topics/topic-object.md#subfield)
* [`works_count`](../topics/topic-object.md#works\_count)

### `/topics` convenience filters

These filters aren't attributes of the [`Topic`](../topics/topic-object.md) object, but they're included to address some common use cases:

#### `default.search`

Value: a search string

This works the same as using the [`search` parameter](../topics/search-topics.md#search-topics) for Topics.

#### `display_name.search`

Value: a search string

Returns: topics with a [`display_name`](../topics/topic-object.md#display\_name) containing the given string; see the [search page](../topics/search-topics.md#search-a-specific-field) for details.

* Get topics with `display_name` containing "artificial" and "intelligence":\
  [`https://api.openalex.org/topics?filter=display_name.search:artificial+intelligence`](https://api.openalex.org/topics?filter=display\_name.search:artificial+intelligence)

{% hint style="info" %}
In most cases, you should use the [`search` parameter](../topics/search-topics.md#topics-full-search) instead of this filter because it uses a better search algorithm.
{% endhint %}
