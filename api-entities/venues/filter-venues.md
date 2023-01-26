# Filter venues

You can filter venues with the `filter` parameter:

* Get venues that have an ORCID\
  [https://api.openalex.org/authors?filter=has\_orcid:true](https://api.openalex.org/authors?filter=has\_orcid:true)

{% hint style="info" %}
It's best to [read about filters](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md) before trying these out. It will show you how to combine filters and build an AND, OR, or negation query
{% endhint %}

### `/venues` attribute filters

You can filter using these attributes of the `Venue` entity object (click each one to view their documentation on the [`Venue`](venue-object.md) object page):

* ``[`cited_by_count`](venue-object.md#cited\_by\_count)``
* ``[`country_code`](venue-object.md#country\_code)``
* ``[`ids.openalex`](venue-object.md#ids) (alias: `openalex`)
* ``[`is_in_doaj`](venue-object.md#is\_in\_doaj)``
* ``[`is_oa`](venue-object.md#is\_oa)``
* ``[`issn`](venue-object.md#issn)``
* ``[`publisher`](venue-object.md#publisher) (requires exact match)
* ``[`type`](venue-object.md#type)``
* ``[`works_count`](venue-object.md#works\_count)``
* ``[`x_concepts.id`](venue-object.md#x\_concepts) (alias: `concepts.id` or `concept.id`)

### `/venues` convenience filters

These filters aren't attributes of the [`Venue`](venue-object.md) object, but they're included to address some common use cases:

#### `continent`

Value: a String with a valid [continent filter](../geo/continents.md#filter-by-continent)

Returns: venues that are associated with the chosen continent.

* Get venues that are associated with Asia\
  [https://api.openalex.org/venues?filter=continent:asia](https://api.openalex.org/venues?filter=continent:asia)

#### `display_name.search`

Value: a search string

Returns: venues with a [`display_name`](venue-object.md#display\_name) containing the given string; see the [search page](search-venues.md) for details.

* Get venues with names containing "Neurology":\
  [`https://api.openalex.org/venues?filter=display_name.search:Neurology`](https://api.openalex.org/venues?filter=display\_name.search:Neurology)

{% hint style="info" %}
In most cases, you should use the [`search`](search-venues.md#venues-full-search) parameter instead of this filter because it uses a better search algorithm.
{% endhint %}

#### `has_issn`

Value: a Boolean (`true` or `false`)

Returns: venues that have or lack an [ISSN](broken-reference), depending on the given value.

* Get venues without ISSNs:\
  [`https://api.openalex.org/venues?filter=has_issn:false`](https://api.openalex.org/venues?filter=has\_issn:false)

#### `is_global_south`

Value: a Boolean (`true` or `false`)

Returns: venues that are associated with the [Global South](../geo/regions.md#global-south).

* Get venues that are located in the Global South\
  [https://api.openalex.org/venues?filter=is\_global\_south:true](https://api.openalex.org/venues?filter=is\_global\_south:true)
