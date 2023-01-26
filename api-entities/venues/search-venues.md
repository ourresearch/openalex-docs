# Search venues

The best way to search for venues is to use the `search` query parameter, which searches across [`display_name`](venue-object.md#display\_name), [`alternate_titles`](venue-object.md#alternate\_titles), and [`abbreviated_title`](venue-object.md#abbreviated\_title). Example:

* Search for the abbreviated version of the Journal of the American Chemical Society "`jacs`":\
  [https://api.openalex.org/venues?search=jacs](https://api.openalex.org/venues?search=jacs)

{% hint style="info" %}
You can read more about search [here](../../how-to-use-the-api/get-lists-of-entities/search-entities.md). It will show you how relevance score is calculated and how words are stemmed to improve search results.
{% endhint %}

## Search a specific field

You can also use search as a [filter](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md), allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

* Get venues with "nature" in the title:\
  [https://api.openalex.org/venues?filter=display\_name.search:nature](https://api.openalex.org/venues?filter=display\_name.search:nature)

The following fields can be searched as a filter within venues:

| Search filter                                                      | Field that is searched                              |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ``[`display_name.search`](filter-venues.md#display\_name.search)`` | ``[`display_name`](venue-object.md#display\_name)`` |

## Autocomplete venues

You can autocomplete venues to create a very fast type-ahead style search function:

* Autocomplete venues with "neuro" in the display\_name:\
  [https://api.openalex.org/autocomplete/venues?q=neuro](https://api.openalex.org/autocomplete/venues?q=neuro)

This returns a list of venues with the publisher set as the hint:

<pre class="language-json"><code class="lang-json">{ 
  "results": [
    {
        "id": "https://openalex.org/V5555990",
        "display_name": "The Journal of Neuroscience",
        "hint": "Society for Neuroscience",
        "cited_by_count": 4274712,
        "works_count": 40376,
        "entity_type": "venue",
        "external_id": "0270-6474"
    },
    // more results
<strong>  ]
</strong><strong>}
</strong></code></pre>

{% hint style="info" %}
Read more in the [autocomplete page](../../how-to-use-the-api/get-lists-of-entities/autocomplete-entities.md) in the API guide.
{% endhint %}
