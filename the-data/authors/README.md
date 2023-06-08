---
description: People who create works
---

# 👩 Authors

## 👩 Authors

Authors are people who create works. OpenAlex indexes about 213M authors, with thousands added daily. You can get an author from the API like this:

* Get the author with ORCID `https://orcid.org/0000-0002-1298-3089` [https://api.openalex.org/authors/https://orcid.org/0000-0002-1298-3089](https://api.openalex.org/authors/https://orcid.org/0000-0002-1298-3089)

The [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for authors is ORCID; only a small percentage of authors have one, but the percentage is higher for more recent works.

Our information about authors comes from MAG, Crossref, PubMed, ORCID, and publisher websites. We use an algorithm to [disambiguate](https://en.wikipedia.org/wiki/Author\_name\_disambiguation) authors; this uses an author’s name, their publication record, their citation patterns, and (where available) their ORCID.

So for example, if J. Schmidt and John Jacob Jingleheimer Schmidt both write about 19th-century ketchup production, we’ll treat them as one author–but we won’t include the JJJ Schmidt who writes about weasel migration (even though his name is their name, too).

Authors are linked to works via the [`works.authorships`](../works/work-object/#authorships) property.

## Author attributes

### `cited_by_count`

The total number of works that cite a work this author has created.

```json
cited_by_count: 38 
```

### `counts_by_year`

The works count and cited-by count of this author for the last ten years, binned by year.

To put it another way: each year, you can see how many works this author published, and how many times they got cited.

Any works or citations older than ten years old aren't included. Years with zero works and zero citations have been removed so you will need to add those in if you need them.

```json
counts_by_year: [
    {
        year: 2022,
        works_count: 0,
        cited_by_count: 8
    },
    {
        year: 2021,
        works_count: 1,
        cited_by_count: 252
    },
    ...
    {
        year: 2012,
        works_count: 7,
        cited_by_count: 79
    }
]
```

### `created_date`

The date this author was created in the OpenAlex dataset.

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

The name of the author.

```json
display_name: "Jason Priem"
```

### `display_name_alternatives`

Other ways that we've found this author's name displayed.

```json
display_name_alternatives: [
    "Jason R Priem"
]
```

### `id`

The OpenAlex ID for this author.

```json
id: "https://openalex.org/A2208157607"
```

### `ids`

All the external identifiers that we know about for this author. 

IDs are expressed as URIs whenever possible. Possible ID types:

* `mag` (_Integer:_ this author's [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `openalex` (_String:_ this author's [OpenAlex ID](../../the-api/get-single-entities/#the-openalex-id). Same as [`Author.id`](author-object.md#id))
* `orcid` (_String:_ this author's [ORCID](https://orcid.org/) [ID](https://en.wikipedia.org/wiki/RAS\_syndrome). Same as [`Author.orcid`](author-object.md#orcid))
* `scopus` (_String_: this author's [Scopus author ID](https://utas.libguides.com/ManageID/Scopus))
* `twitter` (_String:_ this author's Twitter handle)
* `wikipedia` (_String_: this author's Wikipedia page)

{% hint style="info" %}
Most authors are missing one or more ID types (either because we don't know the ID, or because it was never assigned). Keys for null IDs are not displayed.
{% endhint %}

```json
ids: {
    openalex: "https://openalex.org/A2208157607",
    orcid: "https://orcid.org/0000-0001-6187-6610",
    scopus: "http://www.scopus.com/inward/authorDetails.url?authorID=36455008000&partnerID=MN8TOARS",
    mag: 2208157607
},
```

### `last_known_institution`

This author's last known institutional affiliation. 

In this context "last known" means that we took all the [Works](../works/work-object/) where this author has an institutional affiliation, sorted them by publication date, and selected the most recent one.

This is a [dehydrated `Institution`](../institutions/institution-object.md#the-dehydratedinstitution-object) object, and you can find more documentation on the [Institution](../institutions/institution-object.md) page.

```json
last_known_institution: {
    id: "https://openalex.org/I4200000001",
    ror: "https://ror.org/02nr0ka47",
    display_name: "OurResearch",
    country_code: "CA",
    type: "nonprofit"
},
```

### `orcid`

The ORCID ID for this author. 

ORCID is a global and unique ID for authors. This is the [Canonical external ID](../../the-api/get-single-entities/#canonical-external-ids) for authors.

{% hint style="warning" %}
Compared to other Canonical IDs, ORCID coverage is relatively low in OpenAlex, because ORCID adoption in the wild has been slow compared with DOI, for example. This is particularly an issue when dealing with older works and authors.
{% endhint %}

```json
orcid: "https://orcid.org/0000-0001-6187-6610"
```

### `summary_stats`

Citation metrics for this author

* `2yr_mean_citedness` _Float_: The 2-year mean citedness for this author. Also known as [impact factor](https://en.wikipedia.org/wiki/Impact\_factor).
* `h_index` _Integer_: The [_h_-index](https://en.wikipedia.org/wiki/H-index) for this author.
* `i10_index` _Integer_: The [i-10 index](https://en.wikipedia.org/wiki/Author-level\_metrics#i-10-index) for this author.

While the 2-year mean citedness is normally a journal-level metric, it can be calculated for any set of papers, so we include it for authors.

```json
summary_stats: {
    2yr_mean_citedness: 1.5295340589458237,
    h_index: 45,
    i10_index: 205
}
```

### `updated_date`

The last time anything in this author's data changed (any change at all, including increases in various counts).

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. 

```json
updated_date: "2022-01-02T00:00:00"
```

### `works_api_url`

A URL that will get you a list of all this author's works via the OpenAlex API.

We express this as an API URL (instead of just listing the works themselves) because sometimes an author's publication list is too long to reasonably fit into a single author object.

```json
works_api_url: "https://api.openalex.org/works?filter=author.id:A2208157607",
```

### `works_count`

The number of Works that this author has created.

```json
works_count: 38 
```

{% hint style="info" %}
This is updated a couple times per day. So the count may be slightly different than what's in works when viewed [like this](https://api.openalex.org/works?filter=author.id:A2151238091).
{% endhint %}

### `x_concepts`

The concepts most frequently applied to works created by this author. 

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.
{% endhint %}

Each concept is represented as a [dehydrated `Concept`](../concepts/concept-object.md#the-dehydratedconcept-object) object, with one additional attribute:

* `score` (_Float_): The strength of association between this author and the listed concept, from 0-100.

```json
x_concepts: [
    {
        id: "https://openalex.org/C41008148",
        wikidata: null,
        display_name: "Computer science",
        level: 0,
        score: 97.4
    },
    {
        id: "https://openalex.org/C17744445",
        wikidata: null,
        display_name: "Political science",
        level: 0,
        score: 78.9
    }
]
```

## The Dehydrated`Author` object

The `DehydratedAuthor` is stripped-down [`Author`](author-object.md#the-author-object) object, with most of its properties removed to save weight. Its only remaining properties are:

* ``[`id`](author-object.md#id)``
* ``[`display_name`](author-object.md#display\_name)``
* ``[`orcid`](author-object.md#orcid)``

## What's next

Using the API, you can fetch, filter, search, and group data about authors:

* [Get a single author](get-a-single-author.md)
* [Get lists of authors](get-lists-of-authors.md)
* [Filter authors](../../the-api/filters/filter-authors.md)
* [Search authors](search-authors.md)
* [Group authors](group-authors.md)
