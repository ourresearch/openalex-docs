# Location object

The `Location` object describes the location of a given work. It's only found as part of the `Work` object.

Any given work may have multiple [`locations`](./#locations), representing the different places where the work lives (online). The best (closest to the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record)) copy of a work can be found in the work's [`primary_location`](./#primary\_location). For a peer-reviewed journal article, this would be a full text published version, hosted by the publisher at the article's DOI URL.

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

### source

_Object:_ Information about the source of this location, as a [`DehydratedSource`](../../venues/venue-object.md#the-dehydratedsource-object) object.

```json
source {
    id: "https://openalex.org/S125754415",
    display_name: "Proceedings of the National Academy of Sciences of the United States of America",
    issn_l: "0027-8424",
    issn: ["1091-6490", "0027-8424"],
    host_organization: "https://openalex.org/P4310320052",
    type: "journal"
}
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
