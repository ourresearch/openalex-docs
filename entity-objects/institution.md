# 🏫 Institution



his is intro stuff about venues

* the examples are from [https://api.openalex.org/institutions/I114027177](https://api.openalex.org/institutions/I114027177)
* you can get an institution in 3 ways: download, API, and website
* where do they come from? scraped from pages
* rely heavily on ror
*



## The `Institution` object

### `id`

_String:_ The OpenAlex ID for this institution.

```json
id: "https://openalex.org/I114027177"
```

### `ror`

_String:_ The [ROR](https://ror.org) ID for this institution.&#x20;

The ROR (Research Organization Registry) identifier is a globally unique ID for research organization. [ROR is the successor to GRiD](https://www.digital-science.com/press-release/grid-passes-torch-to-ror/), which is no longer being updated.&#x20;

```json
ror: "https://ror.org/0130frc33"
```



### `display_name`

_String:_ The primary name of the institution.

```json
display_name: "University of North Carolina at Chapel Hill"
```



### `country_code`

_String:_ The country where this institution is located, represented as an [ISO two-letter country code](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2).

```json
country_code: "US"
```

### `type`

_String:_ The institution's primary type, using the [ROR "type" controlled vocabulary](https://ror.readme.io/docs/ror-data-structure).&#x20;

Possible values are: `Education`, `Healthcare`, `Company`, `Archive`, `Nonprofit`, `Government`, `Facility`, and `Other`.

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

_String:_ Same as [`image_url`](institution.md#image\_url-1), but it's a smaller image.

```json
image_thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/100px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png"
```

### `display_name_acronyms`

_String:_ Acronyms or initialisms that people sometimes use instead of the full [`display_name`](institution.md#display\_name).

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

_Integer:_ The number of [Works](work.md) created by authors affiliated with this institution. Or less formally: the number of works coming out of this institution.

```json
works_count: 202704 
```

### `cited_by_count`

_Integer:_ The total number [Works](work.md) that cite a work created by an author affiliated with this institution. Or less formally: the number of citations this institution has collected.

```json
cited_by_count: 21199844 
```

``

### `cited_by_count`

_Integer:_ The total number [Works](work.md) that cite a work created by an author affiliated with this institution. Or less formally: the number of citations this institution has collected.

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

### `associated_institutions`

_List:_  Institution related to this one. Each associated institution is represented as a dehydrated Institution object, with one extra property:

* `relationship` (_String_): The type of relationship between this institution and the listed institution. Possible values: `Parent`, `Child`, and `Related`.

```json
associated_insitutions: [
    {
        id: "https://openalex.org/I2802101240",
        ror: "https://ror.org/0483mr804",
        display_name: "Carolinas Medical Center",
        country_code: "US",
        type: "healthcare",
        relationship: "related"
    },
    {
        id: "https://openalex.org/I69048370",
        ror: "https://ror.org/01s91ey96",
        display_name: "Renaissance Computing Institute",
        country_code: "US",
        type: "education",
        relationship: "related"
    },
    
    // and so forth....
]
```

### `counts_by_year`

_List:_ [`works_count`](institution.md#works\_count) and [`cited_by_count`](institution.md#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many new works this venue started hosting, and how many times _any_ work in this venue got cited. **todo clarify**

_List:_ The values of [`works_count`](institution.md#works\_count) and [`cited_by_count`](institution.md#cited\_by\_count) for _each_ of the last ten years, binned by year. To put it another way: for every listed year, you can see how many new works were affiliated with this institution, and how many times _any_ work affiliated with this institution got cited.

```json
counts_by_year: [
    {
        year: 2022,
        works_count: 133,
        cited_by_count: 32731
    },
    {
        year: 2021,
        works_count: 12565,
        cited_by_count: 2180827
    },
    
    // and so forth....
]
```



### `x_concepts`

{% hint style="danger" %}
The "x" in `x_concepts` is because it's experimental and subject to removal with very little warning. We plan to replace it with a custom link to the Concepts API endpoint.&#x20;
{% endhint %}

_List:_ The concepts most frequently applied to works affiliated with this institution. Each is represented as a dehydrated Concept object, with one additional attribute:

* `score` (_Float_): The strength of association between this institution and the listed concept, from 0-100.

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



### `works_api_url`

_String:_ An URL that will get you a list of all the works affiliated with this institution.

We express this as an API URL (instead of just listing the works themselves) because most institutions have way too many works to reasonably fit into a single return object.

```json
works_api_url: "https://api.openalex.org/works?filter=institution.id:I114027177"
```

### `updated_date`

_String:_ The last time anything in this object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2021-12-23T00:45:53.992803"
```











## The `DehydratedInstitution` object

The `DehydratedInstitution` is stripped-down [`Institution`](institution.md#the-institution-object) object, with most of its properties removed to save weight. Its only remaining properties are:

* [`id`](institution.md#id)``
* [`display_name`](institution.md#display\_name)``
* [`ror`](institution.md#ror)``
* [`country_code`](institution.md#country\_code)``
* [`type`](institution.md#type)``

