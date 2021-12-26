# HostVenue

The HostVenue object describes a given Work hosted on a given Venue (you can think of it as a WorkVenue bridging table). It's got two parts:

1. a dehydrated Venue object, and
2. some extra stuff about the work.

The extra stuff is important because a given work can be hosted in different ways and in different forms, depending on where it's living.&#x20;

To learn more about the dehydrated Venue object part, see the dehydrated Venue page. To learn more about the other stuff, read below:

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





Although the work is the _same work_ no matter where you find it, some its properties may be different from host to host. The HostVenue object tries to capture those differences.

