# Search entity lists

## The `search` parameter

The `search` query parameter finds results that match a given text search. Example:

* Get works with search term "dna" in the title or abstract:\
  [https://api.openalex.org/works?search=dna](https://api.openalex.org/works?search=dna)

When you search `works`, the API looks for matches in titles and abstracts. When you search  `concepts`, we look looks in each concept's `display_name` and `description` fields. Searching  `authors`, `venues`, and `institutions` will looks for matches within each entities' `display_name` field.

When you using search, each returned entity in the results lists gets an extra property called `relevance_score`, and the list is by default sorted in descending order of `relevance_score`. The `relevance_score` is based on text similarity to your search term. It also includes a weighting term for citation counts: more highly-cited entities score higher, all else being equal.

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
