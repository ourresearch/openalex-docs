---
description: Query the OpenAlex dataset using the magic of The Internet
---

# API

The API is the primary way to get OpenAlex data. It's free, requires no authentication, and has no rate limits; it's also much  easier than [downloading and using the snapshot](../download-snapshot/). So for most use cases, this is what you're looking for.&#x20;

Using the API you can [get a single entity](get-single-entities.md), [filter and search lists of entities](get-lists-of-entities/), or [group and count entities](get-groups-of-entities.md).  Examples:

* Get the venue (journal) with the ISSN `2167-8359`:\
  [`https://api.openalex.org/venues/issn:2167-8359`](https://api.openalex.org/venues/issn:2167-8359)
* Get works published in 2020:\
  [`https://api.openalex.org/works?filter=publication_year:2020`](https://api.openalex.org/works?filter=publication\_year:2020)``
* Get counts of works that are Open Access, by country: \
  [`https://api.openalex.org/works?filter=is_oa:true&group_by=institutions.country_code`](https://api.openalex.org/works?filter=is\_oa:true\&group\_by=institutions.country\_code)

## Authentication

The OpenAlex API doesn't require authentication. However, it is helpful for us to know who's behind each API call, for two reasons:

* It allows us to get in touch with the user if something's gone wrong--for instance, their script has run amok and we've needed to start blocking or throttling their usage.
* It lets us report back to our funders, which helps us keep the lights on.

Like Crossref (whose approach we are shamelessly stealing), we prefer carrots to sticks for this. So, depending on your preferences, you'll be in one of two API pools:

### The polite pool

The polite pool has much faster and more consistent response times. It's a good place to be.&#x20;

To get into the polite pool, you just have to give us an email where we can contact you. You can give us this email in one of two ways:

* Add the `mailto=you@example.com` parameter in your API request, like this: [https://api.openalex.org/works?mailto=you@example.com](https://api.openalex.org/works?mailto=you@example.com)
* Add `mailto:you@example.com` somewhere in your User-Agent request header.

### The common pool

The common pool has slower and less consistent response times. It's a less good place to be. We encourage everyone to get in the polite pool :innocent::thumbsup:

## Rate limits

The API doesn't have rate limits. However, if you need more than 100,000 calls per day, please drop us a line at support@openalex.org to let us know you'll be hitting the API extra hard.

## Paging

### Basic paging

Use the `page` query parameter to control which page of results you want (eg `page=1`, `page=2`, etc). By default there are 25 results per page; you can use the `per-page` parameter to change that to any number between 1 and 200.

* Get the 2nd page of a list:\
  [`https://api.openalex.org/works?page=2`](https://api.openalex.org/works?page=2)
* Get 200 results on the second page:\
  [`https://api.openalex.org/works?page=2&per-page=200`](https://api.openalex.org/works?page=2\&per-page=200)

Basic paging only works for to read the first 10,000 results of any list. If you want to see more than 10,000 results, you'll need to use [cursor paging](./#cursor-paging).

### Cursor paging

Cursor paging is a bit more complicated than [basic paging](./#basic-paging), but it allows you to access as many records as you like.&#x20;

To use cursor paging, you request a cursor by adding the `cursor=*` parameter-value pair to your query.

* Get a cursor in order to start cursor pagination:\
  [`https://api.openalex.org/works?filter=publication_year:2020&per-page=100&cursor=*`](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=\*)

The response to your query will include a `next_cursor` value in the response's `meta` object. Here's what it looks like:&#x20;

```json
{
  "meta": {
    "count": 8695857,
    "db_response_time_ms": 28,
    "page": null,
    "per_page": 100,
    "next_cursor": "IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI="
  },
  "results" : [
    // the first page of results
  ]
}
```

To retrieve the next page of results, copy the `meta.next_cursor` value into the cursor field of your next request.

* Get the next page of results using a cursor value: \
  [`https://api.openalex.org/works?filter=publication_year:2020&per-page=100&cursor=IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI=`](https://api.openalex.org/works?filter=publication\_year:2020\&per-page=100\&cursor=IlsxNjA5MzcyODAwMDAwLCAnaHR0cHM6Ly9vcGVuYWxleC5vcmcvVzI0ODg0OTk3NjQnXSI=)``

This second page of results will have a new value for `meta.next_cursor`. You'll use this new value the same way you did the first, and it'll give you the second page of results. To get _all_ the results, keep repeating this process until `meta.next_cursor` is null and the `results` set is empty.

{% hint style="danger" %}
**Don't use cursor paging to download the whole dataset.**

* It's bad for you because it will take many days to page through a long list like /works or /authors.
* It's bad for us (and other users!) because it puts a massive load on our servers.

Instead, download everything at once, using the [data snapshot](../download-snapshot/). It's free, easy, fast, and you get all the results in same format you'd get from the API.
{% endhint %}

## Usage tips

### Calling the API in your browser

Because the API is all GET requests without fancy authentication, you can view any request in your browser. This is a very useful and pleasant way to explore the API and debug scripts; we use it all the time.&#x20;

However, this is _much_ nicer if you install an extension to pretty-print the JSON; [JSONVue (Chrome)](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) and [JSONView (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/jsonview) are popular, free choices. Here's what an API response looks like with one of these extensions enabled:

![A lot prettier than cURL](https://i.imgur.com/E7mNLph.png)

## Client Libraries&#x20;

There's no officially-supported client library for the API, for now. However, here's a short list of third-party libraries (and if you know of others, give us a shout):

* [openalexR](https://github.com/massimoaria/openalexR) (R)
* [OpenAlexAPI](https://pypi.org/project/openalexapi/) (Python)
* [diophila](https://pypi.org/project/diophila/) (Python)
