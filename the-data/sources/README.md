---
description: Journals and repositories that host works
---

# 📚 Sources

## 📚 Sources

Sources are where works are hosted.

OpenAlex indexes about 226,000 sources. There are several types, including journals, conferences, preprint repositories, and institutional repositories. You can get sources from the OpenAlex API like this:

* Search for the journal Nature\
  [`https://api.openalex.org/sources?search=nature`](https://api.openalex.org/sources?search=nature)

The [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for sources is ISSN-L, which is a special "main" ISSN assigned to every sources (sources tend to have multiple ISSNs). About 90% of sources in OpenAlex have an ISSN-L or ISSN.

Our information about sources comes from Crossref, the ISSN Network, and MAG. These datasets are joined automatically where possible, but there’s also a lot of manual combining involved. We do not curate journals, so any journal that is available in the data sources should make its way into OpenAlex.

Several sources may host the same work. OpenAlex reports both the primary host source (generally wherever the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record) lives), and alternate host sources (like preprint repositories).

Sources are linked to works via the [`works.primary_location`](../works/work-object/#primary\_location) and [`works.locations`](../works/work-object/#locations) properties.

{% hint style="info" %}
Check out the [Japanese Sources tutorial](https://github.com/ourresearch/openalex-api-tutorials/blob/main/notebooks/institutions/japan\_sources.ipynb), a Jupyter notebook showing how to use Python and the API to learn about all of the sources in a country.
{% endhint %}

{% @test-integration/test-integration url="https://alpha.openalex.org/works?filter=primary_location.source.id:S49861241\&page=1" %}

## Source attributes

### abbreviated\_title

An abbreviated title for this source.

Obtained from the [ISSN Centre](https://issn.org).

```json
abbreviated_title: "J. addict. med. ther. sci."
```

### alternate\_titles

Alternate titles for this source, commonly abbreviations or translations of the source's canonical name.

Obtained from the [ISSN Centre](https://issn.org) and individual work records, like Crossref DOIs, that carry the source name as a string.

```json
alternate_titles: [
   "ACRJ"
]
```

### apc\_prices

Article processing charge (APC) information

Taken directly from [DOAJ](https://doaj.org/).

List of objects, each with `price` (_Integer_) and `currency` (_String_).

```json
apc_prices: [
    {
        price: 3920,
        currency: "GBP"
    }
]
```

### apc\_usd

The source's article processing charge in US Dollars

The `apc_usd` value is calculated by taking the APC price (see [`apc_prices`](source-object.md#apc\_prices)) with a currency of USD if it is available. If it's not available, we convert the first available value from `apc_prices` into USD, using recent exchange rates.

```json
apc_usd: 5200
```

### `cited_by_count`

The total number of works that cite a work hosted in this source.

```json
cited_by_count: 133702 
```

### `country_code`

The country that this source is associated with.

The country is represented as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).

```json
country_code: "GB" 
```

### `counts_by_year`

The works count and cited-by count of this source for the last ten years, binned by year.

To put it another way: each year, you can see how many new works this source started hosting, and how many times _any_ work in this source got cited.

If the source was founded less than ten years ago, there will naturally be fewer than ten years in this list. Years with zero citations and zero works have been removed so you will need to add those in if you need them.

```json
counts_by_year: [
    {
        year: 2021,
        works_count: 4338,
        cited_by_count: 127268
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

The date this source was created in the OpenAlex dataset.

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

The name of the source.

```json
display_name: "PeerJ"
```

### `homepage_url`

The starting page for navigating the contents of this source; the homepage for this source's website.

```json
homepage_url: "http://www.peerj.com/" 
```

### `host_organization`

The host organization for this source—either a publisher or an institution—as an OpenAlex ID. 

This will be an [`Institution.id`](../institutions/institution-object.md#id) if the source is a repository, and a [`Publisher.id`](../publishers/publisher-object.md#id) if the source is a journal, conference, or eBook platform (based on the [`type`](source-object.md#type) field).

```json
id: "https://openalex.org/P4310320595"
```

### `host_organization_lineage`

A list of OpenAlex IDs — See [`Publisher.lineage`](../publishers/publisher-object.md#lineage). 

This will only be included if the [`host_organization`](source-object.md#host\_organization) is a publisher (and not if the `host_organization` is an institution).

```json
host_organization_lineage: [
    "https://openalex.org/P4310321285",
    "https://openalex.org/P4310319900",
    "https://openalex.org/P4310319965"
]
```

### `host_organization_name`

The name of this source's host organization.

This is the `display_name` from the [host\_organization](source-object.md#host\_organization), shown for convenience.

```json
host_organization_name: "Elsevier BV" 
```

### `id`

The OpenAlex ID for this source.

```json
id: "https://openalex.org/S1983995261"
```

### `ids`

All the external identifiers that we know about for this source. 

IDs are expressed as URIs whenever possible. Possible ID types:

* `fatcat` (_String_: this source's [Fatcat](https://fatcat.wiki/) ID)
* `issn` (_List:_ a list of this source's ISSNs. Same as [`Source.issn`](source-object.md#issn))
* `issn_l` (_String:_ this source's ISSN-L. Same as [`Source.issn_l`](source-object.md#issn\_l))
* `mag` (_Integer:_ this source's [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `openalex` (_String:_ this source's [OpenAlex ID](../../the-api/get-single-entities/#the-openalex-id). Same as [`Source.id`](source-object.md#id))
* `wikidata` (_String_: this source's [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main\_Page) ID)

{% hint style="info" %}
Many sources are missing one or more ID types (either because we don't know the ID, or because it was never assigned). Keys for null IDs are not displayed.
{% endhint %}

<details>

<summary>Example</summary>

{% code fullWidth="true" %}
```json
ids: {
    openalex: "https://openalex.org/S1983995261",
    issn_l: "2167-8359",
    issn: [
        "2167-8359"
    ],
    mag: 1983995261,
    fatcat: "https://fatcat.wiki/container/z3ijzhu7zzey3f7jwws7rzopoq",
    wikidata: "https://www.wikidata.org/entity/Q96326029"
}
```
{% endcode %}

</details>

### `is_in_doaj`

Whether this is a journal listed in the Directory of Open Access Journals (DOAJ).

```json
is_in_doaj: true 
```

### `is_oa`

Whether this is currently a fully-open-access source. 

This could be `true` for a preprint repository where everything uploaded is free to read, or for a [Gold](https://en.wikipedia.org/wiki/Open\_access#Colour\_naming\_system) or [Diamond](https://en.wikipedia.org/wiki/Diamond\_open\_access) open access journal, where all newly published Works are available for free under an open license.

We say "currently" because the status of a source can change over time. It's common for journals to "flip" to Gold OA, after which they may make only future articles open or also open their back catalogs. It's entirely possible for a source to say `is_oa: true`, but for an article from last year to require a subscription.

```json
is_oa: true 
```

### `issn`

The ISSNs used by this source. 

Many publications have multiple [ISSNs](https://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number), so [ISSN-L](source-object.md#issn\_l) should be used when possible.

```json
issn: ["2167-8359"]
```

### `issn_l`

The ISSN-L identifying this source. 

ISSN is a global and unique ID for serial publications. However, different media versions of a given publication (e.g., print and electronic) often have _different_ ISSNs. This is why we can't have nice things. The [ISSN-L](https://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number#Linking\_ISSN) or Linking ISSN solves the problem by designating a single canonical ISSN for all media versions of the title. It's _usually_ the same as the print ISSN.

This is the [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for sources.

```json
issn_l: "2167-8359"
```

### societies

Societies on whose behalf the source is published and maintained. 

Obtained from our [crowdsourced list](https://blog.ourresearch.org/society-list/). Thanks!

```json
societies: [
    {
        "url": "http://www.counseling.org/",
        "organization": "American Counseling Association on behalf of the American College Counseling Association"
    }
]
```

### `summary_stats`

Citation metrics for this source.

* `2yr_mean_citedness` _Float_: The 2-year mean citedness for this source. Also known as [impact factor](https://en.wikipedia.org/wiki/Impact\_factor).
* `h_index` _Integer_: The [_h_-index](https://en.wikipedia.org/wiki/H-index) for this source.
* `i10_index` _Integer_: The [i-10 index](https://en.wikipedia.org/wiki/Author-level\_metrics#i-10-index) for this source.

While the _h_-index and the i-10 index are normally author-level metrics, they can be calculated for any set of papers, so we include them for sources.

```json
summary_stats: {
    2yr_mean_citedness: 1.5295340589458237,
    h_index: 105,
    i10_index: 5045
}
```

### `type`

The type of source, which will be one of: journal, repository, conference, or ebook platform.

| Type             | Wikidata ID                                          | How it's assigned                                                                                                                  |
| ---------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `journal`        | [Q737498](https://www.wikidata.org/wiki/Q737498)     | The source is an academic journal with an [ISSN](source-object.md#issn).                                                           |
| `repository`     | [Q66656823](https://www.wikidata.org/wiki/Q66656823) | The source is a disciplinary or institutional repository.                                                                          |
| `conference`     | [Q47258130](https://www.wikidata.org/wiki/Q47258130) | The source publishes Works with [`type`](../works/work-object/#type) "Proceedings", "Proceedings Series" or "Proceedings Article". |
| `ebook platform` | [Q1294318](https://www.wikidata.org/wiki/Q1294318)   | The source publishes Works with [`type`](../works/work-object/#type) containing "book", e.g. "Book Chapter".                       |

```json
type: "journal" 
```

### `updated_date`

The last time anything in this source's data changed (any change at all, including increases in various counts).

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. 

```json
updated_date: "2022-01-02T00:00:00"
```

### `works_api_url`

A URL that will get you a list of all this source's works.

We express this as an API URL (instead of just listing the works themselves) because sometimes a source's publication list is too long to reasonably fit into a single `Source` object.

```json
works_api_url: "https://api.openalex.org/works?filter=primary_location.source.id:S1983995261",
```

### `works_count`

The number of works this source hosts.

```json
works_count: 20184 
```

### `x_concepts`

The `Concepts` most frequently applied to works hosted by this source.

Each is represented as a [dehydrated Concept](../concepts/concept-object.md#the-dehydratedconcept-object) object, with one additional attribute:

`score` (_Float_): The strength of association between this source and the listed concept, from 0-100.

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.
{% endhint %}

```json
x_concepts: [
    {
        id: "https://openalex.org/C86803240",
        wikidata: null,
        display_name: "Biology",
        level: 0,
        score: 86.7
    },
    {
        id: "https://openalex.org/C185592680",
        wikidata: null,
        display_name: "Chemistry",
        level: 0,
        score: 51.4
    },
    
    // and so forth
]
```

## The `DehydratedSource` object

The `DehydratedSource` is stripped-down `Source` object, with most of its properties removed to save weight. Its only remaining properties are:

* [`display_name`](source-object.md#display\_name)
* [`host_organization`](source-object.md#host\_organization)
* [`host_organization_lineage`](source-object.md#host\_organization\_lineage)
* [`host_organization_name`](source-object.md#host\_organization\_name)
* [`id`](source-object.md#id)
* [`is_in_doaj`](#is_in_doaj)
* [`issn`](source-object.md#issn)
* [`issn_l`](source-object.md#issn\_l)
* [`type`](source-object.md#type)

## What's next

Using the API, you can fetch, filter, search, and group data about sources:

* [Get a single source](../../the-api/get-single-entities/get-a-single-source.md)
* [Get lists of sources](../../the-api/get-lists-of-entities/get-lists-of-sources.md)
* [Filter sources](../../the-api/filters/filter-sources.md)
* [Search sources](search-sources.md)
* [Group sources](group-sources.md)
