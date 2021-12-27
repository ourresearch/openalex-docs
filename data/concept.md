# 💡 Concept

## notes

* these come from wikidata. there are many concept taxonomies but this is ours.
* there are different levels
* there are 80k of them
* they're assigned automatically.



* `id` (_String_): The OpenAlex ID for this concept.
* `wikidata` (_String_): The Wikidata URL for this concept.
* `display_name` (_String_): The name of the concept.
* `level` (_Integer_): This concept's level on the concept tree. Root concepts are Level 0 (eg: `Biology`). Level 1 concepts (eg: `Microbiology`) are children of level 0, and so forth.&#x20;
* `score` (_Float_): The strength of the connection between the work and this concept (higher is stronger).

his is intro stuff about venues

* the examples are from [https://api.openalex.org/institutions/I114027177](https://api.openalex.org/institutions/I114027177)
* you can get an institution in 3 ways: download, API, and website



### `id`

_String:_ The OpenAlex ID for this concept.

```json
id: "https://openalex.org/C2778407487"
```

### `wikidata`

_String:_ The [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main\_Page) ID for this concept.&#x20;

```json
wikidata: "https://www.wikidata.org/wiki/Q14565201"
```

### `display_name`

_String:_ The English-language label of the concept.

```json
display_name: "Altmetrics"
```

### `level`

_Integer:_ The level in the concept tree where this concept lives.

**todo**

```json
level: 2
```

### `description`

_String:_ A brief description of this concept.

**todo**

```json
type: "education"
```

### `homepage_url`

_String:_ The URL for institution's primary homepage.

```json
homepage_url: "http://www.unc.edu/"
```

### `image_url`

_String:_ URL where you can get an image representing this institution. Usually this is hosted on Wikipedia, and usually it's a seal or logo.

```json
image_url: "https://upload.wikimedia.org/wikipedia/en/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg"
```

### `image_thumbnail_url`

_String:_ Same as [`image_url`](concept.md#image\_url-1), but it's a smaller image.

```json
image_thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/100px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png"
```

### `display_name_acronyms`

_String:_ Acronyms or initialisms that people sometimes use instead of the full [`display_name`](concept.md#display\_name).

```json
display_name_acroynyms:["UNC"]
```

### `display_name_alternatives`

_String:_ Other names people may use for this institution. &#x20;

```json
display_name_alternatives: [
    "UNC-Chapel Hill"
]
```

### `works_count`

_Integer:_ The number of [Works](work/) created by authors affiliated with this institution. Or less formally: the number of works coming out of this institution.

```json
works_count: 202704 
```

### `cited_by_count`

_Integer:_ The total number [Works](work/) that cite a work created by an author affiliated with this institution. Or less formally: the number of citations this institution has collected.

```json
cited_by_count: 21199844 
```

### ``

### `cited_by_count`

_Integer:_ The total number [Works](work/) that cite a work created by an author affiliated with this institution. Or less formally: the number of citations this institution has collected.

```json
cited_by_count: 21199844 
```



### `ids`

_Object:_ All the [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) that we know about for this venue, as `key: value` pairs, where `key` is the PID namespace, and `value` is the PID. IDs are expressed as URIs where possible. They're all strings except for `mag`, which is a long integer.

```json
ids: {
    openalex: "https://openalex.org/I114027177",
    ror: "https://ror.org/0130frc33",
    grid: "grid.10698.36",
    wikipedia: "https://en.wikipedia.org/wiki/University%20of%20North%20Carolina%20at%20Chapel%20Hill",
    wikidata: null,
    mag: 114027177
}
```



### `geo`

_Object:_ A bunch of stuff we know about the location of this institution:

* `city` (_String_): The city where this institution lives.
* `geonames_city_id` (_String_): The city where this institution lives, as a [GeoNames database](http://www.geonames.org) ID.
* `region` (_String_): The sub-national region (state, province) where this institution lives.
* `country_code` (_String_): The country where this institution lives, represented as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).
* `country` (_String_): The country where this institution lives.
* `latitude` (_Float_): Does what it says.
* `longitude` (_Float_): Does what it says.

```json
geo: {
    city: "Chapel Hill",
    geonames_city_id: "4460162",
    region: "North Carolina",
    country_code: "US",
    country: "United States",
    latitude: 35.9083,
    longitude: -79.0492
}
```

### `international`

_Object:_ **todo**&#x20;

```json
international: {
    display_name: null
}
```



### `x_concepts`

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.&#x20;
{% endhint %}

_List:_ The top concepts associated with the works hosted in this venue. We make this list by simply tallying up what percent of this venue's works are tagged any given concept...the more frequently a concept is found, the higher its score. We then apply a cutoff, so low-scoring concepts don't appear.

Each listed concept is an abridged Concept object, with one additional attribute:

* `score` (_Float_): The strength of association between this venue and this concept; `100` is the highest.

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
    
    // and so forth...
]
```

### `counts_by_year`

_List:_ [`works_count`](concept.md#works\_count) and [`cited_by_count`](concept.md#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many new works this venue started hosting, and how many times _any_ work in this venue got cited. **todo clarify**

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
    
    // and so forth....
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

