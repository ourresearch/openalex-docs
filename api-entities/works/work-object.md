# Work object

There's a lot of useful data inside a work. When you use the API to get a [single work](get-a-single-work.md) or [lists of works](get-lists-of-works.md), this is what's returned.

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

#### Abstract inverted index coverage

Newer works are more likely to have an abstract inverted index. For example, over 60% of works in 2022 have abstract data, compared to 45% for works older than 2000. Full chart is below:

![](<../../.gitbook/assets/OpenAlex works with abstracts by year (percent) (1).svg>)

### `alternate_host_venues` (deprecated)

_This field is being deprecated in favor of_ [_`locations`_](work-object.md#locations) _and will be removed March 6th, 2023._

_List:_ List of [`HostVenue`](work-object.md#the-hostvenue-object) objects describing places this work lives. They're called "alternate" because the list doesn't include the work's canonical location; that's in [`host_venue`](work-object.md#host\_venue).&#x20;

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

### `authorships`

_List:_ List of [`Authorship`](work-object.md#the-authorship-object) objects, each representing an author and their institution. [Limited to](../authors/limitations.md) the first 100 authors to maintain API performance.

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

### `best_oa_location`

_Object:_ A [`Location`](work-object.md#the-location-object) object with the best available open access location for this work.

We score open locations to determine which is best using these factors:

1. Must have is\_oa: true
2. type_:_ "publisher" is better than "repository".
3. version: "publishedVersion" is better than "acceptedVersion", which is better than "submittedVersion".
4. pdf\_url: A location with a direct PDF link is better than one without.
5. repository rankings: Some major repositories like PubMed Central and arXiv are ranked above others.

```json
best_oa_location: {
  is_oa: true,
  landing_page_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1398957",
  pdf_url: null,
  source: {
    id: "https://openalex.org/S2764455111",
    display_name: "PubMed Central",
    issn_l: null,
    issn: null,
    host_organization: "https://openalex.org/I1299303238",
    type: "repository"
  },
  license: null,
  version: "publishedVersion"
}
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

### `cited_by_api_url`

_String:_ A URL that uses the [`cites`](filter-works.md#cites) filter to display a list of works that cite this work. This is a way to expand [`cited_by_count`](work-object.md#cited\_by\_count) into an actual list of works.

### `cited_by_count`

_Integer:_ The number of citations to this work. These are the times that other works have cited this work: Other works ➞ This work.

```json
cited_by_count: 382
```

### `concepts`

_List:_ List of dehydrated [`Concept` objects](../concepts/concept-object.md).&#x20;

Each `Concept` object in the list also has one additional property:

* `score` (_Float_): The strength of the connection between the work and this concept (higher is stronger). This number is produced by AWS Sagemaker, in the last layer of the [machine learning model](https://github.com/ourresearch/openalex-concept-tagging) that assigns concepts.

Concepts with a score of at least 0.3 are assigned to the work. However, ancestors of an assigned concept are also added to the work, even if the ancestor scores are below 0.3.

{% hint style="info" %}
Because all ancestor concepts are assigned to the work, you may see concepts in works with very low scores, even some zero scores.
{% endhint %}

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

### `counts_by_year`

_List:_ [`Works.cited_by_count`](work-object.md#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many times this work was cited.&#x20;

Any citations older than ten years old aren't included. Years with zero citations have been removed so you will need to add those in if you need them.

```json
counts_by_year: [
    {
        year: 2022,
        cited_by_count: 8
    },
    {
        year: 2021,
        cited_by_count: 252
    },
    ...
    {
        year: 2012,
        cited_by_count: 79
    }
]
```

### `created_date`

_String:_ The date this `Work` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.&#x20;

```json
created_date: "2017-08-08"
```

### `display_name`

_String:_ Exactly the same as [`Work.title`](work-object.md#title-1). It's useful for `Work`s to include a `display_name` property, since all the other entities have one.

```json
display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `doi` <a href="#title" id="title"></a>

_String:_ The DOI for the work. This is the [Canonical External ID](../../how-to-use-the-api/get-single-entities/#canonical-external-ids) for works.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on [bioRxiv](https://www.biorxiv.org/), and another DOI for the [published version](work-object.md#version). However, this field always has just one DOI, the DOI for the published work. If you want DOIs for other versions, you can find them in the [`Work.alternate_host_venues`](work-object.md#alternate\_host\_venues) list.&#x20;

```json
doi: "https://doi.org/10.7717/peerj.4375"
```

### `host_venue` (deprecated)

_This field is being deprecated in favor of_ [_`primary_location`_](work-object.md#primary\_location) _and will be removed March 6th, 2023._

_Object:_ A [`HostVenue`](work-object.md#the-hostvenue-object) object describing how and where this work is being hosted online.

The `host_venue` is where you can find the best (closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record)) copy of this work. For a peer-reviewed journal article, the best `host_venue` would be a full text published version, hosted by the publisher at the article's DOI URL.

{% hint style="info" %}
Some records don't have a `host_venue`, because they were inherited from [MAG](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/), which implemented a less complete provenance chain. We're gradually filling in these missing host venues.
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

### `id`

_String:_ The [OpenAlex ID](../../how-to-use-the-api/get-single-entities/#the-openalex-id) for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `ids`

_Object:_ All the external identifiers that we know about for this work. IDs are expressed as URIs whenever possible. Possible ID types:

* `doi` (_String:_ The [DOI](https://en.wikipedia.org/wiki/Digital\_object\_identifier). Same as [`Work.doi`](work-object.md#title))
* `mag`  (_Integer:_ the [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `openalex` (_String:_ The [OpenAlex ID](broken-reference). Same as [`Work.id`](work-object.md#id))
* `pmid` (_String:_ The [Pubmed Identifier](https://en.wikipedia.org/wiki/PubMed#PubMed\_identifier))
* `pmcid` (_String_: the [Pubmed Central identifier](https://www.ncbi.nlm.nih.gov/pmc/about/public-access-info/))

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

### `is_retracted`

_Boolean:_ True if we know this work has been retracted.&#x20;

This field has high precision but low recall. In other words, if `is_retracted` is  `true`, the article is definitely retracted. But if `is_retracted` is `False`,  it still might be retracted, but we just don't know. This is because unfortunately, the [open sources for retraction data](https://www.crossref.org/blog/encouraging-even-greater-reporting-of-corrections-and-retractions/) aren't currently very comprehensive, and [the more comprehensive ones](https://retractionwatch.com/) aren't sufficiently open for us to use here.

```json
is_retracted: false 
```

### `locations`

_List:_ A list of [`Location`](work-object.md#the-location-object) objects describing all unique places where this work lives.

```json
locations: [ 
  {
    is_oa: true,
    landing_page_url: "https://doi.org/10.1073/pnas.17.6.401",
    pdf_url: "http://www.pnas.org/content/17/6/401.full.pdf",
    source: {
      id: "https://openalex.org/S125754415",
      display_name: "Proceedings of the National Academy of Sciences of the United States of America",
      issn_l: "0027-8424",
      issn: ["1091-6490", "0027-8424"],
      host_organization: "https://openalex.org/P4310320052",
      type: "journal"
    },
    license: null,
    version: "publishedVersion"
  },
  {
    is_oa: true,
    landing_page_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1076072",
    pdf_url: null,
    source: {
      id: "https://openalex.org/S2764455111",
      display_name: "PubMed Central",
      issn_l: null,
      issn: null,
      host_organization: "https://openalex.org/I1299303238",
      type: "repository"
    },
    license: null,
    version: "publishedVersion"
  }
]
```

### `mesh`

_List:_ List of [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) tag objects. Only works found in [PubMed](https://pubmed.ncbi.nlm.nih.gov/) have MeSH tags; for all other works, this is an empty list.

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

### `ngrams_url`

{% hint style="info" %}
`ngrams_url` is only displayed in the API and is not included in the [OpenAlex snapshot](../../download-all-data/openalex-snapshot.md).
{% endhint %}

_String:_ It lists groups of words and phrases (n-grams) that make up a work, as obtained from the [Internet Archive](https://archive.org/details/GeneralIndex). See [The Ngram object](work-object.md#the-ngram-object) and [Get N-grams](get-n-grams.md) for background on n-grams, how we use them, and what this API call returns.

```json
ngrams_url: "https://api.openalex.org/works/W2023271753/ngrams"
```

### `open_access`

_Object:_ Information about the access status of this work, as an [`OpenAccess`](work-object.md#the-openaccess-object) object.

```json
open_access: {
    is_oa: true,
    oa_status: "gold",
    oa_url: "https://peerj.com/articles/4375.pdf"
},
```

### `primary_location`

_Object:_ A [`Location`](work-object.md#the-location-object) object with the primary location of this work.

The `primary_location` is where you can find the best (closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record)) copy of this work. For a peer-reviewed journal article, this would be a full text published version, hosted by the publisher at the article's DOI URL.

```json
primary_location: {
  is_oa: true,
  landing_page_url: "https://doi.org/10.1073/pnas.17.6.401",
  pdf_url: "http://www.pnas.org/content/17/6/401.full.pdf",
  source: {
    id: "https://openalex.org/S125754415",
    display_name: "Proceedings of the National Academy of Sciences of the United States of America",
    issn_l: "0027-8424",
    issn: ["1091-6490", "0027-8424"],
    host_organization: "https://openalex.org/P4310320052",
    type: "journal"
  },
  license: null,
  version: "publishedVersion"
}
```

### `publication_date`

_String:_ The day when this work was published, formatted as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date.

Where different publication dates exist, we select the earliest available date of electronic publication.&#x20;

This date applies to the version found at [`Work.url`](work-object.md#url). The other versions, found in [`Work.alternate_host_venues`](work-object.md#alternate\_host\_venues), may have been published at different (earlier) dates.&#x20;

```json
publication_date: "2018-02-13"
```

### `publication_year`

_Integer:_ The year this work was published.

This year applies to the version found at [`Work.url`](work-object.md#url). The other versions, found in [`Work.alternate_host_venues`](work-object.md#alternate\_host\_venues), may have been published in different (earlier) years.&#x20;

```json
publication_year: 2018
```

### `referenced_works`

_List:_ [OpenAlex IDs](../../how-to-use-the-api/get-single-entities/#the-openalex-id) for works that this work cites. These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.&#x20;

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

_List:_ [OpenAlex IDs](../../how-to-use-the-api/get-single-entities/#the-openalex-id) for works related to this work. Related works are computed algorithmically; the algorithm finds recent papers with the most concepts in common with the current paper.

```json
related_works: [
    "https://openalex.org/W2753353163",
    "https://openalex.org/W2785823074",
    "https://openalex.org/W2511661767",
    "https://openalex.org/W2115339903",
    "https://openalex.org/W2031754690",
]
```

### `title`

_String:_ The title of this work.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `type`

_String:_ The type or genre of the work.&#x20;

This field uses Crossref's "type" controlled vocabulary; you can see all possible values via the Crossref api here: [https://api.crossref.org/types](https://api.crossref.org/types).&#x20;

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves. Unfortunately the accuracy of Crossref's data for this isn't great, and ours isn't much better. We're working to develop better type classification.

```json
type: "journal-article"
```

### `updated_date`

_String:_ The last time anything in this `Work` object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2022-01-02T00:22:35.180390"
```

## The `Authorship` object

The Authorship object represents a single author and her institutional affiliations in the context of a given work. It is only found as part of a `Work` object.

### `author`

_String:_ An author of this work, as a dehydrated [`Author`](../authors/author-object.md) object.

```json
author: {
    id: "https://openalex.org/A2790141563",
    display_name: "Juan Pablo Alperin",
    orcid: "https://orcid.org/0000-0002-9344-7439"
}
```

### `author_position`

_String:_ A summarized description of this author's position in the work's author list. Possible values are `first`, `middle`, and `last`.&#x20;

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some contexts to have this as a categorical value.

```json
author_position: "first"
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

_String:_ This author's affiliation as it originally came to us (on a webpage or in an API), as a raw unformatted string. Multiple affiliations are separated by a semicolon.

```json
raw_affiliation_string: "Canadian Institute for Studies in Publishing, Simon Fraser University, Vancouver, BC, Canada."
```

## The `HostVenue` object (deprecated)

_The HostVenue object is being deprecated in favor of the_ [_`Location object`_](work-object.md#the-location-object) _and will be removed on March 6th, 2023._

The HostVenue object describes a given work hosted on a given venue (you can think of it as a WorkVenue bridging table). It's only found as part of the `Work` object. It's got two parts:

1. a dehydrated Venue object, and
2. some extra stuff about the work.

The extra stuff is important because a given work can be hosted in different ways and in different forms, depending on where it's living.&#x20;

To learn more about the dehydrated Venue object part, see the [DehydratedVenue](../venues/venue-object.md#the-dehydratedvenue-object) docs. To learn more about the other stuff, read below:

### `is_oa`

_Boolean:_ Set to `true` if the work hosted here can be read for free, without registration.

```json
is_oa: true
```

### `license`

_String:_ The license applied to this work at this host.  Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

```json
license: "cc-by"
```

### `url`

_String:_ The URL where you can access this work.

```json
id: "https://doi.org/10.7717/peerj.4375"
```

### `version`

_String:_ The version of the work, based on the [DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings) Possible values are:.

* `publishedVersion`: The document’s version of record. This is the most authoritative version.
* `acceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `publishedVersion`.
* `submittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. Its content may differ significantly from that of the accepted article.

```json
version: "publishedVersion"
```

## The `Location` object

The `Location` object describes the location of a given work. It's only found as part of the `Work` object. It's got two parts:

1. a dehydrated Source object, and
2. some extra stuff about the work.

The extra stuff is important because a given work can be hosted in different ways and in different forms, depending on where it's living.&#x20;

To learn more about the dehydrated Source object part, see the [DehydratedSource](../venues/venue-object.md#the-dehydratedsource-object) docs. To learn more about the other stuff, read below:

### `is_oa`

_Boolean:_ `True` if this work is Open Access (OA).&#x20;

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in.

```json
is_oa: true
```

### landing\_page\_url

_String:_ The landing page URL for this location.&#x20;

```json
landing_page_url: "https://doi.org/10.1590/s1678-77572010000100010"
```

### license

_String:_ The location's publishing license. This can be a [Create Commons](https://creativecommons.org/about/cclicenses/) license such as cc0 or cc-by, a publisher-specific license, or null which means we are not able to determine a license for this location.&#x20;

```json
license: "cc-by"
```

### pdf\_url

_String:_ A URL where you can find this location as a PDF.&#x20;

```json
pdf_url: "http://www.scielo.br/pdf/jaos/v18n1/a10v18n1.pdf"
```

### version

_String:_ The version of the work, based on the [DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings) Possible values are:.

* `publishedVersion`: The document’s version of record. This is the most authoritative version.
* `acceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `publishedVersion`.
* `submittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. Its content may differ significantly from that of the accepted article.

```json
version: "publishedVersion"
```

## The `Ngram` object

{% hint style="info" %}
Ngram objects are only available in the API and are not included in the [OpenAlex snapshot](../../download-all-data/openalex-snapshot.md).
{% endhint %}

### ngram

_String:_ Group of words (or numbers, letters, etc) that exist together in the work. This can be a five-gram, four-gram, trigram, bigram, or unigram.

```json
ngram: "energy formula into a functional"
```

### ngram\_count

_Integer:_  How many times this ngram occurred in the work.

```json
ngram_count: 1
```

### ngram\_tokens

_Integer:_  How many tokens are in the ngram.

```json
ngram_tokens: 5
```

### token\_frequency

_Float:_  How often the ngram occurred in the work.&#x20;

**Caution:** This data was taken directly from the General Index and we've not tested `term_frequency` against actual articles. You can read about their data extraction process on the [Internet Archive](https://archive.org/details/GeneralIndex) website. If you compare `term_frequency` against articles we would [like to hear](mailto:support@openalex.org) how it went!

```json
term_frequency: 0.0005452562704471102
```

## The `OpenAccess` object

The `OpenAccess` object describes access options for a given work. It's only found as part of the `Work` object.

### `is_oa`

_Boolean:_ `True` if this work is Open Access (OA).&#x20;

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in. You can use the [`alternate_host_venues`](work-object.md#alternate\_host\_venues) and [`oa_status`](work-object.md#oa\_status) fields to narrow your results further, accommodating any definition of OA you like.

```json
is_oa: true
```

### `oa_status`

_String:_ The Open Access (OA) status of this work. Possible values are:

* **`gold`**: Published in an OA journal that is indexed by the [DOAJ](https://doaj.org/).
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
