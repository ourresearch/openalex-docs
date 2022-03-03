---
description: Query the OpenAlex dataset using the magic of The Internet
---

# API

The API is the primary way to get OpenAlex data. It's free, requires no authentication, and has generous rate limits; it's also much cheaper and easier than [downloading and using the snapshot](../download-snapshot/). So for most use cases, this is what you're looking for.&#x20;

The API is read-only, supporting just [GET requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET).&#x20;

## Entity endpoints

These are the main endpoints for the API. There are five entity endpoints, one for each entity type:

* `/works`&#x20;
* `/authors`
* `/venues`
* `/institutions`
* `/concepts`

Each of these can give you either a _single_ entity, or a _list_ of entities. In either case, the entities are returned as [entity objects](../about-the-data/).

### Get single entities

To get a single entity, just feed an ID to the relevant endpoint: `/<endpoint_name>/<id>`. Examples:

* Get the work with the OpenAlex ID `https://openalex.org/W2741809807`:\
  [https://api.openalex.org/works/W2741809807](https://api.openalex.org/works/W2741809807)
* Get the venue (journal) with the ISSN `2167-8359`:\
  [https://api.openalex.org/venues/issn:2167-8359](https://api.openalex.org/venues/issn:2167-8359)
* Get the author with the ORCID `https://orcid.org/0000-0001-6187-6610`:\
  [https://api.openalex.org/authors/https://orcid.org/0000-0001-6187-6610](https://api.openalex.org/authors/https://orcid.org/0000-0001-6187-6610)

To learn more about which IDs are accepted and in which formats, see [Get Single Entities](get-single-entities.md).

### Get lists of entities

To get a list of entities, just query the relevant endpoint directly: `/<endpoint_name>`. You can add parameters to filter, sort, search, and group results. Examples:

* Get all the works in OpenAlex: \
  [`https://api.openalex.org/works`](https://api.openalex.org/works)``
* Get works published in 2020:\
  [`https://api.openalex.org/works?filter=publication_year:2020`](https://api.openalex.org/works?filter=publication\_year:2020)``
* Get works with "coffee" in their titles:\
  [`https://api.openalex.org/works?filter=title.search:coffee`](https://api.openalex.org/works?filter=title.search:coffee)
* Get _counts_ of works, by institution:\
  [`https://api.openalex.org/works?group_by=institutions.id`](https://api.openalex.org/works?group\_by=institutions.id)``

These list queries give you a very powerful and fast interface into the OpenAlex dataset. For lots more detail on these, see [Get lists of entities](get-lists-of-entities.md) and [Get groups of entities](get-groups-of-entities.md).&#x20;

## Authentication

The OpenAlex API doesn't require authentication. However, it is helpful for us to know who's behind each API call, for two reasons:

* It allows us to get in touch with the user if something's gone wrong--for instance, their script has run amok and we've needed to start blocking or throttling a their usage.
* It lets us report back to our funders, which helps us keep the lights on.

Like Crossref (whose approach we are shamelessly stealing), we prefer carrots to sticks for this. So, depending on your preferences, you'll be in one of two API pools:

### The polite pool

The polite pool has much faster and more consistent response times. It's a good place to be.&#x20;

To get into the polite pool, you just have to give us an email where we can contact you. You can give us this email in one of two ways:

* Add the `mailto=you@example.com` parameter in your API request, like this: [https://api.openalex.org/works?mailto=you@example.com](https://api.openalex.org/works?filters=publication\_year:2020)
* Add `mailto:you@example.com` somewhere in your User-Agent request header.

### The common pool

The common pool has slower and less consistent response times. It's a less good place to be. We encourage everyone to get in the polite pool :innocent::thumbsup:

## Rate limits

The API doesn't have rate limits. However, in our first few weeks, we'd appreciate it if everyone kept it to under 100,000 calls per day. That will give us a chance to see how many users we may need to be supporting, and scale our infrastructure accordingly.&#x20;

If you need more than 100,000 calls per day, please drop us a line at team@ourresearch.org.

## Usage tips

### Calling the API in your browser

Because the API is all GET requests without fancy authentication, you can view any request in your browser. This is a very useful and pleasant way to explore the API and debug scripts; we use it all the time.&#x20;

However, this is _much_ nicer if you install an extension to pretty-print the JSON; [JSONVue (Chrome)](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) and [JSONView (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/jsonview) are popular, free choices.

![A lot prettier than cURL](https://i.imgur.com/E7mNLph.png)

Client Libraries&#x20;

There's no officially-supported client library for the API, for now. However, here's a short list of third-party libraries (and if you know of others, give us a shout):

* [openalexR](https://github.com/massimoaria/openalexR) (R)
