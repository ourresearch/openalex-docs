# Search entity lists

## The `search` parameter

The `search` query parameter finds results that match a given text search. Example:

* Get works with search term "dna" in the title or abstract:\
  [https://api.openalex.org/works?search=dna](https://api.openalex.org/works?search=dna)

When you search `works`, the API looks for matches in titles, abstracts, and fulltext. When you search `concepts`, we look looks in each concept's `display_name` and `description` fields. Searching  `authors`, `venues`, and `institutions` will looks for matches within each entities' `display_name` field.

When you use search, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`. The `relevance_score` is based on text similarity to your search term. It also includes a weighting term for citation counts: more highly-cited entities score higher, all else being equal.

If you search for a multiple-word phrase, the algorithm will treat each word separately, and rank results higher when the words appear close together. If you want to return only results where the exact phrase is used, just enclose your phrase within quotes. Example:

* Get works with the exact phrase "fierce creatures" in the title or abstract (returns just a few results):\
  [https://api.openalex.org/works?search=%22fierce%20creatures%22](https://api.openalex.org/works?search=%22fierce%20creatures%22)
* Get works with the words "fierce" and "creatures" in the title or abstract, with works that have the two words close together ranked higher by `relevance_score` (returns way more results):\
  [https://api.openalex.org/works?search=fierce%20creatures](https://api.openalex.org/works?search=fierce%20creatures)

Search using [stemming](https://en.wikipedia.org/wiki/Stemming), so a search for "possums" will also return records using the word "possum."

## The search filter

You can also use search as a [filter](filter-entity-lists.md), allowing you to fine-tune the fields you're searching over. To do this, you append `.search` to the end of the property you are filtering for:

* Get authors who have "Einstein" as part of their name:\
  [https://api.openalex.org/authors?filter=display\_name.search:einstein](https://api.openalex.org/authors?filter=display\_name.search:einstein)
* Get works with "cubist" in the title:\
  [https://api.openalex.org/works?filter=title.search:cubist](https://api.openalex.org/works?filter=title.search:cubist)

You can read more about which filters support the `.search` suffix on the [Filter entity lists](filter-entity-lists.md) page.

{% hint style="info" %}
You might be tempted to use the search filter to power an autocomplete or typeahead. Instead, we recommend you use the [autocomplete endpoint](../autocomplete-endpoint.md), which is much faster.\
\
👎 [https://api.openalex.org/institutions?filter=display\_name.search:florida](https://api.openalex.org/institutions?filter=display\_name.search:florida) &#x20;

👍 [https://api.openalex.org/autocomplete/institutions?q=Florida](https://api.openalex.org/autocomplete/institutions?q=Florida)
{% endhint %}

## Fulltext coverage

About 57 million works have fulltext. Fulltext is based on words and phrases (called n-grams) that are publicly (and generously :clap:) available through the [General Index](https://archive.org/details/GeneralIndex). OurResearch is the first organization to host this data in a highly usable way, and we are proud to integrate it into OpenAlex!

Curious about n-grams used in search? [Browse them all](../../about-the-data/work.md#ngrams\_url) via the API. Highly-cited works and less recent works are more likely to have fulltext, as shown by the coverage charts below:

<figure><img src="../../.gitbook/assets/OpenAlex works w_ cited count _ 50 and fulltext (percentage).svg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/OpenAlex total works w_ fulltext (percentage).svg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/OpenAlex total works w_ fulltext (count).svg" alt=""><figcaption></figcaption></figure>
