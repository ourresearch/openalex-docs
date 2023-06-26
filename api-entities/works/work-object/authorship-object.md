# Authorship object

The Authorship object represents a single author and her institutional affiliations in the context of a given work. It is only found as part of a `Work` object, in the [`work.authorships`](./#authorships) property.

### `author`

_String:_ An author of this work, as a dehydrated [`Author`](../../authors/author-object.md) object.

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

### `is_corresponding`

_Boolean:_ If `true`, this is a corresponding author for this work.

{% hint style="warning" %}
This is a new feature, and the information may be missing for many works. We are working on this, and coverage will improve soon.
{% endhint %}

### `raw_affiliation_string`

_String:_ This author's affiliation as it originally came to us (on a webpage or in an API), as a raw unformatted string. Multiple affiliations are separated by a semicolon.

```json
raw_affiliation_string: "Canadian Institute for Studies in Publishing, Simon Fraser University,
```
