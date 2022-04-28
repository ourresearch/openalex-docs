# Autocomplete endpoint

The autocomplete endpoint lets you add autocomplete or typeahead components to your applications, without the overhead of hosting your own API endpoint.&#x20;

Each endpoint takes a string, and (very quickly) returns a list of entities that match that string.

Here's an example of an autocomplete component that lets users quickly select an institution:

![A user looking for information on the flagship of Florida's state university system.](https://i.imgur.com/f8yyWCd.png)

This is the query behind that result: [`https://api.openalex.org/autocomplete/institutions?q=flori`](https://api.openalex.org/autocomplete/institutions?q=flori)``

## Request format

The format for requests is simple: `/autocomplete/<entity_type>?q=<query>`

* `entity_type`: the name of one of the five OpenAlex [entities](../about-the-data/): `works`, `authors`, `venues`, `institutions`, or `concepts`.
* `query`: the search string supplied by the user.

## Response format

Each request returns a response object with two properties:

* `meta`: an object with information about the request, including timing and results count
* `results`: a list of up to ten results for the query, sorted by citation count. Each result represents an entity that matched against the query.

```json
{
    meta: {
        count: 183,
        db_response_time_ms: 5,
        page: 1,
        per_page: 10
    },
    results: [
        {
            id: "https://openalex.org/I33213144",
            display_name: "University of Florida",
            hint: "Gainesville, USA",
            cited_by_count: 17190001,
            entity_type: "institution",
            external_id: "https://ror.org/02y3ad647"
        },
        // more results...
    ]
}
```

Each object in the `results` list includes these properties:

* `id` (string): The [OpenAlex ID](../about-the-data/#the-openalex-id) for this result entity.
* `external_id` (string): The [Canonical External ID](../about-the-data/#canonical-external-ids) for this result entity.
* `display_name` (string): The entity's `display_name` property.
* `entity_type` (string): The entity's type: `work`, `author`, `venue`, `institution`, or `concept`.
* `cited_by_count` (integer): The entity's `cited_by_count` property. For works this is simply the number of incoming citations. For other entities, it's the _sum_ of incoming citations for all the works linke to that entity.&#x20;
* `hint`: Some extra information that can help identify the right item. Differs by entity type.

### Hints

Result objects have a `hint` property. You can show this to users to help them identify which item they're selecting. This is particularly helpful when the `display_name` values of different results are the same, as often happens when autocompleting an author entity--a user who types in `John Smi` is going to see a lot of identical-looking results, even though each one is a different person.

The content of the `hint` property varies depending on what kind of entity you're looking up:

* `Work`: The work's authors' display names, concatenated. e.g. "R. Alexander Pyron, John J. Wiens"
* `Author`:  The title and year of the Author's most recent work, e.g. "Touch screen car dashboards as serious danger for causing traffic accidents (2019)"
* `Venue`: The publisher, e.g. "Oxford University Press"
* `Institution`: The institution's location, e.g. "Gainesville, USA"
* `Concept`: The Concept's [description](../about-the-data/concept.md#description), e.g. "the study of relation between plant species and genera"

