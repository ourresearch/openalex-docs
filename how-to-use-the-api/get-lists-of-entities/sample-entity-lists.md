# Sample entity lists

You can use `sample` to get a random list of up to 10,000 results.

* Get 100 random works\
  [https://api.openalex.org/works?sample=100\&per-page=100](https://api.openalex.org/works?sample=100\&per-page=100)

You can add a `seed` value in order to retrieve the same set of random records, in the same order, multiple times.

* Get 20 random sources with a seed value\
  [https://api.openalex.org/sources?sample=20\&seed=123](https://api.openalex.org/sources?sample=20\&seed=123)

{% hint style="info" %}
Depending on your query, random results with a seed value _may_ change over time due to new records coming into OpenAlex.&#x20;
{% endhint %}

## Limitations

* The sample size is limited to 10,000 results.
* You can't use [`search`](search-entities.md) with `sample`. We'll try to fix that later!
* You must provide a `seed` value when [paging](paging.md) beyond the first page of results. Without a seed value, you might get duplicate records in your results.