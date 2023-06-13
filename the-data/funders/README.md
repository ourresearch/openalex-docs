---
description: Organizations that fund research
---

# 💰 Funders

## 💰 Funders

Funders are organizations that fund research. 

OpenAlex indexes about 32,000 funders. Funder data comes from Crossref, and is enhanced with data from Wikidata and ROR. You can get a funder from the OpenAlex API like this:

* Get the funder National Institutes of Health (NIH) with OpenAlex ID `F4320332161`\
  [`https://api.openalex.org/funders/F4320332161`](https://api.openalex.org/funders/F4320332161)

Funders are connected to works through [grants.](../works/work-object/#grants)

## Funder attributes

### `alternate_titles`

A list of alternate titles for this funder.

```json
alternate_titles: [
  "US National Institutes of Health",
  "Institutos Nacionales de la Salud",
  "NIH"
]
```

### `cited_by_count`

The total number of works that cite a work linked to this funder.

```json
cited_by_count: 7823467
```

### `country_code`

The country where this funder is located.

The country is represented as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).

```json
country_code: "US"
```

### `counts_by_year`

The works count and cited-by count of this funder for the last ten years, binned by year.

To put it another way: each year, you can see how many works are linked to this funder, and how many times _any_ work linked to this funder was cited.

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

The date this funder was created in the OpenAlex dataset.

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2023-02-13"
```

### `description`

A short description of this funder, taken from Wikidata.

```json
description: "medical research organization in the United States"
```

### `display_name`

The primary name of the funder.

```json
display_name: "National Institutes of Health"
```

### `grants_count`

The number of grants linked to this funder.

```json
grants_count: 7109
```

### `homepage_url`

The URL for this funder's primary homepage.

```json
homepage_url: "http://www.nih.gov/"
```

### `id`

The OpenAlex ID for this funder.

```json
id: "https://openalex.org/F4320332161"
```

### `ids`

All the external identifiers that we know about for this funder. 

IDs are expressed as URIs whenever possible. Possible ID types:

* `openalex` _String:_ this funder's [OpenAlex ID](../../the-api/get-single-entities/#the-openalex-id)
* `ror` _String:_ this funder's ROR ID
* `wikidata` _String:_ this funder's [Wikidata ID](https://www.wikidata.org/wiki/Wikidata:Identifiers)

```json
ids: {
    openalex: "https://openalex.org/F4320332161",
    ror: "https://ror.org/01cwqze88",
    wikidata: "https://www.wikidata.org/entity/Q390551"
}
```

### `image_thumbnail_url`

URL where you can get a thumbnail image representing this funder.

This is usually a hotlink to a wikimedia image. You can change the `width=300` parameter in the URL if you want a different thumbnail size.

```json
image_thumbnail_url: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/NIH 2013 logo vertical.svg&width=300"
```

### `image_url`

URL where you can get an image representing this funder. 

Usually this a hotlink to a Wikimedia image, and usually it's a seal or logo.

```json
image_url: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/NIH 2013 logo vertical.svg"
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

### `summary_stats`

Citation metrics for this funder

* `2yr_mean_citedness` _Float_: The 2-year mean citedness for this funder. Also known as [impact factor](https://en.wikipedia.org/wiki/Impact\_factor).
* `h_index` _Integer_: The [_h_-index](https://en.wikipedia.org/wiki/H-index) for this funder.
* `i10_index` _Integer_: The [i-10 index](https://en.wikipedia.org/wiki/Author-level\_metrics#i-10-index) for this funder.

While the _h_-index and the i-10 index are normally author-level metrics and the 2-year mean citedness is normally a journal-level metric, they can be calculated for any set of papers, so we include them for funders.

```json
summary_stats: {
    2yr_mean_citedness: 5.065784263815827,
    h_index: 985,
    i10_index: 176682
}
```

### `updated_date`

The last time anything in this funder's data changed (any change at all, including increases in various counts).

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. 

```json
updated_date: "2023-04-21T16:54:19.012138"
```

### `works_count`

The number of works linked to this funder.

```json
works_count: 260210
```

## What's next

Using the API, you can fetch, filter, search, and group data about funders:

* [Get a single funder](get-a-single-funder.md)
* [Get lists of funders](get-lists-of-funders.md)
* [Filter funders](filter-funders.md)
* [Search funders](search-funders.md)
* [Group funders](group-funders.md)
