# Search entities

## The `search` parameter

The `search` query parameter finds results that match a given text search. Example:

* Get works with search term "dna" in the title, abstract, or fulltext:\
  [https://api.openalex.org/works?search=dna](https://api.openalex.org/works?search=dna)

When you [search `works`](../../api-entities/works/search-works.md), the API looks for matches in titles, abstracts, and fulltext. When you [search `concepts`](../../api-entities/concepts/search-concepts.md), we look looks in each concept's `display_name` and `description` fields. When you [search `venues`](../../api-entities/sources/search-venues.md), we look at the `display_name`_,_ `alternate_titles`, and `abbreviated_title` fields. Searching  [`authors`](../../api-entities/authors/search-authors.md) or [`institutions`](../../api-entities/institutions/search-institutions.md) will looks for matches within each entities' `display_name` field.

For most text search we remove [stop words](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-stop-tokenfilter.html) and use [stemming](https://en.wikipedia.org/wiki/Stemming) to improve results. So words like "the" and "an" are transparently removed, and a search for "possums" will also return records using the word "possum." With the except of raw affiliation strings, we do not search within words but rather try to match whole words. So a search with "lun" will not match the word "lunar".

## Relevance score

When you use search, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`. The `relevance_score` is based on text similarity to your search term. It also includes a weighting term for citation counts: more highly-cited entities score higher, all else being equal.

If you search for a multiple-word phrase, the algorithm will treat each word separately, and rank results higher when the words appear close together. If you want to return only results where the exact phrase is used, just enclose your phrase within quotes. Example:

* Get works with the exact phrase "fierce creatures" in the title or abstract (returns just a few results):\
  [https://api.openalex.org/works?search=%22fierce%20creatures%22](https://api.openalex.org/works?search=%22fierce%20creatures%22)
* Get works with the words "fierce" and "creatures" in the title or abstract, with works that have the two words close together ranked higher by `relevance_score` (returns way more results):\
  [https://api.openalex.org/works?search=fierce%20creatures](https://api.openalex.org/works?search=fierce%20creatures)

## The search filter

You can also use search as a [filter](broken-reference), allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

* Get authors who have "Einstein" as part of their name:\
  [https://api.openalex.org/authors?filter=display\_name.search:einstein](https://api.openalex.org/authors?filter=display\_name.search:einstein)
* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

You can read more about which filters support the `.search` suffix on the [Filter entity lists](broken-reference) page.

{% hint style="info" %}
You might be tempted to use the search filter to power an autocomplete or typeahead. Instead, we recommend you use the [autocomplete endpoint](autocomplete-entities.md), which is much faster.\
\
👎 [https://api.openalex.org/institutions?filter=display\_name.search:florida](https://api.openalex.org/institutions?filter=display\_name.search:florida) &#x20;

👍 [https://api.openalex.org/autocomplete/institutions?q=Florida](https://api.openalex.org/autocomplete/institutions?q=Florida)
{% endhint %}
