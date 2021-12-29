---
description: Query the OpenAlex dataset using the magic of The Internet
---

# API

## Endpoints

There are five entity endpoints, one for each [entity type](../about-the-data/):

* `/works`&#x20;
* `/authors`
* `/venues`
* `/institutions`
* `/concepts`

Each of these can give you either:

* a [single entity](get-single-entities.md) (eg: [https://api.openalex.org/works/W2741809807](https://api.openalex.org/works/W2741809807)), or&#x20;
* a [list of entities](get-lists-of-entities.md) (eg: [https://api.openalex.org/works?filters=publication\_year:2020](https://api.openalex.org/works?filters=publication\_year:2020)). The lists can be filtered, searched, sorted and [faceted into groups](get-groups-of-entities.md).

All the endpoints only respond to HTTP GET requests, all return JSON, and all work over HTTPS.

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

However, to do this you'll want to install an extension to pretty-print the JSON; [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) and [JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) are popular, free choices for  Chrome.

![A lot prettier than cURL](https://i.imgur.com/E7mNLph.png)

