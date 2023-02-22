# Search works

The best way to search for works is to use the `search` query parameter, which searches across [titles](work-object.md#title-1), [abstracts](work-object.md#abstract\_inverted\_index), and [fulltext](work-object.md#the-ngram-object). Example:

* Get works with search term "dna" in the title, abstract, or fulltext:\
  [https://api.openalex.org/works?search=dna](https://api.openalex.org/works?search=dna)

Fulltext search is powered by an index of word sequences called n-grams - see [Get N-grams](get-n-grams.md) for more details.

{% hint style="info" %}
You can read more about search [here](../../how-to-use-the-api/get-lists-of-entities/search-entities.md). It will show you how relevance score is calculated and how words are stemmed to improve search results.
{% endhint %}

## Search a specific field

You can use search as a [filter](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md), allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

The following fields can be searched within works:

| Search filter                                                                        | Field that is searched                                                    |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| ``[`abstract.search`](filter-works.md#abstract.search)``                             | ``[`abstract_inverted_index`](work-object.md#abstract\_inverted\_index)`` |
| ``[`display_name.search`](filter-works.md#display\_name.search-alias-title.search)`` | ``[`display_name`](work-object.md#display\_name)``                        |
| ``[`fulltext.search`](filter-works.md#fulltext.search)``                             | fulltext via [`n-grams`](get-n-grams.md)``                                |
| ``[`title.search`](filter-works.md#display\_name.search-alias-title.search)``        | ``[`display_name`](work-object.md#display\_name)``                        |

## Autocomplete works

You can autocomplete works to create a very fast type-ahead style search function:

* Autocomplete works with "tigers" in the title:\
  [https://api.openalex.org/autocomplete/works?q=tigers](https://api.openalex.org/autocomplete/works?q=tigers)

This returns a list of works titles with the author of each work set as the hint:

<pre class="language-json"><code class="lang-json">{ 
  "results": [
    {
      "id": "https://openalex.org/W2125098916",
      "display_name": "Crouching tigers, hidden prey: Sumatran tiger and prey populations in a tropical forest landscape",
      "hint": "Timothy G. O'Brien, Margaret F. Kinnaird, Hariyo T. Wibisono",
      "cited_by_count": 620,
      "works_count": null,
      "entity_type": "work",
      "external_id": "https://doi.org/10.1017/s1367943003003172"
    },
    ...
<strong>  ]
</strong><strong>}
</strong></code></pre>

{% hint style="info" %}
Read more about [autocomplete](../../how-to-use-the-api/get-lists-of-entities/autocomplete-entities.md).
{% endhint %}