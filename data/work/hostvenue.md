# HostVenue

The HostVenue object describes a given Work (eg, a paper called "All about science") as hosted at a particular Venue (eg a journal called _The Journal of Science_).&#x20;

It tells you some of the properties of the host venue, as well as some of the conditions under which  this work is hosted at that venue.

In more concrete terms, a HostVenue is a dehydrated Venue object, plus these additional properties:

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





Although the work is the _same work_ no matter where you find it, some its properties may be different from host to host. The HostVenue object tries to capture those differences.

