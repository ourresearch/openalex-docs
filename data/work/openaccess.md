# OpenAccess

start with some introductory stuff here.



## The `OpenAccess` object

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

###
