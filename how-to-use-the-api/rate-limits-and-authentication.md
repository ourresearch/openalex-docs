# Rate limits and authentication

The API is rate-limited. The limits are:

* max 100,000 calls every day, and also
* max 10 requests every second.

If you hit the API more than 100k times in a day or more than 10 in a second, you'll get `429` errors instead of useful data.

Are those rate limits too low for you? No problem! We can raise those limits as high as you need if you subscribe to [our Premium plan](https://openalex.org/pricing). And if you're an academic researcher we can likely do it for free; just drop us a line at [support@openalex.org](mailto:support@openalex.org).&#x20;

{% hint style="info" %}
Are you scrolling through a list of entities, calling the API for each? You can go way faster by squishing 50 requests into one using our [OR syntax](get-lists-of-entities/filter-entity-lists.md#addition-or). Here's [a tutorial](https://blog.ourresearch.org/fetch-multiple-dois-in-one-openalex-api-request/) showing how.
{% endhint %}

## Authentication

The OpenAlex API doesn't require authentication. However, it is helpful for us to know who's behind each API call, for two reasons:

* It allows us to get in touch with the user if something's gone wrong--for instance, their script has run amok and we've needed to start blocking or throttling their usage.
* It lets us report back to our funders, which helps us keep the lights on.

Like Crossref (whose approach we are shamelessly stealing), we prefer carrots to sticks for this. So, depending on your preferences, you'll be in one of two API pools:

### The polite pool

The polite pool has much faster and more consistent response times. It's a good place to be.&#x20;

To get into the polite pool, you just have to give us an email where we can contact you. You can give us this email in one of two ways:

* Add the `mailto=you@example.com` parameter in your API request, like this: [`https://api.openalex.org/works?mailto=you@example.com`](https://api.openalex.org/works?mailto=you@example.com)
* Add `mailto:you@example.com` somewhere in your User-Agent request header.

### The common pool

The common pool has slower and less consistent response times. It's a less good place to be. We encourage everyone to get in the polite pool :innocent::thumbsup:

## Usage tips

### Calling the API in your browser

Because the API is all GET requests without fancy authentication, you can view any request in your browser. This is a very useful and pleasant way to explore the API and debug scripts; we use it all the time.&#x20;

However, this is _much_ nicer if you install an extension to pretty-print the JSON; [JSONVue (Chrome)](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) and [JSONView (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/jsonview) are popular, free choices. Here's what an API response looks like with one of these extensions enabled:

![A lot prettier than cURL](https://i.imgur.com/E7mNLph.png)
