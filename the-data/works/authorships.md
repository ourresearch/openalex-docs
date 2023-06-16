# Authorships

An authorship is a single author and their institutional affiliations in the context of a given work.

The Authorship object is only found as part of a `Work` object, in the [`work.authorships`](./#authorships) property.

## Authorship attributes

### `author`

An author of this work

Represented as a dehydrated [`Author`](../../authors/author-object.md) object.

```json
author: {
    id: "https://openalex.org/A2790141563",
    display_name: "Juan Pablo Alperin",
    orcid: "https://orcid.org/0000-0002-9344-7439"
}
```

### `author_position`

A summarized description of this author's position in the work's author list—one of: "first," "middle," or "last".

It's not strictly necessary, because author order is already implicitly recorded by the list order of `Authorship` objects; however it's useful in some contexts to have this as a categorical value.

```json
author_position: "first"
```

### `institutions`

The institutional affiliations this author claimed in the context of this work. 

Represented as dehydrated `Institution` objects.

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

### `is_corresponding`

Whether this a corresponding author for this work.

{% hint style="warning" %}
This is a new feature, and the information may be missing for many works. We are working on this, and coverage will improve soon.
{% endhint %}

### `raw_affiliation_string`

This author's affiliation as it originally came to us (on a webpage or in an API), as a raw unformatted string. 

Multiple affiliations are separated by a semicolon.

```json
raw_affiliation_string: "Canadian Institute for Studies in Publishing, Simon Fraser University,
```
