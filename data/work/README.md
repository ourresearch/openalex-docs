# 📄 Work



the works object is blah blah

example: [https://api.openalex.org/works/W2741809807](https://api.openalex.org/works/W2741809807)&#x20;

### `id`

_String:_ The OpenAlex ID for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `doi` <a href="#title" id="title"></a>

_String:_ The DOI for the work.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on bioRxiv, and another DOI for the published version. However, this field always has just one DOI, the DOI for the published work. If you want DOIs for other versions, you can find them in the `alternate_locations` list.&#x20;

```json
doi: "https://doi.org/10.7717/peerj.4375"
```

### `title`

_String:_ The title of this work.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `display_name`

_String:_ Exactly the same as Work.title. It's included as a bit of [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic\_sugar): all the other types of entities have a `display_name` property, so it'd be weird for the Work to not have one.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

``

### `publication_year`

_Integer:_ The year this work was published.

This year applies to the version found at `Work.url`. The other versions, found in `alternate_locations`, may have been published in different (earlier) years.&#x20;

```json
publication_year: 2018
```

### `publication_date`

_String:_ The day when this work was published, formatted as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date.

Where different publication dates exist, we select the earliest available date of electronic publication.&#x20;

This date applies to the version found at `Work.url`. The other versions, found in `alternate_locations`, may have been published at different (earlier) dates.&#x20;

```json
publication_date: "2018-02-13"
```

### `ids`

_Object:_ All the [persistent identifiers (PIDs)](https://en.wikipedia.org/wiki/Persistent\_identifier) that we know about for this work, as `key: value` pairs, where `key` is the PID namespace, and `value` is the PID. IDs are expressed as URIs where possible. ID namespaces currently include:

* `openalex` (_String_; The OpenAlex ID, which is also found at [`Work.id`](./#id))
* `doi` (_String_; The [DOI](https://en.wikipedia.org/wiki/Digital\_object\_identifier). This is most likely, but not necessarily, a [Crossref](https://www.crossref.org) DOI)
* `mag`  (_Integer_; the [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `pmid` (_String_; The [Pubmed Identifier](https://en.wikipedia.org/wiki/PubMed#PubMed\_identifier))

```json
ids: {
    openalex: "https://openalex.org/W2741809807",
    doi: "https://doi.org/10.7717/peerj.4375",
    mag: 2741809807,
    pmid: "https://pubmed.ncbi.nlm.nih.gov/29456894"
}
```



### `host_venue`

_Object:_ The venue where you can get this work. Generally that means a journal, but could also be a preprint repository like [ArXiv](https://arxiv.org), or some other place that publishes works. This is formatted as a dehydrated Venue object, and you can see the Venue docs for more info on each property. It also has a few additional properties that are specific to this particular work at this particular venue:

* `url` (_String_): the URL where this work lives
* `is_oa` (_Boolean_): `True` if you can read this work here for free, without registration.
* `version` (_String_): The version of the work as hosted at this venue.
* `license` (_String_): The license of the work as hosted at this venue.

```json
host_venue: {
    id: "https://openalex.org/V1983995261",
    issn_l: "2167-8359",
    issn: [
        "2167-8359"
    ],
    display_name: "PeerJ",
    publisher: "PeerJ",
    type: "journal",
    url: "https://doi.org/10.7717/peerj.4375",
    is_oa: null,
    version: null,
    license: null
}
```



### `url`

_String:_ The best URL where you can find this work.

The "best" URL is generally the one closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record). Other URLs for the work (often preprints or author manuscripts) are listed in the [alternate\_locations](./#alternate\_locations) field.

```json
url: "https://doi.org/10.7717/peerj.4375"
```

### `genre`

_String:_ The genre of the work--for instance, `journal-article`, `monograph`, `dataset`, etcetera.&#x20;

These are largely sourced from [Crossref](https://api.crossref.org/swagger-ui/index.html#/Types), with others coming from MAG. Unfortunately the accuracy of this openly-available genre metadata is not great, and so we're working to develop better genre classification.

```json
genre: "journal-article"
```

### `is_oa`

_Boolean:_ `True` if this work is Open Access (OA).&#x20;

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in. You can use the `alternate_locations` and `oa_status` fields to narrow your results further, accommodating any definition of OA you like.

```json
is_oa: true
```

### `oa_status`

_String:_ The Open Access (OA) status of this work. Possible values are:

* **`gold`**: Published in an OA journal that is indexed by the [DOAJ](https://doaj.org).
* **`green`**: Toll-access on the publisher landing page, but there is a free copy in an [OA repository](https://en.wikipedia.org/wiki/Open-access\_repository).
* **`hybrid`**: Free under an [open license](https://support.unpaywall.org/support/solutions/articles/44002063718-what-is-an-oa-license-) in a toll-access journal.
* **`bronze`**: Free to read on the publisher landing page, but without any identifiable license.
* **`closed`**: All other articles.

```json
oa_status: "gold"
```

### oa\_url

_String:_ The best Open Access (OA) URL for this work.&#x20;

Although there are [many ways to define OA](https://peerj.com/articles/4375/#literature-review), in this context an OA URL is one where you can read the fulltext of this work without needing to pay money or log in. The "best" such URL is the one closest to the version of record.&#x20;

This URL might be a direct link to a PDF, or it might be to a landing page that links to the free PDF

The value of `Work.oa_status` is related to the values of Work..

* If `Work.oa_status` is `gold`, `hybrid`, or `bronze` than `Work.oa_url` will be the same as `Work.url`, and `Work.is_oa` will be `True.`
* If `Work.oa_status` is `green`, than `Work.oa_url` will be different from `Work.url`.
* If `Work.oa_status` is `closed`, `then` `Work.oa_url` will be `null`.

some cases the `Work.oa_url` is the same as `Work.url`--for instance, if the work is published as In other cases, `Work.url` may point to a toll-access page, while `Work.oa_url` points to an OA preprint somewhere else.&#x20;

If `Work.is_oa` is False, then `Work.oa_url` will be `null`.

```json
oa_url: "https://peerj.com/articles/4375.pdf"
```

### authorships

_List:_ List of Authorship objects, each representing an author and their institution.&#x20;

### `references_count`

_Integer:_ The number of references from this work. References are citations that point _from_ this work _to_ other works.

```json
references_count: 34
```



### `cited_by_count`

_Integer:_ The number of citations to this work. Citations point _from_ other works _to_ this work.

```json
cited_by_count: 367
```

### `biblio`

_Object:_ Old-fashioned bibliographic info for this work, mostly useful only in citation/reference contexts:

* `volume` (_String_)
* `issue` (_String_)
* `first_page` (_String_)
* `last_page` (_String_)

```json
biblio: {
    volume: "495",
    issue: "7442",
    first_page: "437",
    last_page: "440"
}
```

### `is_retracted`

_Boolean:_ True if we know this work has been retracted.&#x20;

This field has high precision but low recall. In other words, if `is_retracted = True`, the article is definitely retracted. But if `is_retracted = False`,  it still might be retracted, and we just don't know. This is because unfortunately, the [open sources for retraction data](https://www.crossref.org/blog/encouraging-even-greater-reporting-of-corrections-and-retractions/) aren't currently very comprehensive, and [the more comprehensive ones](https://retractionwatch.com) aren't very open.

```json
is_retracted: false 
```



### `is_paratext`

_Boolean:_ True if we think this work is [paratext](https://en.wikipedia.org/wiki/Paratext).&#x20;

@todo more explanation of paratext here. see [https://support.unpaywall.org/support/solutions/articles/44001894783-what-does-is-paratext-mean-in-the-api-](https://support.unpaywall.org/support/solutions/articles/44001894783-what-does-is-paratext-mean-in-the-api-)

```json
is_paratext: false 
```

### `concepts`

_List:_ List of abbreviated Concept objects. If you're using concepts, we recommend you read their full documentation on the Concepts page, but here's a quick summary:

* `id` (_String_): The OpenAlex ID for this concept.
* `wikidata` (_String_): The Wikidata URL for this concept.
* `display_name` (_String_): The name of the concept.
* `level` (_Integer_): This concept's level on the concept tree. Root concepts are Level 0 (eg: `Biology`). Level 1 concepts (eg: `Microbiology`) are children of level 0, and so forth.&#x20;
* `score` (_Float_): The strength of the connection between the work and this concept (higher is stronger).

```json
concepts: [
    {
    id: "https://openalex.org/C2778793908",
    wikidata: "https://www.wikidata.org/wiki/Q5122404",
    display_name: "Citation impact",
    level: 3,
    score: 0.459309
    },
    {
    id: "https://openalex.org/C2778805511",
    wikidata: "https://www.wikidata.org/wiki/Q1713",
    display_name: "Citation",
    level: 2,
    score: 0.447306
    }
]
```



### `mesh`

_List:_ List of [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) tag objects. Only works found in [PubMed](https://pubmed.ncbi.nlm.nih.gov) have MeSH tags; for all other works, this is an empty list.

```json
mesh: [
    {
        descriptor_ui: "D017712",
        descriptor_name: "Peer Review, Research",
        qualifier_ui: "Q000379",
        qualifier_name: "methods"
    },
    {
        descriptor_ui: "D017712",
        descriptor_name: "Peer Review, Research",
        qualifier_ui: "Q000592",
        qualifier_name: "standards"
    }
]
```

``

### `alternate_locations`

_List:_ List of objects describing other places you can find this work. If you're using concepts, we recommend you read their full documentation on the Concepts page, but here's a quick summary:

* `url` (_String_): Where you can find the article. This might go directly to a PDF, or to a landing page where you can get the PDF.
* `is_oa` (_Boolean_): `True` if you can read this work at this location without needing to pay or log in.
* `version` (_String_): @todo document the version field.
* `license` (_String_): The reuse license (if any) applied to the work at this location.&#x20;
* `venue_id` (_String_): The OpenAlex ID for the [Venue](../venue.md) that hosts this location.
* is\_best @todo are we keeping this or not?

@todo update this with objects that don't have these nulls

```json
concepts: [
    {
        url: "https://papyrus.bib.umontreal.ca/xmlui/bitstream/1866/23242/1/peerj-06-4375.pdf",
        is_oa: true,
        version: "submittedVersion",
        license: "cc-by",
        venue_id: null,
        is_best: null
    },
    {
        url: "https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1143&context=scholcom",
        is_oa: true,
        version: "submittedVersion",
        license: "cc-by",
        venue_id: null,
        is_best: null
    },

]
```

### `referenced_works`

_List:_ OpenAlex IDs for works that this work cites. These are citations that go _from_ this work out _to_ another work.

```json
referenced_works: [
    "https://openalex.org/W2753353163",
    "https://openalex.org/W2785823074",
    "https://openalex.org/W2511661767",
    "https://openalex.org/W2115339903",
    "https://openalex.org/W2031754690"
]
```

### `related_works`

_List:_ OpenAlex IDs for works related to this work. @todo how is relatedness assigned?

```json
related_works: [
    "https://openalex.org/W2753353163",
    "https://openalex.org/W2785823074",
    "https://openalex.org/W2511661767",
    "https://openalex.org/W2115339903",
    "https://openalex.org/W2031754690",
]
```

### `abstract_inverted_index`

_Object:_ The abstract of the work, as an [inverted index](https://en.wikipedia.org/wiki/Inverted\_index), which encodes information about the abstract's words and their positions within the text. [Like Microsoft Academic Graph](https://docs.microsoft.com/en-us/academic-services/graph/resources-faq#what-format-are-paper-abstracts-published-in), OpenAlex doesn't include plaintext abstracts due to legal constraints.

```json
abstract_inverted_index: {
    Despite: [
        0
    ],
    growing: [
        1
    ],
    interest: [
        2
    ],
    in: [
        3,
        57,
        73,
        110,
        122
    ],
    Open: [
        4,
        201
    ],
    Access: [
        5
    ],
    ...
}
```

