# 👩 Author

Authors are people who create works.

OpenAlex indexes about 213M authors, with thousands added daily. The [Canonical External ID](./#canonical-external-ids) for authors is ORCID; only a small percentage of authors have one, but the percentage is higher for more recent works.

Our information about authors comes from MAG, Crossref, PubMed, ORCID, and publisher websites. We use an algorithm to [disambiguate](https://en.wikipedia.org/wiki/Author\_name\_disambiguation) authors; this uses an author’s name, their publication record, ther citation patterns, and (where available) their ORCID.

So for example, if J. Schmidt and John Jacob Jingleheimer Schmidt both write about 19th-century ketchup production, we’ll treat them as one author–but we won’t include the JJJ Schmidt who writes about weasel migration (even though his name is their name, too).

Authors are linked to works via the [`works.authorships`](work.md#authorships) property.

## The `Author` object

### `id`

_String:_ The OpenAlex ID for this author.

```json
id: "https://openalex.org/A2208157607"
```

### `orcid`

_String:_ The [ORCID](https://en.wikipedia.org/wiki/ORCID) [ID](https://en.wikipedia.org/wiki/RAS\_syndrome) for this author. ORCID is a global and unique ID for authors. This is the [Canonical external ID](./#canonical-external-ids) for authors.

{% hint style="warning" %}
Compared to other Canonical IDs, ORCID coverage is relatively low in OpenAlex, because ORCID adoption in the wild has been slow compared with DOI, for example. This is particularly an issue when dealing with older works and authors.
{% endhint %}

```json
orcid: "https://orcid.org/0000-0001-6187-6610"
```



### `display_name`

_String:_ The name of the author as a single string.

```json
display_name: "Jason Priem"
```



### `display_name_alternatives`

_List:_ Other ways that we've found this author's name displayed.

```json
display_name_alternatives: [
    "Jason R Priem"
]
```

### `works_count`

_Integer:_ The number of :page\_facing\_up: [Works](work.md) this this author has created.

```json
works_count: 38 
```

### `cited_by_count`

_Integer:_ The total number :page\_facing\_up: [Works](work.md) that cite a work this author has created.

```json
cited_by_count: 38 
```

### `ids`

_Object:_ All the external identifiers that we know about for this author. IDs are expressed as URIs whenever possible. Possible ID types:

* `openalex` (_String:_ this author's [OpenAlex ID](./#the-openalex-id). Same as [`Author.id`](author.md#id))
* `orcid` (_String:_ this author's [ORCID](https://orcid.org/) [ID](https://en.wikipedia.org/wiki/RAS\_syndrome). Same as [`Author.orcid`](author.md#orcid))
* `mag`  (_Integer:_ this author's [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `twitter` (_String:_ this author's Twitter handle)
* `wikipedia` (_String_: this author's Wikipedia page)
* `scopus` (_String_: this author's [Scopus author ID](https://utas.libguides.com/ManageID/Scopus))

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

_Object:_ This author's last known institutional affiliation. In this context "last known" means that we took all the [Works](work.md) where this author has an institutional affiliation, sorted them by publication date, and selected the most recent one.

This is a [dehydrated `Institution`](institution.md#the-dehydratedinstitution-object) object, and you can find more documentation on the [Institution](institution.md) page.

```json
last_known_institution: {
    id: "https://openalex.org/I4200000001",
    ror: "https://ror.org/02nr0ka47",
    display_name: "OurResearch",
    country_code: "CA",
    type: "nonprofit"
},
```

### `x_concepts`

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.&#x20;
{% endhint %}

_List:_ The concepts most frequently applied to works created by this author. Each is represented as a [dehydrated `Concept`](concept.md#the-dehydratedconcept-object) object, with one additional attribute:

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

### `counts_by_year`

_List:_ [`Author.works_count`](author.md#works\_count) and [`Author.cited_by_count`](author.md#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many works this author published, and how many times they got cited.&#x20;

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

### `works_api_url`

_String:_ A URL that will get you a list of all this author's works.

We express this as an API URL (instead of just listing the works themselves) because sometimes an author's publication list is too long to reasonably fit into a single author object.

```json
works_api_url: "https://api.openalex.org/works?filter=author.id:A2208157607",
```



### `updated_date`

_String:_ The last time anything in this author object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2022-01-02T00:00:00"
```

### `created_date`

_String:_ The date this `Author` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.&#x20;

```json
created_date: "2017-08-08"
```



## The Dehydrated`Author` object

The `DehydratedAuthor` is stripped-down [`Author`](author.md#the-author-object) object, with most of its properties removed to save weight. Its only remaining properties are:

* ``[`id`](author.md#id)``
* [`display_name`](author.md#display\_name)``
* [`orcid`](author.md#orcid)``
