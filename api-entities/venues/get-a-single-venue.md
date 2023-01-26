# Get a single venue

It's easy to get a venue from from the API with: `/venues/<entity_id>`. Here's an example:

* Get the venue with the [OpenAlex ID](../../how-to-use-the-api/get-single-entities.md#the-openalex-id) `V137773608`: \
  [https://api.openalex.org/venues/V137773608](https://api.openalex.org/venues/V137773608)

That will return an [`Venue`](venue-object.md) object, describing everything OpenAlex knows about the venue with that ID:

```json
{
    "id": "https://openalex.org/V137773608",
    "issn_l": "0028-0836",
    "issn": [
        "1476-4687",
        "0028-0836"
    ],
    "display_name": "Nature",
    // other fields removed for brevity
}
```

{% hint style="info" %}
You can make up to 50 of these queries at once by [requesting a list of entities and filtering on IDs using OR syntax](../../how-to-use-the-api/get-lists-of-entities/filter-entity-lists.md#addition-or).
{% endhint %}

{% hint style="info" %}
Venues are also available via an alias: `/journals`
{% endhint %}

### External IDs

You can look up journals using external IDs such as an ISSN:

* Get the venue with ISSN: `2041-1723`:\
  [https://api.openalex.org/venues/issn:2041-1723](https://api.openalex.org/venues/issn:2041-1723)

Available external IDs for venues are:

| External ID                    | URN        |
| ------------------------------ | ---------- |
| ISSN                           | `issn`     |
| Fatcat                         | `fatcat`   |
| Microsoft Academic Graph (MAG) | `mag`      |
| Wikidata                       | `wikidata` |
