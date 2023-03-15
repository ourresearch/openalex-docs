---
description: N-grams are groups of sequential words that occur in the text of a Work.
---

# Get N-grams

N-grams list the words and phrases that occur in the full text of a [`Work`](work-object/). We obtain them from Internet Archive's publicly (and generously :clap:) available [General Index](https://archive.org/details/GeneralIndex) and use them to enable fulltext searches on the Works that have them, through both the [`fulltext.search`](filter-works.md#fulltext.search) _filter_, and as an element of the more holistic [`search`](search-works.md#works-full-search) _parameter_.

Note that while n-grams are derived from the fulltext of a Work, the presence of n-grams for a given Work doesn't imply that the fulltext is available to you, the reader. It only means the fulltext was available to Internet Archive for indexing. [`Work.open_access`](work-object/#open\_access) is the place to go for information on public fulltext availability.

## API Endpoint

In addition to enabling fulltext search capabilities, a Work's n-grams are viewable directly through an endpoint that accepts either an [OpenAlex ID](../../how-to-use-the-api/get-single-entities/#the-openalex-id) or a DOI.

Unlike other API endpoints, n-grams are cached via CDN, which means this one is super fast, and you can call it as fast as you want - [rate limits](../../how-to-use-the-api/rate-limits-and-authentication.md) don't apply.

* Get n-grams for [W2023271753](https://openalex.org/W2023271753):\
  [`https://api.openalex.org/works/W2023271753/ngrams`](https://api.openalex.org/works/W2023271753/ngrams)\
  [`https://api.openalex.org/works/10.1103/physrevb.37.785/ngrams`](https://api.openalex.org/works/10.1103/physrevb.37.785/ngrams)

The response is a list of [Ngram objects](get-n-grams.md#the-ngram-object), sorted from 5-grams down to unigrams:

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

The ID-based link is provided in [`Work.ngrams_url`](work-object/#ngrams\_url) if n-grams are available. Works with n-grams can be found using the [`Work.has_ngrams`](filter-works.md#has\_ngrams) filter, which can be [combined with other filters](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md) using logical expressions.

## Fulltext Coverage

About 57 million works have n-grams coverage through [Internet Archive](https://archive.org/details/GeneralIndex). OurResearch is the first organization to host this data in a highly usable way, and we are proud to integrate it into OpenAlex!

Curious about n-grams used in search? [Browse them all](work-object/#ngrams\_url) via the API. Highly-cited works and less recent works are more likely to have n-grams, as shown by the coverage charts below:

<figure><img src="../../.gitbook/assets/OpenAlex works w_ cited count _ 50 and fulltext (percentage).svg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/OpenAlex total works w_ fulltext (percentage).svg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/OpenAlex total works w_ fulltext (count).svg" alt=""><figcaption></figcaption></figure>
