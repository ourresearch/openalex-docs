---
description: Explore OpenAlex without needing to write code
---

# Website

{% hint style="info" %}
The website launches in February 2022
{% endhint %}

The easiest way to explore the OpenAlex dataset is via the web interface. It allows you to search, filter, facet, and export OpenAlex entities, just like [the API](api/) does (in fact, it's built on our API), but without needing any technical knowledge.

There's only one downside to the website: it's not actually done yet :).&#x20;

In the meantime, there is a very basic webpage for each OpenAlex entity that you can view by following any OpenAlex ID. So for example, pasting this ID in your browser:

[https://openalex.org/W2741809807](https://openalex.org/W2741809807)

will take you to a webpage with the basic info we know about the entity.

If you'd like to be notified of when the full website launches, please [join our mailing list](http://eepurl.com/hA8PhL).&#x20;

## Content negotiation

When you request an [Entity](about-the-data/) from openalex.org using its [OpenAlex ID](about-the-data/#the-openalex-id), you can specify the format you want its record in. Two formats are supported:

### A web page, easy for people to read ([`text/html`](https://www.iana.org/assignments/media-types/text/html)).

Entity information can be displayed on a web page, like [https://explore.openalex.org/works/W2741809807](https://explore.openalex.org/works/W2741809807).

#### **How to request a web page**:&#x20;

* In a web browser, click an OpenAlex ID or paste it into your location bar. Try clicking [https://openalex.org/W2741809807](https://openalex.org/W2741809807), for example.
* If using a client like [cURL](https://curl.se) or Python's [Requests](https://docs.python-requests.org/en/latest/), don't ask for JSON in any of the ways outlined below.

### A [JSON](https://json.org) object, easy for computers to read ([`application/json`](https://www.iana.org/assignments/media-types/application/json)).

Entity information can be returned in JSON format, as from [https://api.openalex.org/W2741809807](https://api.openalex.org/W2741809807).

#### **How to request JSON:**

* Add `.json` to the OpenAlex ID of the Entity. For example, [https://openalex.org/W2741809807.json](https://openalex.org/W2741809807.json) will give you a JSON object for [`Work`](about-the-data/work.md) W2741809807, without regard to the client you're using or any request headers you send.
* Ask for `application/json`  in your request's [Accept header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1). For example, using [cURL](https://curl.se)``
  * `$ curl -L -H 'Accept: application/json' 'https://openalex.org/W2741809807'`

##

