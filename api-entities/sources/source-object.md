# Source object

These are the fields in a source object. When you use the API to get a single source or lists of sources, this is what's returned.

### abbreviated\_title

*String:* An abbreviated title obtained from the [ISSN Centre](https://issn.org).

```json
abbreviated_title: "J. addict. med. ther. sci."
```

### alternate\_titles

*Array:* Alternate titles for this source, as obtained from the [ISSN Centre](https://issn.org) and individual work records, like Crossref DOIs, that carry the source name as a string. These are commonly abbreviations or translations of the source's canonical name.

```json
alternate_titles: [
   "ACRJ"
]
```

### apc\_prices

*List:* List of objects, each with `price` (*Integer*) and `currency` (*String*).

Article processing charge information, taken directly from [DOAJ](https://doaj.org/).

```json
apc_prices: [
    {
        price: 3920,
        currency: "GBP"
    }
]
```

### apc\_usd

*Integer:* The source's article processing charge in US Dollars, if available from [DOAJ](https://doaj.org/).

The `apc_usd` value is calculated by taking the APC price (see [`apc_prices`](source-object.md#apc_prices)) with a currency of USD if it is available. If it's not available, we convert the first available value from `apc_prices` into USD, using recent exchange rates.

```json
apc_usd: 5200
```

### `cited_by_count`

*Integer:* The total number of [`Works`](../works/work-object/) that cite a `Work` hosted in this source.

```json
cited_by_count: 133702 
```

### `country_code`

*String:* The country that this source is associated with, represented as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

```json
country_code: "GB" 
```

### `counts_by_year`

*List:* [`works_count`](source-object.md#works_count) and [`cited_by_count`](source-object.md#cited_by_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many new works this source started hosting, and how many times *any* work in this source got cited.

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

*String:* The date this `Source` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

*String:* The name of the source.

```json
display_name: "PeerJ"
```

### `homepage_url`

*String:* The starting page for navigating the contents of this source; the homepage for this source's website.

```json
homepage_url: "http://www.peerj.com/" 
```

### `host_organization`

*String:* The host organization for this source as an [OpenAlex ID](../../how-to-use-the-api/get-single-entities/#the-openalex-id). This will be an [`Institution.id`](../institutions/institution-object.md#id) if the source is a repository, and a [`Publisher.id`](../publishers/publisher-object.md#id) if the source is a journal, conference, or eBook platform (based on the [`type`](source-object.md#type) field).

```json
id: "https://openalex.org/P4310320595"
```

### `host_organization_lineage`

*List:* [OpenAlex IDs](../../how-to-use-the-api/get-single-entities/#the-openalex-id) — See [`Publisher.lineage`](../publishers/publisher-object.md#lineage). This will only be included if the [`host_organization`](source-object.md#host_organization) is a publisher (and not if the `host_organization` is an institution).

```json
host_organization_lineage: [
    "https://openalex.org/P4310321285",
    "https://openalex.org/P4310319900",
    "https://openalex.org/P4310319965"
]
```

### `host_organization_name`

*String:* The `display_name` from the [host\_organization](source-object.md#host_organization), shown for convenience.

```json
host_organization_name: "Elsevier BV" 
```

### `id`

*String:* The [OpenAlex ID](../../how-to-use-the-api/get-single-entities/#the-openalex-id) for this source.

```json
id: "https://openalex.org/S1983995261"
```

### `ids`

*Object:* All the external identifiers that we know about for this source. IDs are expressed as URIs whenever possible. Possible ID types:

*   `fatcat` (*String*: this source's [Fatcat](https://fatcat.wiki/) ID)
*   `issn` (*List:* a list of this source's ISSNs. Same as [`Source.issn`](source-object.md#issn))
*   `issn_l` (*String:* this source's ISSN-L. Same as [`Source.issn_l`](source-object.md#issn_l))
*   `mag` (*Integer:* this source's [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
*   `openalex` (*String:* this source's [OpenAlex ID](../../how-to-use-the-api/get-single-entities/#the-openalex-id). Same as [`Source.id`](source-object.md#id))
*   `wikidata` (*String*: this source's [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) ID)

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

*Boolean:* Whether this is a journal listed in the [Directory of Open Access Journals](https://doaj.org/) (DOAJ). \*\*\*\*

```json
is_in_doaj: true 
```

### `is_oa`

*Boolean:* Whether this is currently fully-open-access source. This could be `true` for a preprint repository where everything uploaded is free to read, or for a [Gold](https://en.wikipedia.org/wiki/Open_access#Colour_naming_system) or [Diamond](https://en.wikipedia.org/wiki/Diamond_open_access) open access journal, where all newly published Works are available for free under an open license.

We say "currently" because the status of a source can change over time. It's common for journals to "flip" to Gold OA, after which they may make only future articles open or also open their back catalogs. It's entirely possible for a source to say `is_oa: true`, but for an article from last year to require a subscription.

```json
is_oa: true 
```

### `issn`

*List:* The [ISSNs](https://en.wikipedia.org/wiki/International_Standard_Serial_Number) used by this source. Many publications have multiple ISSNs ([see above](source-object.md#issn_l)), so [ISSN-L](source-object.md#issn_l) should be used when possible.

```json
issn: ["2167-8359"]
```

### `issn_l`

*String:* The [ISSN-L](https://en.wikipedia.org/wiki/International_Standard_Serial_Number#Linking_ISSN) identifying this source. This is the [Canonical External ID](../../how-to-use-the-api/get-single-entities/#canonical-external-ids) for sources.

ISSN is a global and unique ID for serial publications. However, different media versions of a given publication (e.g., print and electronic) often have *different* ISSNs. This is why we can't have nice things. The ISSN-L or Linking ISSN solves the problem by designating a single canonical ISSN for all media versions of the title. It's *usually* the same as the print ISSN.

```json
issn_l: "2167-8359"
```

### societies

*Array:* Societies on whose behalf the source is published and maintained, obtained from our [crowdsourced list](https://blog.ourresearch.org/society-list/). Thanks!

```json
societies: [
    {
        "url": "http://www.counseling.org/",
        "organization": "American Counseling Association on behalf of the American College Counseling Association"
    }
]
```

### `summary_stats`

*Object:* Citation metrics for this source

*   `2yr_mean_citedness` *Float*: The 2-year mean citedness for this source. Also known as [impact factor](https://en.wikipedia.org/wiki/Impact_factor).
*   `h_index` *Integer*: The [*h*-index](https://en.wikipedia.org/wiki/H-index) for this source.
*   `i10_index` *Integer*: The [i-10 index](https://en.wikipedia.org/wiki/Author-level_metrics#i-10-index) for this source.

While the *h*-index and the i-10 index are normally author-level metrics, they can be calculated for any set of papers, so we include them for sources.

```json
summary_stats: {
    2yr_mean_citedness: 1.5295340589458237,
    h_index: 105,
    i10_index: 5045
}
```

### `type`

*String:* The type of source, which will be one of the following from the Type column:

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

*String:* The last time anything in this `Source` object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string. This date is updated for *any change at all*, including increases in various counts.

```json
updated_date: "2022-01-02T00:00:00"
```

### `works_api_url`

*String:* A URL that will get you a list of all this source's `Works`.

We express this as an API URL (instead of just listing the works themselves) because sometimes a source's publication list is too long to reasonably fit into a single `Source` object.

```json
works_api_url: "https://api.openalex.org/works?filter=primary_location.source.id:S1983995261",
```

### `works_count`

*Integer:* The number of [`Works`](../works/work-object/) this source hosts.

```json
works_count: 20184 
```

### `x_concepts`

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.
{% endhint %}

*List:* The `Concepts` most frequently applied to works hosted by this source. Each is represented as a [dehydrated Concept](../concepts/concept-object.md#the-dehydratedconcept-object) object, with one additional attribute:

`score` (*Float*): The strength of association between this source and the listed concept, from 0-100.

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

*   [`display_name`](source-object.md#display_name)
*   [`host_organization`](source-object.md#host_organization)
*   [`host_organization_lineage`](source-object.md#host_organization_lineage)
*   [`host_organization_name`](source-object.md#host_organization_name)
*   [`id`](source-object.md#id)
*   [`issn`](source-object.md#issn)
*   [`issn_l`](source-object.md#issn_l)
*   [`type`](source-object.md#type)
