# 📄 Work

Works are scholarly documents like journal articles, books, datasets, and theses.

OpenAlex indexes about 209M works, with about 50,000 added daily. The canonical PID for works is DOI; about half of works have one.

We collect new works from many sources, including Crossref, PubMed, institutional and discipline-specific repositories (eg, arXiv). Many older works come from the now-defunct Microsoft Academic Graph.

The same work can be hosted in multiple venues, often with slight differences. So, we cluster works together, using an algorithm that does fuzzy matching based on each work’s publication date, title, and author list. For example: https://doi.org/10.1364/PRJ.433188 and https://arxiv.org/abs/2102.11388 are two versions of the same paper, so they appear in OpenAlex as one Work, https://openalex.org/W3184470535.

Works are linked to other works via the [`referenced_works`](work.md#referenced\_works) (outgoing citations), [`cited_by_api_url`](work.md#cited\_by\_api\_url) (incoming citations), and [`related_works`](work.md#related\_works) properties.

There are three component objects that are only used as part of a `Work`:&#x20;

* [`Authorship`](work.md#the-authorship-object)``
* ``[`HostVenue`](work.md#the-hostvenue-object)``
* ``[`OpenAccess`](work.md#the-openaccess-object)``

{% hint style="info" %}
Most of the examples below are drawn from a single work. You can view this work in its entirety via the [website](https://openalex.org/W2741809807) or [API](https://openalex.org/W2741809807.json).
{% endhint %}



## The `Work` object

### `id`

_String:_ The [OpenAlex ID](./#the-openalex-id) for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `doi` <a href="#title" id="title"></a>

_String:_ The DOI for the work. This is the [Canonical External ID](./#canonical-external-ids) for works.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on [bioRxiv](https://www.biorxiv.org), and another DOI for the [published version](work.md#version). However, this field always has just one DOI, the DOI for the published work. If you want DOIs for other versions, you can find them in the [`Work.alternate_host_venues`](work.md#alternate\_host\_venues) list.&#x20;

```json
doi: "https://doi.org/10.7717/peerj.4375"
```

### `title`

_String:_ The title of this work.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `display_name`

_String:_ Exactly the same as [`Work.title`](work.md#title-1). It's useful for `Work`s to include a `display_name` property, since all the other entities have one.

```json
display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `publication_year`

_Integer:_ The year this work was published.

This year applies to the version found at [`Work.url`](work.md#url). The other versions, found in [`Work.alternate_host_venues`](work.md#alternate\_host\_venues), may have been published in different (earlier) years.&#x20;

```json
publication_year: 2018
```

### `publication_date`

_String:_ The day when this work was published, formatted as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date.

Where different publication dates exist, we select the earliest available date of electronic publication.&#x20;

This date applies to the version found at [`Work.url`](work.md#url). The other versions, found in [`Work.alternate_host_venues`](work.md#alternate\_host\_venues), may have been published at different (earlier) dates.&#x20;

```json
publication_date: "2018-02-13"
```

### `ids`

_Object:_ All the external identifiers that we know about for this work. IDs are expressed as URIs whenever possible. Possible ID types:

* `openalex` (_String:_ The [OpenAlex ID](./#the-openalex-id). Same as [`Work.id`](work.md#id))
* `doi` (_String:_ The [DOI](https://en.wikipedia.org/wiki/Digital\_object\_identifier). Same as [`Work.doi`](work.md#title))
* `mag`  (_Integer:_ the [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `pmid` (_String:_ The [Pubmed Identifier](https://en.wikipedia.org/wiki/PubMed#PubMed\_identifier))
* `pmcid` (_String_: the [Pubmed Central identifier](https://www.ncbi.nlm.nih.gov/pmc/about/public-access-info/#:\~:text=The%20PMCID%20is%20a%20unique,in%20both%20PMC%20and%20PubMed.))

{% hint style="info" %}
Most works are missing one or more ID types (either because we don't know the ID, or because it was never assigned). Keys for `null` IDs are not displayed.
{% endhint %}

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

{% hint style="info" %}
The `host_venue` is important because it describes where you can find the "best" (closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record)) copy of this work.

However, some records don't have a `host_venue`, because they were inherited from [MAG](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/), which implemented a less complete provenance chain. We're gradually filling in these missing host venues.
{% endhint %}

```json
host_venue: {
    // this top stuff is the same as a dehydrated Venue object
    id: "https://openalex.org/V1983995261",
    issn_l: "2167-8359",
    issn: [
        "2167-8359"
    ],
    display_name: "PeerJ",
    publisher: "PeerJ",
    type: "journal",
    
    // this stuff is extra, and relates to this work at this venue
    url: "https://doi.org/10.7717/peerj.4375",
    is_oa: null,
    version: null,
    license: null
}
```



### `type`

_String:_ The type or genre of the work.&#x20;

This field uses Crossref's "type" controlled vocabulary; you can see all possible values via the Crossref api here: [https://api.crossref.org/types](https://api.crossref.org/types).&#x20;

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves. Unfortunately the accuracy of Crossref's data for this isn't great, and ours isn't much better. We're working to develop better type classification.

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
                id: "https://openalex.org/I4200000001",
                display_name: "OurResearch",
                ror: "https://ror.org/02nr0ka47",
                country_code: "US",
                type: "nonprofit"
            }
        ]
    },
    
    // more authorship objects go here, omited for space.
]
```



### `cited_by_count`

_Integer:_ The number of citations to this work. These are the times that other works have cited this work: Other works ➞ This work.

```json
cited_by_count: 382
```

### `biblio`

_Object:_ Old-timey bibliographic info for this work. This is mostly useful only in citation/reference contexts. These are all strings because sometimes you'll get fun values like "Spring" and "Inside cover."

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

In our context, paratext is stuff that's in scholarly venue (like a journal) but is _about the venue_ rather than a scholarly work properly speaking.  Some examples and nonexamples:

* **yep it's paratext**: front cover, back cover, table of contents, editorial board listing, issue information,  masthead.
* **no,  not paratext**: research paper, dataset, letters to the editor, figures

Turns out there is a lot of paratext in registries like Crossref. That's not a bad thing... but we've found that it's good to have a way to filter it out.

We determine `is_paratext` algorithmically using title heuristics.&#x20;

```json
is_paratext: false 
```

### `concepts`

_List:_ List of dehydrated [`Concept` objects](concept.md).&#x20;

Each `Concept` object in the list also has one additional property:

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
        qualifier_name: "methods",
        is_major_topic: false
    },
    {
        descriptor_ui: "D017712",
        descriptor_name: "Peer Review, Research",
        qualifier_ui: "Q000592",
        qualifier_name: "standards",
        is_major_topic: true
    }
]
```

``

### `alternate_host_venues`

_List:_ List of [`HostVenue`](work.md#the-hostvenue-object) objects describing places this work lives. This work's _primary_ hosting venue isn't in this list; it's at [`host_venue`](work.md#host\_venue).&#x20;

{% hint style="danger" %}
**Known Issue**: Some venues in this list are missing the `id` field! This should be fixed by February 2022.
{% endhint %}

```json
alternate_host_venues: [
    {
        id: null,
        display_name: "Europe PMC",
        type: "repository",
        url: "http://europepmc.org/articles/pmc5815332?pdf=render",
        is_oa: true,
        version: "publishedVersion",
        license: "cc-by"
    },
    {
        id: null,
        display_name: "Simon Fraser University - Summit",
        type: "repository",
        url: "https://summit.sfu.ca/item/17691",
        is_oa: true,
        version: "submittedVersion",
        license: "cc-by"
    },
    // others omitted for brevity. 

]
```

### `referenced_works`

_List:_ [OpenAlex IDs](./#the-openalex-id) for works that this work cites. These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.&#x20;

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

_List:_ [OpenAlex IDs](./#the-openalex-id) for works related to this work. Related works are computed algorithmically; the algorithm finds recent papers with the most concepts in common with the current paper.

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

### `cited_by_api_url`

{% hint style="warning" %}
TODO: documentation coming soon!
{% endhint %}

### `counts_by_year`

{% hint style="warning" %}
TODO: documentation coming soon!
{% endhint %}

### `updated_date`

_String:_ The last time anything in this `Work` object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2022-01-02T00:22:35.180390"
```

### `created_date`

_String:_ The date this `Work` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.&#x20;

```json
created_date: "2017-08-08"
```

## The `Authorship` object

The Authorship object represents a single author and her institutional affiliations in the context of a given work. It is only found as part of a `Work` object.

### `author_position`

_String:_ A summarized description of this author's position in the work's author list. Possible values are `first`, `middle`, and `last`.&#x20;

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some contexts to have this as a categorical value.

```json
author_position: "first"
```

### `author`

_String:_ An author of this work, as a dehydrated [`Author`](author.md) object.

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

### `raw_affiliation_string`

_String:_ This author's affiliation as it originally came to us (on a webpage or in an API), as a raw unformatted string.&#x20;

```json
raw_affiliation_string: "Canadian Institute for Studies in Publishing, Simon Fraser University, Vancouver, BC, Canada."
```

``

## The `HostVenue` object

The HostVenue object describes a given work hosted on a given venue (you can think of it as a WorkVenue bridging table). It's only found as part of the `Work` object. It's got two parts:

1. a dehydrated Venue object, and
2. some extra stuff about the work.

The extra stuff is important because a given work can be hosted in different ways and in different forms, depending on where it's living.&#x20;

To learn more about the dehydrated Venue object part, see the [DehydratedVenue](venue.md#the-dehydratedvenue-object) docs. To learn more about the other stuff, read below:

### `url`

_String:_ The URL where you can access this work.

```json
id: "https://doi.org/10.7717/peerj.4375"
```

### `is_oa`

_Boolean:_ Set to `true` if the work hosted here can be read for free, without registration.

```json
is_oa: true
```

### `version`

_String:_ The version of the work, based on the [DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings) Possible values are:.

* `publishedVersion`: The document’s version of record. This is the most authoritative version.
* `acceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `publishedVersion`.
* `submittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. Its content may differ significantly from that of the accepted article.

```json
version: "publishedVersion"
```

### `license`

_String:_ The license applied to this work at this host.  Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

```json
license: "cc-by"
```





## The `OpenAccess` object

The `OpenAccess` object describes access options for a given work. It's only found as part of the `Work` object.

### `is_oa`

_Boolean:_ `True` if this work is Open Access (OA).&#x20;

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in. You can use the [`alternate_host_venues`](work.md#alternate\_host\_venues) and [`oa_status`](work.md#oa\_status) fields to narrow your results further, accommodating any definition of OA you like.

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

