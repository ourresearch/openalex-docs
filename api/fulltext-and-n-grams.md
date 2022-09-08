---
description: N-grams are groups of sequential words that occur in the text of a Work.
---

# Fulltext and N-grams

N-grams list the words and phrases that occur in the full text of a [`Work`](../about-the-data/work.md#the-work-object). We obtain them from Internet Archive's [General Index](https://archive.org/details/GeneralIndex) and use them to enable fulltext searches on the Works that have them, through both the [`fulltext.search`](get-lists-of-entities/filter-entity-lists.md#fulltext.search) _filter_, and as an element of the more holistic [`search`](get-lists-of-entities/search-entity-lists.md#the-search-parameter) _parameter_. See [Fulltext Coverage](get-lists-of-entities/search-entity-lists.md#fulltext-coverage) for details on the availability of n-gram-based fulltext search.

Note that while n-grams are derived from the fulltext of a Work, the presence of n-grams for a given Work doesn't imply that the fulltext is available to you, the reader. It only means the fulltext was available to Internet Archive for indexing. [`Work.open_access`](../about-the-data/work.md#open\_access) is the place to go for information on public fulltext availability.

In addition to enabling fulltext search capabilities, a Work's n-grams are viewable directly through an endpoint that accepts either an [OpenAlex ID](../about-the-data/#the-openalex-id) or a DOI.

* Get n-grams for https://openalex.org/W2023271753:\
  [`https://api.openalex.org/works/W2023271753/ngrams`](https://api.openalex.org/works/W2023271753/ngrams)\
  [`https://api.openalex.org/works/10.1103/physrevb.37.785/ngrams`](https://api.openalex.org/works/10.1103/physrevb.37.785/ngrams)

The response is a list of [Ngram objects](fulltext-and-n-grams.md#the-ngram-object), sorted from 5-grams down to unigrams:

```
{
  meta: {
    count: 1068,
    doi: "https://doi.org/10.1103/physrevb.37.785",
    openalex_id: "https://openalex.org/W2023271753"
  },
  ngrams: [
    {
      ngram: "energy formula into a functional",
      ngram_tokens: 5,
      ngram_count: 1,
      term_frequency: 0.0005452562704471102
    },
    {
      ngram: "functional of the electron density",
      ngram_tokens: 5,
      ngram_count: 1,
      term_frequency: 0.0005452562704471102
    },
    ...
  ]
}
```

The ID-based link is provided in [`Work.ngrams_url`](../about-the-data/work.md#ngrams\_url) if n-grams are available. Works with n-grams can be found using the [`Work.has_fulltext`](get-lists-of-entities/filter-entity-lists.md#has\_fulltext) filter, which can be [combined with other filters](get-lists-of-entities/filter-entity-lists.md#logical-expressions) using logical expressions.
