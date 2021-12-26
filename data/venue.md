# 📚 Venue

this is intro stuff about venues

* the examples are from: [https://api.openalex.org/venues/v1983995261](https://api.openalex.org/venues/v1983995261)
* you can get a venue in 3 ways: download, API, and website
* we say "hosts" not "publishes" because the latter can mean different things.

### `id`

_String:_ The OpenAlex ID for this venue.

```json
id: "https://openalex.org/V1983995261"
```

### `issn_l`

_String:_ The [ISSN-L](https://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number#Linking\_ISSN) identifying this venue.

ISSN is a global and unique ID for serial publications. However, different media versions of a given publication (ie, print and electronic) often have _different_ ISSNs. This is why we can't have nice things. The ISSN-L or Linking ISSN solves the problem by designating a single canonical ISSN for all media versions of the title. It's _usually_ the same as the print ISSN.

```json
issn_l: "2167-8359"
```

### `issn`

_List:_ The [ISSNs](https://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number) used by this venue. Many publications have multiple ISSNs ([see above](venue.md#issn\_l)), so [ISSN-L](venue.md#issn\_l) should be used when possible.

```json
issn:["2167-8359"]
```

### `display_name`

_String:_ The name of the venue.

```json
display_name: "PeerJ"
```

### `publisher`

_String:_ The name of this venue's publisher. Publisher is a tricky category, as journals often changes publishers, publishers merge, publishers have subsidiaries ("imprints"), and of course no one is consistent in their naming. In the future, we plan to roll out to support a more structured publisher field, but for now it's just strings.

```json
publisher: "Peerj"
```



### `works_count`

_Integer:_ The number of [Works](work/) this this venue hosts.

```json
works_count: 20184 
```

### `cited_by_count`

_Integer:_ The total number [Works](work/) that cite a work hosted in this venue.

```json
cited_by_count: 133702 
```

``

### `is_oa`

_Boolean:_ **todo**&#x20;

```json
is_oa: true 
```

### `is_in_doaj`

_Boolean:_ **todo**&#x20;

```json
is_in_doaj: true 
```



### `homepage_url`

_String:_ **todo**&#x20;

```json
homepage_url: "http://www.peerj.com/" 
```



### `ids`

_Object:_ All the [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) that we know about for this venue, as `key: value` pairs, where `key` is the PID namespace, and `value` is the PID. IDs are expressed as URIs where possible.&#x20;

```json
ids: {
    openalex: "https://openalex.org/V1983995261",
    issn_l: "2167-8359",
    issn: [
        "2167-8359"
    ],
    mag: 1983995261
}
```

### `last_known_institution`

_Object:_ This author's last known institutional affiliation. In this context "last known" means that we took all the [Works](work/) where this author has an institutional affiliation, sorted them by publication date, and selected the most recent one.

This is an abridged [Institution](institution.md) object, and you can find more documentation on the [Institution](institution.md) page.

```json
last_known_institution: {
    id: "https://openalex.org/I114027177",
    ror: "https://ror.org/0130frc33",
    display_name: "University of North Carolina at Chapel Hill",
    country_code: "US",
    type: "education"
},
```

### `x_concepts`

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.&#x20;
{% endhint %}

_List:_ The top concepts found in this author's Works. We make this list by simply tallying up what percent of this author's Works have any given concept...the more frequently a concept is found, the higher its score. We then apply a cutoff, so low-scoring concepts don't appear.

Each listed concept is an abridged Concept object, with one additional attribute:

* `score` (_Float_): The strength of association between this author and this concept; `100` is the highest.

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

_List:_ [`Author.works_count`](venue.md#works\_count) and [`Author.cited_by_count`](venue.md#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many works this author published, and how many times they got cited.&#x20;

Any works or citations older than ten years old aren't included.

```json
counts_by_year: [
    {
        year: 2022,
        works_count: 0,
        cited_by_count: 1
    },
    {
        year: 2021,
        works_count: 1,
        cited_by_count: 228
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

_String:_ An URL that will get you a list of all this author's works.

We express this as an API URL (instead of just listing the works themselves) because sometimes an author's publication list is too long to reasonably fit into a single author object.

```json
works_api_url: "https://api.openalex.org/works?filter=author.id:A2208157607",
```



### `updated_date`

_String:_ The last time anything in this author object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2016-06-24T00:00:00"
```

