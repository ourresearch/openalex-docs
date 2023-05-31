# Search concepts

The best way to search for concepts is to use the `search` query parameter, which searches the [`display_name`](concept-object.md#display_name) and [`description`](concept-object.md#description) fields. Example:

*   Search concepts' `display_name` and `description` for "artificial intelligence":\
    [https://api.openalex.org/concepts?search=artificial intelligence](https://api.openalex.org/concepts?search=artificial%20intelligence)

{% hint style="info" %}
You can read more about search [here](../../how-to-use-the-api/get-lists-of-entities/search-entities.md). It will show you how relevance score is calculated and how words are stemmed to improve search results.
{% endhint %}

## Search a specific field

You can also use search as a [filter](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md), allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

*   Get concepts with "medical" in the `display_name`:\
    <https://api.openalex.org/concepts?filter=display_name.search:medical>

The following field can be searched as a filter within concepts:

| Search filter                                                    | Field that is searched                            |
| ---------------------------------------------------------------- | ------------------------------------------------- |
| [`display_name.search`](filter-concepts.md#display_name.search) | [`display_name`](concept-object.md#display_name) |

You can also use the filter `default.search`, which works the same as using the [`search` parameter](#search-concepts).

## Autocomplete concepts

You can autocomplete concepts to create a very fast type-ahead style search function:

*   Autocomplete concepts with "comp" in the `display_name`:\
    <https://api.openalex.org/autocomplete/concepts?q=comp>

This returns a list of concepts with the description set as the hint:

<pre class="language-json"><code class="lang-json">{ 
  "results": [
    {
        "id": "https://openalex.org/C41008148",
        "display_name": "Computer science",
        "hint": "theoretical study of the formal foundation enabling the automated processing or computation of information, for example on a computer or over a data transmission network",
        "cited_by_count": 392939277,
        "works_count": 76722605,
        "entity_type": "concept",
        "external_id": "https://www.wikidata.org/wiki/Q21198"
    },
    ...
<strong>  ]
</strong><strong>}
</strong></code></pre>

{% hint style="info" %}
Read more in the [autocomplete page](../../how-to-use-the-api/get-lists-of-entities/autocomplete-entities.md) in the API guide.
{% endhint %}
