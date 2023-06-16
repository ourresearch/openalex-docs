---
description: Companies and organizations that distribute works
---

# 🏢 Publishers

## 🏢 Publishers

Publishers are companies and organizations that distribute journal articles, books, and theses.

OpenAlex indexes about 10,000 publishers. You can get a publisher from the OpenAlex API like this:

* Get the publisher Elsevier with OpenAlex ID `P4310311775`\
  [https://api.openalex.org/publishers/P4310311775](https://api.openalex.org/publishers/P4310311775)

Our publisher data is closely tied to the publisher information in Wikidata. So the [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for OpenAlex publishers is a Wikidata ID, and almost every publisher has one. Publishers are linked to sources through the [`host_organization`](../sources/source-object.md#host\_organization) field.

## Publisher attributes

### `alternate_titles`

A list of alternate titles for this publisher.

```json
alternate_titles: [
  "Elsevier",
  "elsevier.com",
  "Elsevier Science",
  "Uitg. Elsevier",
"السفیر",  
"السویر",  
"انتشارات الزویر",  
"لودویک السفیر",  
  "爱思唯尔"
]
```

### `cited_by_count`

The number of citations to works that are linked to this publisher through journals or other sources.

For example, if a publisher publishes 27 journals and those 27 journals have 3,050 works, this number is the sum of the cited\_by\_count values for all of those 3,050 works.

```json
cited_by_count: 407508754
```

### `country_codes`

The countries where the publisher is primarily located

Each country is representated as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).

```json
country_codes: ["DE"]
```

### `counts_by_year`

The works count and cited-by count of this publisher for the last ten years, binned by year.

To put it another way: for every listed year, you can see how many new works are linked to this publisher, and how many times _any_ work linked to this publisher was cited.

Years with zero citations and zero works have been removed so you will need to add those back in if you need them.

```json
counts_by_year: [
    {
        year: 2021,
        works_count: 4211,
        cited_by_count: 120939
    },
    {
        year: 2020,
        works_count: 4363,
        cited_by_count: 119531
    },
    
    // and so forth
]
```

### `created_date`

The date this publisher was created in the OpenAlex dataset.

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

The primary name of the publisher.

```json
display_name: "Elsevier BV"
```

### `hierarchy_level`

The hierarchy level for this publisher—level 0 means this publisher has no parent publisher, level 1 means one parent, and so on.

```json
hierarchy_level: 1
```

### `id`

The OpenAlex ID for this publisher.

```json
id: "https://openalex.org/P4310320990"
```

### `ids`

All the external identifiers that we know about for this publisher. 

IDs are expressed as URIs whenever possible. Possible ID types:

* `openalex` _String:_ this publishers's [OpenAlex ID](../../the-api/get-single-entities/#the-openalex-id)
* `ror` _String:_ this publisher's ROR ID
* `wikidata` _String:_ this publisher's [Wikidata ID](https://www.wikidata.org/wiki/Wikidata:Identifiers)

<pre class="language-json"><code class="lang-json">ids: {
  openalex: "https://openalex.org/P4310320990",
  ror: "https://ror.org/02scfj030",
<strong>  wikidata: "https://www.wikidata.org/entity/Q746413"
</strong>},
</code></pre>

### `image_thumbnail_url`

URL where you can get a thumbnail image representing this publisher.

This is usually a hotlink to a wikimedia image. You can change the `width=300` parameter in the URL if you want a different thumbnail size.

```json
image_thumbnail_url: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/MIT%20Press%20logo.svg&width=300"
```

### `image_url`

URL where you can get an image representing this publisher. 

Usually this a hotlink to a Wikimedia image, and usually it's a seal or logo.

```json
image_url: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/MIT%20Press%20logo.svg"
```

### `lineage`

A list of OpenAlex IDs that includes this publisher, as well as any parent publishers. 

If this publisher's `hierarchy_level` is 0, this list will only contain its own ID.

```json
id: "https://openalex.org/P4310321285",
...
hierarchy_level: 2,
lineage: [
    "https://openalex.org/P4310321285",
    "https://openalex.org/P4310319900",
    "https://openalex.org/P4310319965"
]
```

### `parent_publisher`

An OpenAlex ID linking to the direct parent of the publisher. 

This will be null if the publisher's `hierarchy_level` is 0.

```json
parent_publisher: "https://openalex.org/P4310311775"
```

### `roles`

List of roles that this organization has, such as Institution, Funder, and Publisher.

In many cases, a single organization does not fit neatly into one role. For example, Yale University is a single organization that is a research university, funds research studies, and publishes an academic journal. The `roles` property links the OpenAlex entities together for a single organization, and includes counts for the works associated with each role.

Each `role` object in the list includes the `role` (one of `institution`, `funder`, or `publisher`), the `id` ([OpenAlex ID](../../the-api/get-single-entities/#the-openalex-id)), and the `works_count`.

The `roles` list of an entity ([Funder](./), [Publisher](../publishers/), or [Institution](../institutions/)) always includes itself. In the case where an organization only has one role, the `roles` will be a list of length one, with itself as the only item.

```json
roles: [
    {
        role: "funder",
        id: "https://openalex.org/F4320308380",
        works_count: 1004,
    },
    {
        role: "publisher",
        id: "https://openalex.org/P4310315589",
        works_count: 13986,
    },
    {
        role: "institution",
        id: "https://openalex.org/I32971472",
        works_count: 250031,
    }
]
```

### `sources_api_url`

A URL that will get you a list of all the sources published by this publisher.

We express this as an API URL (instead of just listing the sources themselves) because there might be thousands of sources linked to a publisher, and that's too many to fit here.

```json
sources_api_url: "https://api.openalex.org/sources?filter=host_organization.id:P4310319965"
```

### `summary_stats`

Citation metrics for this publisher.

* `2yr_mean_citedness` _Float_: The 2-year mean citedness for this publisher. Also known as [impact factor](https://en.wikipedia.org/wiki/Impact\_factor).
* `h_index` _Integer_: The [_h_-index](https://en.wikipedia.org/wiki/H-index) for this publisher.
* `i10_index` _Integer_: The [i-10 index](https://en.wikipedia.org/wiki/Author-level\_metrics#i-10-index) for this publisher.

While the _h_-index and the i-10 index are normally author-level metrics and the 2-year mean citedness is normally a journal-level metric, they can be calculated for any set of papers, so we include them for publishers.

```json
summary_stats: {
    2yr_mean_citedness: 5.065784263815827,
    h_index: 985,
    i10_index: 176682
}
```

### `updated_date`

The last time anything in this publisher's data changed (any change at all, including increases in various counts).

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. 

```json
updated_date: "2021-12-25T14:04:30.578837"
```

### `works_count`

The number of works published by this publisher.

```json
works_count: 13789818
```

## What's next

Using the API, you can fetch, filter, search, and group data about publishers:

* [Get a single publisher](get-a-single-publisher.md)
* [Get lists of publishers](get-lists-of-publishers.md)
* [Filter publishers](../../the-api/filters/filter-publishers.md)
* [Search publishers](search-publishers.md)
* [Group publishers](group-publishers.md)
