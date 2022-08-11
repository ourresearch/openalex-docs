# 💡 Concept

Concepts are abstract ideas that works are about.

OpenAlex indexes about 65k concepts. The [Canonical External ID](./#canonical-external-ids) for OpenAlex concepts is the Wikidata ID, and each of our concepts has one, because all OpenAlex concepts are also Wikidata concepts.

Concepts are hierarchical, like a tree. There are 19 root-level concepts, and six layers of descendents branching out from them, containing about 65 thousand concepts all told. This concept tree is a modified version of [the one created by MAG](https://arxiv.org/abs/1805.12216). You can view all the concepts and their position in the tree [as a spreadsheet here](https://docs.google.com/spreadsheets/d/1LBFHjPt4rj\_9r0t0TTAlT68NwOtNH8Z21lBMsJDMoZg/edit#gid=1473310811). About 85% of works are tagged with at least one concept (here's the [breakdown of concept counts per work](https://docs.google.com/spreadsheets/d/17DoJjyl1XVNZdVWs7fUy91z69U2tD8qtnBsaqJ-Zigo/edit#gid=0)).

Each work is tagged with multiple concepts, based on its title and abstract. The tagging is done using an automated classifier that was trained on MAG’s corpus; you can read more about the development and operation of this classifier in [Automated concept tagging for OpenAlex, an open index of scholarly articles.](https://docs.google.com/document/d/1OgXSLriHO3Ekz0OYoaoP\_h0sPcuvV4EqX7VgLLblKe4/edit) You can also implement the classifier yourself using [our models and code](https://github.com/ourresearch/openalex-concept-tagging).

Concepts are linked to works via the [`concepts`](work.md#concepts) property. They’re also linked to [authors](author.md#x\_concepts), [venues](venue.md#x\_concepts), and [institutions](institution.md#x\_concepts) via the `x_concepts` property, and to other concepts via the [`ancestors`](concept.md#ancestors) and [`related_concepts`](concept.md#related\_concepts) properties.

## The `Concept` object

### `id`

_String:_ The OpenAlex ID for this concept.

```json
id: "https://openalex.org/C2778407487"
```

### `wikidata`

_String:_ The [Wikidata ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) for this concept.  This is the [Canonical External ID](./#canonical-external-ids) for concepts.

{% hint style="info" %}
_All_ OpenAlex concepts have a Wikidata ID, because all OpenAlex concepts are also Wikidata concepts.&#x20;
{% endhint %}

```json
wikidata: "https://www.wikidata.org/wiki/Q14565201"
```

### `display_name`

_String:_ The English-language label of the concept.

```json
display_name: "Altmetrics"
```

### `level`

_Integer:_ The level in the concept tree where this concept lives. Lower-level concepts are more general, and higher-level concepts are more specific. [Computer Science](https://openalex.org/C41008148) has a level of 0; [Java Bytecode](https://openalex.org/C2777472213) has a level of 5. Level 0 concepts have no ancestors and level 5 concepts have no descendants.

```json
level: 2
```

### `description`

_String:_ A brief description of this concept.

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

__

_Object:_ All the external identifiers that we know about for this institution. IDs are expressed as URIs whenever possible. Possible ID types:

* `openalex` (_String:_ this concept's [OpenAlex ID](./#the-openalex-id). Same as [`Concept.id`](concept.md#id))
* `wikidata` (_String:_ this concept's [Wikidata ID](https://www.wikidata.org/wiki/Wikidata:Identifiers). Same as [`Concept.wikidata`](concept.md#wikidata))
* `mag`  (_Integer:_ this concept's [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `wikipedia` (_String:_ this concept's Wikipedia page URL)
* `umls_aui` (_List:_ this concept's [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) [Atom Unique Identifiers](https://www.nlm.nih.gov/research/umls/new\_users/online\_learning/Meta\_005.html))
* `umls_cui` (_List:_ this concept's [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) [Concept Unique Identifiers](https://www.nlm.nih.gov/research/umls/new\_users/online\_learning/Meta\_005.html))

{% hint style="info" %}
Many concepts are missing one or more ID types (either because we don't know the ID, or because it was never assigned). Keys for null IDs are not displayed..
{% endhint %}

```json
ids: {
    openalex: "https://openalex.org/C2778407487",
    wikidata: "https://www.wikidata.org/wiki/Q14565201",
    wikipedia: "https://en.wikipedia.org/wiki/Altmetrics",
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

_Object:_ This concept's display name in many languages, derived from article titles on each language's wikipedia. See the [Wikidata entry](https://www.wikidata.org/wiki/Q137496#sitelinks-wikipedia) for "Java Bytecode" for example source data.

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

Years with zero citations and zero works have been removed so you will need to add those back in  if you need them.

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

### `created_date`

_String:_ The date this `Concept` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.&#x20;

```json
created_date: "2017-08-08"
```

## The `DehydratedConcept` object

The `DehydratedConcept` is stripped-down [`Concept`](concept.md#the-concept-object) object, with most of its properties removed to save weight. Its only remaining properties are:

* [`id`](concept.md#id)``
* [`wikidata`](concept.md#wikidata)``
* [`display_name`](concept.md#display\_name)``
* [`level`](concept.md#level)``
