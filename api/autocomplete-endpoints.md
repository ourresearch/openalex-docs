# Autocomplete endpoints

The API endpoints we've described so far work great if you know the Entity IDs you want to work with, or the exact value of a filter that can get you those IDs.

For example, if you want to find the latest works authored by [https://explore.openalex.org/authors/A2907412441](https://explore.openalex.org/authors/A2907412441), that's easy: just call [https://api.openalex.org/works?filter=authorships.author.id:https://openalex.org/A2907412441\&sort=publication\_date:desc](https://api.openalex.org/works?filter=authorships.author.id:https://openalex.org/A2907412441\&sort=publication\_date:desc)

Want to find the most-cited institutions in Tanzania? Great! [https://api.openalex.org/institutions?filter=country\_code:TZ\&sort=cited\_by\_count:desc](https://api.openalex.org/institutions?filter=country\_code:TZ\&sort=cited\_by\_count:desc)

But what if you can't remember Tanzania's country code, or your favorite researcher's OpenAlex ID? What if you're building a website on top of the OpenAlex API, and you want a page that lets a user find the latest works from any author they want? There are lots of scenarios like this, where they'll need a quick way to find the Entities they want with information they do have, like an Author's name.

This is where autocomplete endpoints come in - they can take partial search strings and provide the Entities the user is most likely to be looking for. You've seen autocomplete UIs in action before - here's how one might look on a site that uses OpenAlex:

![A user looking for information on the flagship of Florida's state university system.](<../.gitbook/assets/Screen Shot 2022-04-15 at 1.46.28 PM.png>)

This is the query behind that result: [https://api.openalex.org/autocomplete?q=flori](https://api.openalex.org/autocomplete?q=flori)

{% hint style="info" %}
For Entities that support it, you might be tempted to [filter on display\_name.search](get-lists-of-entities.md#additional-filters-1). Don't! It's much slower than the autocomplete endpoints we're about to get into, returns a lot of information you don't need, and you have to do a lot of extra work with the results. If you want to find the University of Florida:\
\
👎 [https://api.openalex.org/institutions?filter=display\_name.search:florida](https://api.openalex.org/institutions?filter=display\_name.search:florida) &#x20;

👍 [https://api.openalex.org/autocomplete/institutions?q=Florida](https://api.openalex.org/autocomplete/institutions?q=Florida)
{% endhint %}

## Entity Autocomplete Endpoints

Entity autocomplete queries all start with `/autocomplete` and have a single required parameter `q`, the string to search for. The most basic autocomplete request includes only those parts: [https://api.openalex.org/autocomplete?q=frogs](https://api.openalex.org/autocomplete?q=frogs)

Each query returns the 10 most relevant results, in descending order of `cited_by_count`.

#### Limiting results to a single Entity type

You can limit autocomplete results to a single Entity type by passing that type in the `entity_type` argument, for example: [https://api.openalex.org/autocomplete?q=Birds\&entity\_type=venue](https://api.openalex.org/autocomplete?q=Birds\&entity\_type=venue)

Equivalently, you can use an entity-specific route: [https://api.openalex.org/autocomplete/venues?q=Birds](https://api.openalex.org/autocomplete/venues?q=Birds)

{% hint style="info" %}
The entity-specific routes use the (plural) names you would use when [listing Entities](get-lists-of-entities.md). The entity\_type argument uses the (singular) name of the entity type. So use

`/autocomplete/works` but `/autocomplete?entity_type=work`
{% endhint %}

The result object will include the familiar meta object:

```json
"meta": {
    "count": 160129,
    "db_response_time_ms": 29,
    "page": 1,
    "per_page": 10
 }
```

along with up to 10 matches:

```json
"results": [
    {
      "id": "https://openalex.org/I33213144",
      "display_name": "University of Florida",
      "hint": "Gainesville, USA",
      "cited_by_count": 17190001,
      "entity_type": "institution",
      "external_id": "https://ror.org/02y3ad647"
    },
    // plus others
]
```

The fields returned in each result are:

* `id` (string): The [OpenAlex ID](../about-the-data/#the-openalex-id) for this Entity.
* `external_id` (string): The gold-standard external ID for this entity. May be null for some entities. Differs by entity type:
  * Work: [DOI](../about-the-data/work.md#title)
  * Author: [ORCID](../about-the-data/author.md#orcid)
  * Venue: [ISSN-L](../about-the-data/venue.md#issn\_l)
  * Institution: [ROR](../about-the-data/institution.md#ror)
  * Concept: [Wikidata ID](../about-the-data/concept.md#wikidata)
* `display_name` (string): The entity's `display_name` property.
* `entity_type` (string): The entity's type (_work_, _author_, _venue_, _institution_, or _concept_).
* `cited_by_count` (integer): The entity's `cited_by_count` property.
* `hint`: Some extra information that can help identify the right item. Differs by entity type.
  * `Work`: The work's authors' display names, concatenated. e.g. "R. Alexander Pyron, John J. Wiens"
  * `Author`:  The title and year of the Author's most recent work, e.g. "Touch screen car dashboards as serious danger for causing traffic accidents (2019)"
  * `Venue`: The publisher, e.g. "Oxford University Press"
  * `Institution`: The institution's location, e.g. "Gainesville, USA"
  * `Concept`: The Concept's [description](../about-the-data/concept.md#description), e.g. "the study of relation between plant species and genera"

## Other autocomplete endpoints

Autocomplete endpoints are also provided for some things that aren't proper OpenAlex `Entities` but are nice to be able to look up.

#### Publishers : /autocomplete/venues/publisher

[https://api.openalex.org/autocomplete/venues/publisher?q=science](https://api.openalex.org/autocomplete/venues/publisher?q=science)[ ](https://api.openalex.org/autocomplete/venues/publisher?q=science)will find publishers relevant to your query, roll up the citation counts for venues belonging to those publishers, and give you Venue results with `id` and `external_id` nulled out (since the results don't represent single Venues):

```json
 {
  "id": null,
  "display_name": "American Association for the Advancement of Science (AAAS)",
  "cited_by_count": 17017749,
  "entity_type": "venue",
  "external_id": null
},
{
  "id": null,
  "display_name": "Proceedings of the National Academy of Sciences",
  "cited_by_count": 16776995,
  "entity_type": "venue",
  "external_id": null
},
```

#### Countries: /autocomplete/institutions/country

[https://api.openalex.org/autocomplete/institutions/country?q=republic](https://api.openalex.org/autocomplete/institutions/country?q=republic) will find countries relevant to your query, roll up the citation counts for institutions in those countries, and give you Institution results with `id` and `external_id` nulled out (since the results don't represent single Institutions):

```json
{
  "id": "KR",
  "display_name": "Korea, Republic of",
  "cited_by_count": 82790619,
  "entity_type": "institution",
  "external_id": null
},
{
  "id": "IR",
  "display_name": "Iran, Islamic Republic of",
  "cited_by_count": 24569295,
  "entity_type": "institution",
  "external_id": null
},
```

