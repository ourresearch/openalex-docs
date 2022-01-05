# 💡 Concept

{% hint style="info" %}
**Documentation in progress**. This page is still being written, and will be complete on January 3, 2022.
{% endhint %}

## The `Concept` object



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
description: "study of alternative metrics for analyzing and informing scholarship"
```

### `works_count`

_Integer:_ The number of works tagged with this concept.

```json
works_count: 3078 
```

### `cited_by_count`

_Integer:_ The number citations to works that have been tagged with this concept. Or less formally: the number of citations to this concept.

For example, if there are just two works tagged with this concept and one of them has been cited 10 times, and the other has been cited 1 time, `cited_by_count` for this concept would be `11`.

```json
cited_by_count: 20248 
```

### `ids`

_Object:_ All the [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) that we know about for this venue, as `key: value` pairs, where `key` is the PID namespace, and `value` is the PID. IDs are expressed as URIs where possible.&#x20;

`umls_aui` and `umls_cui` refer to the [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) [Atom Unique Identifier and Concept Unique Identifier](https://www.nlm.nih.gov/research/umls/new\_users/online\_learning/Meta\_005.html) respectively. These are lists. The other IDs are all strings, except except for `mag`, which is a long integer.

```json
ids: {
    openalex: "https://openalex.org/C2778407487",
    wikidata: "https://www.wikidata.org/wiki/Q14565201",
    wikipedia: "https://en.wikipedia.org/wiki/Altmetrics",
    umls_aui: [ ],
    umls_cui: [ ],
    mag: 2778407487114027177
}
```



### `image_url`

_String:_ URL where you can get an image representing this concept, where available. Usually this is hosted on Wikipedia.

```json
image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Altmetrics.svg"
```

### `image_thumbnail_url`

_String:_ Same as [`image_url`](concept.md#image\_url), but it's a smaller image.

```json
image_thumbnail_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Altmetrics.svg/100px-Altmetrics.svg.png"
```

### `international`

_Object:_ **todo**&#x20;

```json
international: {
    display_name: {
        ca: "Altmetrics",
        ...
    }
}
```



### `ancestors`

_List:_ List of concepts that this concept descends from, as [dehydrated Concept](concept.md#the-dehydratedconcept-object) objects. See the [concept tree section](concept.md#the-concept-tree) for more details on how the different layers of concepts work together.

```json
ancestors: [
    {
        id: "https://openalex.org/C2522767166",
        wikidata: "https://www.wikidata.org/wiki/Q2374463",
        display_name: "Data science",
        level: 1
    },
    {
        id: "https://openalex.org/C161191863",
        wikidata: "https://www.wikidata.org/wiki/Q199655",
        display_name: "Library science",
        level: 1
    },
    
    // and so forth
]
```

### `related_concepts`

_List:_ Concepts that are similar to this one. Each listed concept is a [dehydrated Concept](concept.md#the-dehydratedconcept-object) object, with one additional attribute:

* `score` (_Float_): The strength of association between this concept and the listed concept, on a scale of 0-100.

```json
related_concepts: [
    {
        id: "https://openalex.org/C2778793908",
        wikidata: null,
        display_name: "Citation impact",
        level: 3,
        score: 4.56749
    },
    {
        id: "https://openalex.org/C2779455604",
        wikidata: null,
        display_name: "Impact factor",
        level: 2,
        score: 4.46396
    }
    
    // and so forth
]
```

### `counts_by_year`

_List:_ The values of [`works_count`](concept.md#works\_count) and [`cited_by_count`](concept.md#cited\_by\_count) for _each_ of the last ten years, binned by year. To put it another way: for every listed year, you can see how many new works were tagged with this concept, and how many times _any_ work tagged with this concept got cited.

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



### `works_api_url`

_String:_ An URL that will get you a list of all the works tagged with this concept.

We express this as an API URL (instead of just listing the works themselves) because there might be millions of works tagged with this concept, and that's too many to fit here.

```json
works_api_url: "https://api.openalex.org/works?filter=concept.id:C2778407487"
```

### `updated_date`

_String:_ The last time anything in this concept object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2021-12-25T14:04:30.578837"
```









## The `DehydratedConcept` object

The `DehydratedConcept` is stripped-down [`Concept`](concept.md#the-concept-object) object, with most of its properties removed to save weight. Its only remaining properties are:

* [`id`](concept.md#id)``
* [`wikidata`](concept.md#wikidata)``
* [`display_name`](concept.md#display\_name)``
* [`level`](concept.md#level)``
