# 📄 Work

Works are the outputs produced by scholarship. The include not just journal articles, but also books, datasets, theses, and even figures or images.

Works are the core building block of OpenAlex, adn all the other entities are defined in relationship to works. Because of this, works are also the most complicated entity, with lots of links to other things.

It also has three component objects, which are only used as part of a work:&#x20;

* [Authorship](work.md#the-authorship-object)
* [HostVenue](work.md#the-hostvenue-object)
* [OpenAccess](work.md#the-openaccess-object)

The examples in this page are all drawn from this work: [https://openalex.org/W2741809807](https://openalex.org/W2741809807) (tip: if you want to see this or any other OpenAlex entity in the API, just add a ".json" to the end)



## The `Work` object

### `id`

_String:_ The OpenAlex ID for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `doi` <a href="#title" id="title"></a>

_String:_ The DOI for the work.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on bioRxiv, and another DOI for the published version. However, this field always has just one DOI, the DOI for the published work. If you want DOIs for other versions, you can find them in the [`alternate_host_venues`](work.md#alternate\_host\_venues) list.&#x20;

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
display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

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

* `openalex` (_String_; The OpenAlex ID, which is also found at [`Work.id`](work.md#id))
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

_Object:_ A [`HostVenue`](work.md#the-hostvenue-object) object describing how and where this work is being hosted online.

```json
host_venue: {
    // this top stuff is the same as a dehydreated Venue object
    id: "https://openalex.org/V1983995261",
    issn_l: "2167-8359",
    issn: [
        "2167-8359"
    ],
    display_name: "PeerJ",
    publisher: "PeerJ",
    type: "journal",
    
    // this stuff is extra, and relates this work at this venue.
    url: "https://doi.org/10.7717/peerj.4375",
    is_oa: null,
    version: null,
    license: null
}
```



### `type`

_String:_ The type or genre of the work.&#x20;

This field uses Crossref's "type" controlled vocabulary; you can see all possible values via the Crossref api here: [https://api.crossref.org/types](https://api.crossref.org/types).&#x20;

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves. Unfortunately the accuracy of Crossref's data for this isn't great, and ours isn't better. We're working to develop better type classification.

```json
type: "journal-article"
```

### `open_access`

_Object:_ Information about the access status of this work, as an [`OpenAccess`](work.md#the-openaccess-object) object.

```json
open_access: {
    is_oa: true,
    oa_status: "gold",
    oa_url: "https://peerj.com/articles/4375.pdf"
},
```

### `authorships`

_List:_ List of [`Authorship`](work.md#the-authorship-object) objects, each representing an author and their institution.&#x20;

```json
authorships: [
    // first authorship object:
    {
        author_position: "first",
        author: {
            id: "https://openalex.org/A1969205032",
            display_name: "Heather A. Piwowar",
            orcid: "https://orcid.org/0000-0003-1613-5981"
        },
        institutions: [
            {
                id: null,
                display_name: "Impactstory, Sanford, NC, USA",
                ror: null,
                country_code: null,
                type: null
            }
        ]
    },
    
    // more authorship objects go here, omited for space.
]
```



### `cited_by_count`

_Integer:_ The number of citations to this work. These are the times that other works have cited this work: Other works ➞ This work.

```json
cited_by_count: 367
```

### `biblio`

_Object:_ Old-fashioned bibliographic info for this work. This is mostly useful only in citation/reference contexts. These are all strings because sometimes you'll get fun values like "Spring" and "Inside cover."

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

This field has high precision but low recall. In other words, if `is_retracted` is  `true`, the article is definitely retracted. But if `is_retracted` is `False`,  it still might be retracted, but we just don't know. This is because unfortunately, the [open sources for retraction data](https://www.crossref.org/blog/encouraging-even-greater-reporting-of-corrections-and-retractions/) aren't currently very comprehensive, and [the more comprehensive ones](https://retractionwatch.com) aren't sufficiently open for us to use here.

```json
is_retracted: false 
```



### `is_paratext`

_Boolean:_ True if we think this work is [paratext](https://en.wikipedia.org/wiki/Paratext).&#x20;

In our context, paratext is stuff that's in scholarly venue (like a journal) but is _about the venue_ rather than a scholarly work properly speaking.  Some examples:

* **paratext**: front cover, back cover, table of contents, editorial board listing, issue information,  masthead.
* **not paratext**: research paper, dataset, lettersto the editor, figure.

Turns out there is a lot of paratext in registries like Crossref. That's not a bad thing...but we've found that it's good to have a way to filter it out.

We determine `is_paratext` algorithmically using title heuristics.&#x20;

```json
is_paratext: false 
```

### `concepts`

_List:_ List of `dehydratedConcept` dehydrated [Concept objects](concept.md).&#x20;

Each Concept object in the list also has one additional property:

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

### `alternate_host_venues`

_List:_ List of [`HostVenue`](work.md#the-hostvenue-object) objects describing places this work lives. The primary hosting venue isn't included; it's at [`host_venue`](work.md#host\_venue).&#x20;

{% hint style="danger" %}
**Known Issue**: Some venues in this list are missing the `id` field! This should be fixed by February 2022.
{% endhint %}

```json
alternate_host_venues: [
    {
        id: null,
        display_name: null,
        type: "repository",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5815332",
        is_oa: true,
        version: "publishedVersion",
        license: null
    },
    {
        id: null,
        display_name: "Simon Fraser University - Summit",
        type: "repository",
        url: "http://summit.sfu.ca/system/files/iritems1/17691/peerj-4375.pdf",
        is_oa: true,
        version: "submittedVersion",
        license: "cc-by"
    },
    // others omitted for brevity. 

]
```

### `referenced_works`

_List:_ OpenAlex IDs for works that this work cites. These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.&#x20;

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

_List:_ OpenAlex IDs for works related to this work.&#x20;

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









## The `Authorship` object

The Authorship object represents a single author and her institutional affiliations in the context of a given work. It is only found as part of a `Work` object.

### `author_position`

_String:_ A summarized description of this author's position in the work's author list. Possible values are `first`, `middle`, and `last`.&#x20;

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some applications to have this as a categorical value.

```json
id: "https://openalex.org/W2741809807"
```



### `author`

_String:_ An author of this work, as a dehydrated Author object.

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some applications to have this as a categorical value.

```json
author: {
    id: "https://openalex.org/A2790141563",
    display_name: "Juan Pablo Alperin",
    orcid: "https://orcid.org/0000-0002-9344-7439"
}
```



### `institutions`

_List:_ The institutional affiliations this author claimed in the context of this work, as dehydrated `Institution` objects.

```json
institutions: [
    {
        id: "https://openalex.org/I18014758",
        display_name: "Simon Fraser University",
        ror: "https://ror.org/0213rcc28",
        country_code: "CA",
        type: "education"
    },
    {
        id: "https://openalex.org/I209863525",
        display_name: "Public Knowledge Project",
        ror: null,
        country_code: null,
        type: null
    }
]
```

##

## The `HostVenue` object

The HostVenue object describes a given work hosted on a given venue (you can think of it as a WorkVenue bridging table). It's only found as part of the `Work` object. It's got two parts:

1. a dehydrated Venue object, and
2. some extra stuff about the work.

The extra stuff is important because a given work can be hosted in different ways and in different forms, depending on where it's living.&#x20;

To learn more about the dehydrated Venue object part, see the dehydrated Venue docs. To learn more about the other stuff, read below:

### `url`

_String:_ The URL where you can access this work.

```json
id: "https://openalex.org/W2741809807"
```

### `is_oa`

_Boolean:_ Set to `true` if the work hosted here can be read for free, without registration.

```json
id: "https://openalex.org/W2741809807"
```

### `version`

_String:_ The version of the work, based on the [DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings) Possible values are:.

* `PublishedVersion`: The document’s version of record. This is the most authoritative version.
* `AcceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `PublishedVersion`.
* `SubmittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. It's content may differ significantly from that of the accepted article.

```json
id: "https://openalex.org/W2741809807"
```

### `license`

_String:_ The license applied to this work at this host.  Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

```json
id: "https://openalex.org/W2741809807"
```





## The `OpenAccess` object

The `OpenAccess` object describes access options for a given work. It's only found as part of the `Work` object.

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

### `oa_url`

_String:_ The best Open Access (OA) URL for this work.&#x20;

Although there are [many ways to define OA](https://peerj.com/articles/4375/#literature-review), in this context an OA URL is one where you can read the fulltext of this work without needing to pay money or log in. The "best" such URL is the one closest to the version of record.&#x20;

This URL might be a direct link to a PDF, or it might be to a landing page that links to the free PDF

```json
oa_url: "https://peerj.com/articles/4375.pdf"
```

###

