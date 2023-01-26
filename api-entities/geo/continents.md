# Continents

Countries are mapped to continents using data from the [United Nations Statistics Division](https://unstats.un.org/unsd/methodology/m49/). You can see the actual mapping used by the API [here](https://github.com/ourresearch/openalex-elastic-api/blob/master/countries.py).&#x20;

#### **Filter by continent**

There are three ways to use continent filters:

| Endpoint     | Format                                                         |
| ------------ | -------------------------------------------------------------- |
| Authors      | `/authors?filter=last_known_institution.continent:<continent>` |
| Institutions | `/institutions?filter=continent:<continent>`                   |
| Works        | `/works?filter=institutions.continent:<continent>`             |

Available values for the `<continent>` filter are:

| Continent     | Filter Value    | Canonical ID                                   |
| ------------- | --------------- | ---------------------------------------------- |
| Africa        | `africa`        | [Q15](https://www.wikidata.org/wiki/Q15)       |
| Antarctica    | `antarctica`    | [Q51](https://www.wikidata.org/wiki/Q51)       |
| Asia          | `asia`          | [Q48](https://www.wikidata.org/wiki/Q48)       |
| Europe        | `europe`        | [Q46](https://www.wikidata.org/wiki/Q46)       |
| North America | `north_america` | [Q49](https://www.wikidata.org/wiki/Q49)       |
| Oceania       | `oceania`       | [Q55643](https://www.wikidata.org/wiki/Q55643) |
| South America | `south_america` | [Q18](https://www.wikidata.org/wiki/Q18)       |

#### **Group by continent**

You can group by continent.

* Group institutions by continent\
  [https://api.openalex.org/institutions?group-by=continent](https://api.openalex.org/institutions?group-by=continent)

Response:

```json
{
  key: "Q46",
  key_display_name: "Europe",
  count: 41382
},
{
  key: "Q49",
  key_display_name: "North America",
  count: 37458
},
{
  key: "Q48",
  key_display_name: "Asia",
  count: 20432
}...
```

Groups are available in these endpoints:

| Endpoint     | Format                                               |
| ------------ | ---------------------------------------------------- |
| Authors      | `/authors?group-by=last_known_institution.continent` |
| Institutions | `/institutions?group-by=continent`                   |
| Works        | `/works?group-by=institutions.continent`             |
