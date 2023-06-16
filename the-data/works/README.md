---
description: Journal articles, books, datasets, and theses
---

# 📄 Works

## 📄 Works

Works are scholarly documents like journal articles, books, datasets, and theses. 

OpenAlex indexes over 240M works, with about 50,000 added daily. You can access a work in the OpenAlex API like this:

* Get the work with the DOI `https://doi.org/10.7717/peerj.4375` [`https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375`](https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375)

That will return a [`Work`](work-object/) object, describing everything OpenAlex knows about the work with that ID. We collect new works from many sources, including Crossref, PubMed, institutional and discipline-specific repositories (eg, arXiv). Many older works come from the now-defunct Microsoft Academic Graph.

Works are linked to other works via the [`referenced_works`](work-object/#referenced\_works) (outgoing citations), [`cited_by_api_url`](work-object/#cited\_by\_api\_url) (incoming citations), and [`related_works`](work-object/#related\_works) properties.

\{% @test-integration/test-integration url="https://alpha.openalex.org/works?filter=ids.openalex:W4229010617\&page=1" %\}

{% @test-integration/test-integration url="https://alpha.openalex.org/works?filter=ids.openalex:W4229010617&page=1" %}

## Work attributes

### `abstract_inverted_index`

The abstract of the work, as an inverted index.

The [inverted index](https://en.wikipedia.org/wiki/Inverted\_index) encodes information about the abstract's words and their positions within the text. [Like Microsoft Academic Graph](https://docs.microsoft.com/en-us/academic-services/graph/resources-faq#what-format-are-paper-abstracts-published-in), OpenAlex doesn't include plaintext abstracts due to legal constraints.

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

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](./#primary\_location) and [`locations`](./#locations). `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

### `authorships`

List of authorships for this work, each representing an author and their institution(s).

[Limited to](../../authors/limitations.md) the first 100 authors to maintain API performance.

See [`Authorship`](authorship-object.md) for more information. 

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

### `apc_list`

The list-price APC (article processing charge) for this work.

Taken from the [DOAJ](https://doaj.org/).

The properties of the APC object are:

+ `value`: _Integer_
+ `currency`: _String_
+ `provenance`: _String_ — either `openapc` or `doaj`, see below
+ `value_usd`: _Integer_ — the APC converted into USD

DOAJ APC prices apply to the entire journal. In some cases, we have more specific information about how much was actually paid. See [`apc_paid`](#apc_paid) for more.

```json
apc_payment: {
    value: 3200,
    currency: "USD",
    value_usd: 3200,
    provenance: "doaj"
}
```

### `apc_paid`

The paid APC (article processing charge) for this work.

The properties of the APC object are:

+ `value`: _Integer_
+ `currency`: _String_
+ `provenance`: _String_ — either `openapc` or `doaj`, see below
+ `value_usd`: _Integer_ — the APC converted into USD

This will always be the same as [`apc_list`](#apc_list) _except_ for when we have data from [OpenAPC](https://openapc.net/), in which case the `apc_list` will reflect the journal list-price from DOAJ, and the `apc_paid` will reflect the price paid as reported in OpenAPC.

```json
apc_payment: {
    value: 2250,
    currency: "EUR",
    value_usd: 2426,
    provenance: "openapc"
}
```
### `best_oa_location`

The best available open access location for this work.

We score open [`Locations`](location-object.md) to determine which is best using these factors:

1. Must have is\_oa: true
2. type\_:\_ "publisher" is better than "repository".
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

Old-timey bibliographic info for this work. 

This is mostly useful only in citation/reference contexts. These are all strings because sometimes you'll get fun values like "Spring" and "Inside cover."

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

A URL that returns a list of works that cite this work.

### `cited_by_count`

The number of citations to this work. 

These are the times that other works have cited this work: Other works ➞ This work.

```json
cited_by_count: 382
```

### `concepts`

The concepts associated with this work.

Each item in the is a dehydrated [`Concept` objects](../../concepts/concept-object.md), with one additional property:

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

### `corresponding_author_ids`

The corresponding authors for this work.

This is a list of the [OpenAlex IDs](../../the-api/get-single-entities/#the-openalex-id) of any authors for which [authorships.is\_corresponding](authorship-object.md#is\_corresponding) is `true`.

```json
corresponding_author_ids: ["https://openalex.org/A2109306456"]
```

### `corresponding_institution_ids`

The institutions of the corresponding authors for this work.

This is a list of the [OpenAlex IDs](../../the-api/get-single-entities/#the-openalex-id) of any institutions found within an `authorship` for which [authorships.is\_corresponding](authorship-object.md#is\_corresponding) is `true`.

```json
corresponding_institution_ids: ["https://openalex.org/I4210123613"]
```

### `counts_by_year`

The cited-by count of this work for the last ten years, binned by year.

To put it another way: each year, you can see how many times this work was cited.

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

The date this work was created in the OpenAlex dataset.

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

The title of this work.

This exactly the same as [`Work.title`](./#title). It's useful for `Work`s to include a `display_name` property, since all the other entities have one.

```json
display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `doi`

The DOI (digital object identifier) for the work. 

This is the [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for works.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on [bioRxiv](https://www.biorxiv.org/), and another DOI for the [published version](./#version). However, this field always has just one DOI, the DOI for the published work.

```json
doi: "https://doi.org/10.7717/peerj.4375"
```

### `grants`

The grants that contributed funding to this work.

This is a list of grant objects, which include the [`Funder`](../../funders/) and the award ID, if available. Our grants data comes from Crossref, and is currently fairly limited.

```json
grants: [
    // grant for which we have the grant details:
    {
        funder: "https://openalex.org/F4320306076",
        funder_display_name: "National Science Foundation",
        award_id: "ABI 1661218",
    },
    // grant for which we do not have the details:
    {
        funder: "https://openalex.org/F4320306084",
        funder_display_name: "U.S. Department of Energy",
        award_id: null,
    },
]
```

### `host_venue` (deprecated)

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](./#primary\_location) and [`locations`](./#locations). `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

### `id`

The OpenAlex ID for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `ids`

All the external identifiers that we know about for this work. 

IDs are expressed as URIs whenever possible. Possible ID types:

* `doi` (_String:_ The [DOI](https://en.wikipedia.org/wiki/Digital\_object\_identifier). Same as [`Work.doi`](./#title))
* `mag` (_Integer:_ the [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `openalex` (_String:_ The [OpenAlex ID](../../api-entities/how-to-use-the-api/get-single-entities/#the-openalex-id). Same as [`Work.id`](./#id))
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

Whether this work is paratext—things like front cover, editorial board, or issue information.

In our context, [paratext](https://en.wikipedia.org/wiki/Paratext) is stuff that's in scholarly venue (like a journal) but is _about the venue_ rather than a scholarly work properly speaking. Some examples and nonexamples:

* **yep it's paratext**: front cover, back cover, table of contents, editorial board listing, issue information, masthead.
* **no, not paratext**: research paper, dataset, letters to the editor, figures

Turns out there is a lot of paratext in registries like Crossref. That's not a bad thing... but we've found that it's good to have a way to filter it out.

We determine `is_paratext` algorithmically using title heuristics.

```json
is_paratext: false 
```

### `is_retracted`

Whether this work has been retracted (as far as we are aware).

This field has high precision but low recall. In other words, if `is_retracted` is `true`, the article is definitely retracted. But if `is_retracted` is `False`, it still might be retracted, but we just don't know. This is because unfortunately, the [open sources for retraction data](https://www.crossref.org/blog/encouraging-even-greater-reporting-of-corrections-and-retractions/) aren't currently very comprehensive, and [the more comprehensive ones](https://retractionwatch.com/) aren't sufficiently open for us to use here.

```json
is_retracted: false 
```

### `language`

The language of this work.

The language is represented in [ISO 639-1 format](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes). The language is automatically detected using the information we have about the work. We use the [langdetect](https://pypi.org/project/langdetect/) software library on the words in the work's abstract, or the title if we do not have the abstract. The source code for this procedure is [here.](https://github.com/ourresearch/openalex-guts/blob/54471c6c8e3c59662c4a4d9c37320af7b1667b2b/models/work.py#LL1102C1-L1102C1) Keep in mind that this method is not perfect, and that in some cases the language of the title or abstract could be different from the body of the work.

```json
language: "en"
```

### `locations`

All of the unique places where this work lives.

The work's locations are represented as a list of [`Location`](location-object.md) objects.

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

### `locations_count`

Number of locations we have for this work.

```json
locations_count: 3
```

### `mesh`

The MeSH tags for this work (only found in PubMed works).

This is a list of [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) tag objects. Only works found in [PubMed](https://pubmed.ncbi.nlm.nih.gov/) have MeSH tags; for all other works, this is an empty list.

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

A URL that will get you the groups of words and phrases (n-grams) that make up a work.

This information is obtained from the [Internet Archive](https://archive.org/details/GeneralIndex). See [The Ngram object](./#the-ngram-object) and [Get N-grams](../get-n-grams.md) for background on n-grams, how we use them, and what this API call returns.

{% hint style="info" %}
`ngrams_url` is only displayed in the API and is not included in the [OpenAlex snapshot](../../the-data-snapshot/openalex-snapshot.md).
{% endhint %}

```json
ngrams_url: "https://api.openalex.org/works/W2023271753/ngrams"
```

### `open_access`

Information about the access status of this work.

Represented as an [`OpenAccess`](./#the-openaccess-object) object.

```json
open_access: {
    is_oa: true,
    oa_status: "gold",
    oa_url: "https://peerj.com/articles/4375.pdf",
    any_repository_has_fulltext: true
},
```

### `primary_location`

The the best (closest to the version of record) copy of this work.

The `primary_location` is the [location](#locations) where you can find the best (closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record)) copy of this work. For a peer-reviewed journal article, this would be a full text published version, hosted by the publisher at the article's DOI URL.

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

The day when this work was published

Formatted as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date.

Where different publication dates exist, we select the earliest available date of electronic publication.

This date applies to the version found at [`Work.url`](./#url). The other versions, found in [`Work.locations`](./#locations), may have been published at different (earlier) dates.

```json
publication_date: "2018-02-13"
```

### `publication_year`

The year this work was published.

This year applies to the version found at [`Work.url`](./#url). The other versions, found in [`Work.locations`](./#locations), may have been published in different (earlier) years.

```json
publication_year: 2018
```

### `referenced_works`

Works that this work cites.

These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.

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

Works related to this work—recent papers with the most concepts in common.

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

The title of this work.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `type`

The type or genre of the work (such as "journal article," "book-chapter," or "dissertation").

This field uses Crossref's "type" controlled vocabulary; you can see all possible values via the Crossref api here: [https://api.crossref.org/types](https://api.crossref.org/types).

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves. Unfortunately the accuracy of Crossref's data for this isn't great, and ours isn't much better. We're working to develop better type classification.

```json
type: "journal-article"
```

### `updated_date`

The last time anything in this work's data changed (any change at all, including increases in various counts).

Expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string. 

```json
updated_date: "2022-01-02T00:22:35.180390"
```

### `is_oa`

Whether this work can be read for free, without registration.

```json
is_oa: true
```

### `license`

The license applied to this work at this host. 

Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

```json
license: "cc-by"
```

### `url`

The URL where you can access this work.

```json
id: "https://doi.org/10.7717/peerj.4375"
```

### `version`

The version of the work—one of: "publishedVersion," "acceptedVersion," or "submittedVersion".

Based on the [DRIVER Guidelines versioning scheme.](https://wiki.surfnet.nl/display/DRIVERguidelines/DRIVER-VERSION+Mappings) Possible values:

* `publishedVersion`: The document’s version of record. This is the most authoritative version.
* `acceptedVersion`: The document after having completed peer review and being officially accepted for publication. It will lack publisher formatting, but the _content_ should be interchangeable with the that of the `publishedVersion`.
* `submittedVersion`: the document as submitted to the publisher by the authors, but _before_ peer-review. Its content may differ significantly from that of the accepted article.

```json
version: "publishedVersion"
```

## The `Ngram` object

{% hint style="info" %}
Ngram objects are only available in the API and are not included in the [OpenAlex snapshot](../../the-data-snapshot/openalex-snapshot.md).
{% endhint %}

### ngram

_String:_ Group of words (or numbers, letters, etc) that exist together in the work. This can be a five-gram, four-gram, trigram, bigram, or unigram.

```json
ngram: "energy formula into a functional"
```

### ngram\_count

_Integer:_ How many times this ngram occurred in the work.

```json
ngram_count: 1
```

### ngram\_tokens

_Integer:_ How many tokens are in the ngram.

```json
ngram_tokens: 5
```

### term\_frequency

_Float:_ How often the ngram occurred in the work.

**Caution:** This data was taken directly from the General Index and we've not tested `term_frequency` against actual articles. You can read about their data extraction process on the [Internet Archive](https://archive.org/details/GeneralIndex) website. If you compare `term_frequency` against articles we would [like to hear](mailto:support@openalex.org) how it went!

```json
term_frequency: 0.0005452562704471102
```

## The `OpenAccess` object

The `OpenAccess` object describes access options for a given work. It's only found as part of the `Work` object.

### `any_repository_has_fulltext`

Whether any of this work's locations is a repository with open access to the full text.

Technically, this is represented as a _Boolean_: `true` if any of this work's [`locations`](./#locations) has `location.is_oa=true` and `location.source.type=repository`.

Use case: researchers want to track Green OA, using a definition of "any repository hosts this." OpenAlex's definition (as used in [`oa_status`](./#oa\_status)) doesn't support this, because as soon as there's a publisher-hosted copy (bronze, hybrid, or gold), oa\_status is set to that publisher-hosted status.

So there's a lot of repository-hosted content that the `oa_status` can't tell you about. Our [State of OA paper](https://peerj.com/articles/4375/) calls this "shadowed Green." This feature makes it possible to track shadowed Green.

```json
any_repository_has_fulltext: true
```

### `is_oa`

Whether this work is Open Access (OA), defined as: having a URL where you can read the full text of the work without needing to pay money or log in.

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition; you can use the [`locations`](./#locations) and [`oa_status`](./#oa\_status) fields to narrow your results further, accommodating any definition of OA you like.

```json
is_oa: true
```

### `oa_status`

The Open Access (OA) status of this work, such as "gold," "green," "hybrid," "bronze," or "closed".

The possible values:

* **`gold`**: Published in an OA journal that is indexed by the [DOAJ](https://doaj.org/).
* **`green`**: Toll-access on the publisher landing page, but there is a free copy in an [OA repository](https://en.wikipedia.org/wiki/Open-access\_repository).
* **`hybrid`**: Free under an [open license](https://support.unpaywall.org/support/solutions/articles/44002063718-what-is-an-oa-license-) in a toll-access journal.
* **`bronze`**: Free to read on the publisher landing page, but without any identifiable license.
* **`closed`**: All other articles.

```json
oa_status: "gold"
```

### `oa_url`

The best Open Access (OA) URL for this work.

Although there are [many ways to define OA](https://peerj.com/articles/4375/#literature-review), in this context an OA URL is one where you can read the fulltext of this work without needing to pay money or log in. The "best" such URL is the one closest to the version of record.

This URL might be a direct link to a PDF, or it might be to a landing page that links to the free PDF

```json
oa_url: "https://peerj.com/articles/4375.pdf"
```

### What's next

Using the API, you can fetch, filter, search, and group data about works:

* [Get a single work](../../the-api/get-single-entities/get-a-single-work.md)
* [Get lists of works](../../the-api/get-lists-of-entities/get-lists-of-works.md)
* [Filter works](../../the-api/filters/filter-works.md)
* [Search for works](../../the-api/search/search-works.md)
* [Group works](../../the-api/get-groups-of-entities/group-works.md)
* [Get N-grams](get-n-grams.md)
