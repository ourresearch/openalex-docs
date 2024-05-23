# Work object

There's a lot of useful data inside a work. When you use the API to get a [single work](../get-a-single-work.md) or [lists of works](../get-lists-of-works.md), this is what's returned.

### `abstract_inverted_index`

_Object:_ The abstract of the work, as an [inverted index](https://en.wikipedia.org/wiki/Inverted\_index), which encodes information about the abstract's words and their positions within the text. [Like Microsoft Academic Graph](https://web.archive.org/web/20220721160540/https://docs.microsoft.com/en-us/academic-services/graph/resources-faq#what-format-are-paper-abstracts-published-in), OpenAlex doesn't include plaintext abstracts due to legal constraints.

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

![](<../../../.gitbook/assets/OpenAlex works with abstracts by year (percent) (1).svg>)

### `alternate_host_venues` (deprecated)

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](./#primary\_location) and [`locations`](./#locations). The attributes `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

### `authorships`

_List:_ List of [`Authorship`](authorship-object.md) objects, each representing an author and their institution. [Limited to](../../authors/limitations.md) the first 100 authors to maintain API performance.

```json
authorships: [
    // first authorship object:
    {
        author_position: "middle",
        author: {
            id: "https://openalex.org/A5023888391",
            display_name: "Jason Priem",
            orcid: "https://orcid.org/0000-0001-6187-6610"
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

_Object:_ Information about this work's APC ([article processing charge](https://en.wikipedia.org/wiki/Article\_processing\_charge)). The object contains:

* `value`: _Integer_
* `currency`: _String_
* `provenance`: _String_ — the source of this data. Currently the only value is “doaj” (DOAJ)
* `value_usd`: _Integer_ — the APC converted into USD

This value is the APC list price–the price as listed by the journal’s publisher. That’s not always the price _actually_ paid, because publishers may offer various discounts to authors. Unfortunately we don’t always know this discounted price, but when we do you can find it in [`apc_paid`](./#apc\_paid).

Currently our only source for this data is [DOAJ](https://doaj.org/), and so `doaj` is the only value for `apc_list.provenance`, but we’ll add other sources over time.

We currently don’t have information on the list price for hybrid journals (toll-access journals that also provide an open-access option), but we will add this at some point. We do have [`apc_paid`](./#apc\_paid) information for hybrid OA works occasionally.

You can use this attribute to find works published in [Diamond open access](https://en.wikipedia.org/wiki/Diamond\_open\_access) journals by looking at works where `apc_list.value` is zero. See [`open_access.oa_status`](./#oa\_status) for more info.

```json
apc_payment: {
    value: 3200,
    currency: "USD",
    value_usd: 3200,
    provenance: "doaj"
}
```

### `apc_paid`

_Object:_ Information about the _paid_ APC ([article processing charge](https://en.wikipedia.org/wiki/Article\_processing\_charge)) for this work. The object contains:

* `value`: _Integer_
* `currency`: _String_
* `provenance`: _String_ — currently either `openapc` or `doaj`, but more will be added; see below for details.
* `value_usd`: _Integer_ — the APC converted into USD

You can find the _listed_ APC price (when we know it) for a given work using [`apc_list`](./#apc\_list). However, authors don’t always pay the listed price; often they get a discounted price from publishers. So it’s useful to know the APC actually paid by authors, as distinct from the list price. This is our effort to provide this.

Our best source for the actually paid price is the [OpenAPC](https://openapc.net/) project. Where available, we use that data, and so `apc_paid.provenance` is `openapc`. Where OpenAPC data is unavailable (and unfortunately this is common) we make our best guess by assuming the author paid the APC list price, and apc\_paid.provenance will be set to wherever we got the list price from.

```json
apc_payment: {
    value: 2250,
    currency: "EUR",
    value_usd: 2426,
    provenance: "openapc"
}
```

### `best_oa_location`

_Object:_ A [`Location`](location-object.md) object with the best available open access location for this work.

We score open locations to determine which is best using these factors:

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

_String:_ A URL that uses the [`cites`](../filter-works.md#cites) filter to display a list of works that cite this work. This is a way to expand [`cited_by_count`](./#cited\_by\_count) into an actual list of works.

### `cited_by_count`

_Integer:_ The number of citations to this work. These are the times that other works have cited this work: Other works ➞ This work.

```json
cited_by_count: 382
```

### `concepts`

_List:_ List of dehydrated [`Concept` objects](../../concepts/concept-object.md).

Each `Concept` object in the list also has one additional property:

* `score` (_Float_): The strength of the connection between the work and this concept (higher is stronger). This number is produced by AWS Sagemaker, in the last layer of the [machine learning model](https://github.com/ourresearch/openalex-concept-tagging) that assigns concepts.

Concepts with a score of at least 0.3 are assigned to the work. However, ancestors of an assigned concept are also added to the work, even if the ancestor scores are below 0.3.

{% hint style="info" %}
Because ancestor concepts are assigned to works, you may see concepts in works with very low scores, even some zero scores.
{% endhint %}

```json
concepts: [
    {
        id: "https://openalex.org/C71924100",
        wikidata: "https://www.wikidata.org/wiki/Q11190",
        display_name: "Medicine",
        level: 0,
        score: 0.9187037
    },
    {
        id: "https://openalex.org/C3007834351",
        wikidata: "https://www.wikidata.org/wiki/Q82069695",
        display_name: "Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)",
        level: 5,
        score: 0.8070164
    },
    ...
    {
        id: "https://openalex.org/C191935318",
        wikidata: "https://www.wikidata.org/wiki/Q148",
        display_name: "China",
        level: 2,
        score: 0.5948172
    },
    ...
    {
        id: "https://openalex.org/C121608353",
        wikidata: "https://www.wikidata.org/wiki/Q12078",
        display_name: "Cancer",
        level: 2,
        score: 0.46887803
    },
    ...
    {
        id: "https://openalex.org/C17744445",
        wikidata: "https://www.wikidata.org/wiki/Q36442",
        display_name: "Political science",
        level: 0,
        score: 0
    }
]
```

### `corresponding_author_ids`

_List:_ [OpenAlex IDs](../../../how-to-use-the-api/get-single-entities/#the-openalex-id) of any authors for which [authorships.is\_corresponding](authorship-object.md#is\_corresponding) is `true`.

```json
corresponding_author_ids: ["https://openalex.org/A5004365451"]
```

### `corresponding_institution_ids`

_List:_ [OpenAlex IDs](../../../how-to-use-the-api/get-single-entities/#the-openalex-id) of any institutions found within an `authorship` for which [authorships.is\_corresponding](authorship-object.md#is\_corresponding) is `true`.

```json
corresponding_institution_ids: ["https://openalex.org/I4210123613"]
```

### `countries_distinct_count`

_Integer:_ Number of distinct `country_codes` among the [`authorships`](authorship-object.md#institutions) for this work.

```json
countries_distinct_count: 4
```

### `counts_by_year`

_List:_ [`Works.cited_by_count`](./#cited\_by\_count) for each of the last ten years, binned by year. To put it another way: each year, you can see how many times this work was cited.

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

_String:_ The date this `Work` object was created in the OpenAlex dataset, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string.

```json
created_date: "2017-08-08"
```

### `display_name`

_String:_ Exactly the same as [`Work.title`](./#title). It's useful for `Work`s to include a `display_name` property, since all the other entities have one.

```json
display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `doi`

_String:_ The DOI for the work. This is the [Canonical External ID](../../../how-to-use-the-api/get-single-entities/#canonical-external-ids) for works.

Occasionally, a work has more than one DOI--for example, there might be one DOI for a preprint version hosted on [bioRxiv](https://www.biorxiv.org/), and another DOI for the [published version](./#version). However, this field always has just one DOI, the DOI for the published work.

```json
doi: "https://doi.org/10.7717/peerj.4375"
```

### `fulltext_origin`

_String:_ If a work's full text is searchable in OpenAlex ([`has_fulltext`](./#has\_fulltext) is `true`), this tells you how we got the text. This will be one of:

* `pdf`: We used [Grobid](https://grobid.readthedocs.io) to get the text from an open-access PDF.
* `ngrams`: Full text search is enabled using [N-grams obtained from the Internet Archive](../get-n-grams.md).

This attribute is only available for works with `has_fulltext:true`.

```json
fulltext_origin: "pdf"
```

### `grants`

_List:_ List of grant objects, which include the [`Funder`](../../funders/) and the award ID, if available. Our grants data comes from Crossref, and is currently fairly limited.

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

### `has_fulltext`

_Boolean:_ Set to `true` if the work's full text is searchable in OpenAlex. This does not necessarily mean that the full text is available to you, dear reader; rather, it means that we have indexed the full text and can use it to help power [searches](../search-works.md). If you are trying to find the full text for yourself, try looking in [`open_access.oa_url`](./#open\_access).

We get access to the full text in one of two ways: either using an open-access PDF, or using [N-grams obtained from the Internet Archive](../get-n-grams.md). You can learn where a work's full text came from at [`fulltext_origin`](./#fulltext\_origin).

```json
has_fulltext: true
```

### `host_venue` (deprecated)

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](./#primary\_location) and [`locations`](./#locations). The attributes `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

### `id`

_String:_ The [OpenAlex ID](../../../how-to-use-the-api/get-single-entities/#the-openalex-id) for this work.

```json
id: "https://openalex.org/W2741809807"
```

### `ids`

_Object:_ All the external identifiers that we know about for this work. IDs are expressed as URIs whenever possible. Possible ID types:

* `doi` (_String:_ The [DOI](https://en.wikipedia.org/wiki/Digital\_object\_identifier). Same as [`Work.doi`](./#title))
* `mag` (_Integer:_ the [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) ID)
* `openalex` (_String:_ The [OpenAlex ID](../../../how-to-use-the-api/get-single-entities/#the-openalex-id). Same as [`Work.id`](./#id))
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

### `indexed_in`

_List:_ The sources this work is indexed in. Possible values: `arxiv`, `crossref`, `doaj`, `pubmed`.

```json
indexed_in: [
    "arxiv", "crossref", "pubmed"
] 
```

### `institutions_distinct_count`

_Integer:_ Number of distinct [`institutions`](../../institutions/) among the [`authorships`](authorship-object.md#institutions) for this work.

```json
institutions_distinct_count: 4
```

### `is_paratext`

_Boolean:_ True if we think this work is [paratext](https://en.wikipedia.org/wiki/Paratext).

In our context, paratext is stuff that's in a scholarly venue (like a journal) but is _about the venue_ rather than a scholarly work properly speaking. Some examples and nonexamples:

* **yep it's paratext**: front cover, back cover, table of contents, editorial board listing, issue information, masthead.
* **no, not paratext**: research paper, dataset, letters to the editor, figures

Turns out there is a lot of paratext in registries like Crossref. That's not a bad thing... but we've found that it's good to have a way to filter it out.

We determine `is_paratext` algorithmically using title heuristics.

```json
is_paratext: false 
```

### `is_retracted`

_Boolean:_ True if we know this work has been retracted.

We identify works that have been retracted using the public [Retraction Watch database](https://doi.org/10.13003/c23rw1d9), a public resource made possible by a partnership between Crossref and The Center for Scientific Integrity.

```json
is_retracted: false 
```

### `keywords`

_List of objects:_ Short phrases identified based on works' Topics. For background on how Keywords are identified, see [the Keywords page at OpenAlex help pages](https://docs.openalex.org/api-entities/keywords).

The score for each keyword represents the similarity score of that keyword to the title and abstract text of the work.

We provide up to 5 keywords per work, for all keywords with scores above a certain threshold.

```json
[
    {
        id: "https://openalex.org/keywords/global-seaweed-distribution",
        display_name: "Global Seaweed Distribution",
        score: 0.559386
    },
    {
        id: "https://openalex.org/keywords/climate-change-impacts",
        display_name: "Climate Change Impacts",
        score: 0.535795
    },
    {
        id: "https://openalex.org/keywords/ecosystem-resilience",
        display_name: "Ecosystem Resilience",
        score: 0.502789
    }
]
```

### `language`

_String:_ The language of the work in [ISO 639-1 format](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes). The language is automatically detected using the information we have about the work. We use the [langdetect](https://pypi.org/project/langdetect/) software library on the words in the work's abstract, or the title if we do not have the abstract. The source code for this procedure is [here.](https://github.com/ourresearch/openalex-guts/blob/54471c6c8e3c59662c4a4d9c37320af7b1667b2b/models/work.py#LL1102C1-L1102C1) Keep in mind that this method is not perfect, and that in some cases the language of the title or abstract could be different from the body of the work.

A few things to keep in mind about this:

* We don't always assign a language if we do not have enough words available to accurately guess.
* We report the language of the metadata, not the full text. For example, if a work is in French, but the title and abstract are in English, we report the language as English.
* In some cases, abstracts are in two different languages. Unfortunately, when this happens, what we report will not be accurate.

```json
language: "en"
```

### `license`

_String:_ The license applied to this work at this host. Most toll-access works don't have an explicit license (they're under "all rights reserved" copyright), so this field generally has content only if `is_oa` is `true`.

```json
license: "cc-by"
```

### `locations`

_List:_ A list of [`Location`](location-object.md) objects describing all unique places where this work lives.

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

_Integer:_ Number of [`locations`](./#locations) for this work.

```json
locations_count: 3
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
`ngrams_url` is only displayed in the API and is not included in the [OpenAlex snapshot](../../../download-all-data/openalex-snapshot.md).
{% endhint %}

_String:_ It lists groups of words and phrases (n-grams) that make up a work, as obtained from the [Internet Archive](https://archive.org/details/GeneralIndex). See [The Ngram object](./#the-ngram-object) and [Get N-grams](../get-n-grams.md) for background on n-grams, how we use them, and what this API call returns.

```json
ngrams_url: "https://api.openalex.org/works/W2023271753/ngrams"
```

### `open_access`

_Object:_ Information about the access status of this work, as an [`OpenAccess`](./#the-openaccess-object) object.

```json
open_access: {
    is_oa: true,
    oa_status: "gold",
    oa_url: "https://peerj.com/articles/4375.pdf",
    any_repository_has_fulltext: true
},
```

### `primary_location`

_Object:_ A [`Location`](location-object.md) object with the primary location of this work.

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

### `primary_topic`

_List:_ Object

The top ranked [`Topic`](../../topics/README.md) for this work. This is the same as the first item in [`Work.topics`](#topics).

```json
primary_topic: {
    id: "https://openalex.org/T12419",
    display_name: "Analysis of Cardiac and Respiratory Sounds",
    score: 	0.9997,
    subfield: {
        id: 2740,
        display_name: "Pulmonary and Respiratory Medicine"
    }
    field: {
        id: 27,
        display_name: "Medicine"
    }
    domain: {
        id: 4,
        display_name: "Health Sciences"
    }
}
```

### `publication_date`

_String:_ The day when this work was published, formatted as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date.

Where different publication dates exist, we usually select the earliest available date of electronic publication.

This date applies to the version found at [`Work.url`](./#url). The other versions, found in [`Work.locations`](./#locations), may have been published at different (earlier) dates.

```json
publication_date: "2018-02-13"
```

### `publication_year`

_Integer:_ The year this work was published.

This year applies to the version found at [`Work.url`](./#url). The other versions, found in [`Work.locations`](./#locations), may have been published in different (earlier) years.

```json
publication_year: 2018
```

### `referenced_works`

_List:_ [OpenAlex IDs](../../../how-to-use-the-api/get-single-entities/#the-openalex-id) for works that this work cites. These are citations that go _from_ this work out _to_ another work: This work ➞ Other works.

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

_List:_ [OpenAlex IDs](../../../how-to-use-the-api/get-single-entities/#the-openalex-id) for works related to this work. Related works are computed algorithmically; the algorithm finds recent papers with the most concepts in common with the current paper.

```json
related_works: [
    "https://openalex.org/W2753353163",
    "https://openalex.org/W2785823074",
    "https://openalex.org/W2511661767",
    "https://openalex.org/W2115339903",
    "https://openalex.org/W2031754690",
]
```

### `sustainable_development_goals`

_List:_ List of objects

The United Nations' [17 Sustainable Development Goals](https://sdgs.un.org/goals) are a collection of goals at the heart of a global "shared blueprint for peace and prosperity for people and the planet." We use a machine learning model to tag works with their relevance to these goals based on our [OpenAlex SDG Classifier](https://github.com/ourresearch/openalex-sdg-classifier), an mBERT machine learning model developed by the [Aurora Universities Network](https://aurora-universities.eu/sdg-research/). The `score` represents the model's predicted probability of the work's relevance for a particular goal.

We display all of the SDGs with a prediction score higher than 0.4.

```json
sustainable_development_goals: [
    {
        id: "https://metadata.un.org/sdg/3",
        display_name: "Good health and well-being",
        score: 	0.95
    }
]
```

### `topics`

_List:_ List of objects

The top ranked [`Topics`](../../topics/README.md) for this work. We provide up to 3 topics per work.

```json
topics: [
    {
        id: "https://openalex.org/T12419",
        display_name: "Analysis of Cardiac and Respiratory Sounds",
        score: 	0.9997,
        subfield: {
            id: 2740,
            display_name: "Pulmonary and Respiratory Medicine"
        }
        field: {
            id: 27,
            display_name: "Medicine"
        }
        domain: {
            id: 4,
            display_name: "Health Sciences"
        }
    }
    ...
]
```

### `title`

_String:_ The title of this work.

This is exactly the same as [`Work.display_name`](./#display\_name). We include both attributes with the same information because we want all entities to have a `display_name`, but there's a longstanding tradition of calling this the "title," so we figured you'll be expecting works to have it as a property.

```json
title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
```

### `type`

_String:_ The type of the work.

You can see all of the different types along with their counts in the OpenAlex API here: [`https://api.openalex.org/works?group_by=type`](https://api.openalex.org/works?group\_by=type).

Most works are type `article`. This includes what was formerly (and currently in [`type_crossref`](./#type\_crossref)) labeled as `journal-article`, `proceedings-article`, and `posted-content`. We consider all of these to be `article` type works, and the distinctions between them to be more about where they are published or hosted:

* Journal articles will have a [`primary_location.source.type`](location-object.md#source) of `journal`
* Conference proceedings will have a [`primary_location.source.type`](location-object.md#source) of `conference`
* Preprints or "posted content" will have a [`primary_location.version`](location-object.md#version) of `submittedVersion`

(Note that distinguishing between journals and conferences is a hard problem, one we often get wrong. We are working on improving this, but we also point out that the two have a lot of overlap in terms of their roles as hosts of research publications.)

Works that are hosted primarily on a preprint, or that are identified speicifically as preprints in the metadata we receive, are assigned the type `preprint` rather than `article`.

Works that represent stuff that is _about_ the venue (such as a journal)—rather than a scholarly work properly speaking—have type `paratext`. These include things like front-covers, back-covers, tables of contents, and the journal itself (e.g., `https://openalex.org/W4232230324`).

We also have types for `letter` , `editorial` , `erratum` (corrections), `libguides` , `supplementary-materials` , and `review` (currently, articles that come from journals that exclusively publish review articles). Coverage is low on these but will improve.

Other work types follow the Crossref "type" controlled vocabulary—see [`type_crossref`](./#type\_crossref).

```json
type: "article"
```

### `type_crossref`

_String:_ Legacy type information, using Crossref's "type" controlled vocabulary.

These are the work types that we used to use, before switching to our current system (see [`type`](./#type)).

You can see all possible values of Crossref's "type" controlled vocabulary via the Crossref api here: [`https://api.crossref.org/types`](https://api.crossref.org/types).

Where possible, we just pass along Crossref's `type` value for each work. When that's impossible (eg the work isn't in Crossref), we do our best to figure out the `type` ourselves.

```json
type_crossref: "journal-article"
```

### `updated_date`

_String:_ The last time anything in this `Work` object changed, expressed as an [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string (in UTC). This date is updated for _any change at all_, including increases in various counts.

```json
updated_date: "2022-01-02T00:22:35.180390"
```

## The `Ngram` object

{% hint style="info" %}
Ngram objects are only available in the API and are not included in the [OpenAlex snapshot](../../../download-all-data/openalex-snapshot.md).
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

_Boolean:_ `True` if any of this work's [`locations`](./#locations) has `location.is_oa=true` and `location.source.type=repository`.

Use case: researchers want to track Green OA, using a definition of "any repository hosts this." OpenAlex's definition (as used in [`oa_status`](./#oa\_status)) doesn't support this, because as soon as there's a publisher-hosted copy (bronze, hybrid, or gold), oa\_status is set to that publisher-hosted status.

So there's a lot of repository-hosted content that the `oa_status` can't tell you about. Our [State of OA paper](https://peerj.com/articles/4375/) calls this "shadowed Green." This feature makes it possible to track shadowed Green.

```json
any_repository_has_fulltext: true
```

### `is_oa`

_Boolean:_ `True` if this work is Open Access (OA).

There are [many ways to define OA](https://peerj.com/articles/4375/#literature-review). OpenAlex uses a broad definition: having a URL where you can read the fulltext of this work without needing to pay money or log in. You can use the [`locations`](./#locations) and [`oa_status`](./#oa\_status) fields to narrow your results further, accommodating any definition of OA you like.

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

[Diamond open access](https://en.wikipedia.org/wiki/Diamond\_open\_access) is another more recent designation that refers to works which are free for both readers and authors. In OpenAlex, there is no "diamond" `oa_status`, but diamond OA works can be identified using a combination of the [`is_oa`](./#is\_oa) and [`apc_list.value`](./#apc\_list):

* Get Diamond open access works: [`https://api.openalex.org/works?filter=apc_list.value:0,is_oa:true`](https://api.openalex.org/works?filter=apc\_list.value:0,is\_oa:true)

### `oa_url`

_String:_ The best Open Access (OA) URL for this work.

Although there are [many ways to define OA](https://peerj.com/articles/4375/#literature-review), in this context an OA URL is one where you can read the fulltext of this work without needing to pay money or log in. The "best" such URL is the one closest to the version of record.

This URL might be a direct link to a PDF, or it might be to a landing page that links to the free PDF

```json
oa_url: "https://peerj.com/articles/4375.pdf"
```
