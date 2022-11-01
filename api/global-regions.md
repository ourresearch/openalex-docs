# Continents and regions

It's easy to filter and group by large geographic regions, such as continents and the [Global South](https://en.wikipedia.org/wiki/Global\_North\_and\_Global\_South).&#x20;

* Get institutions located in South America\
  [https://api.openalex.org/institutions?filter=country.continent:south_\__america](https://api.openalex.org/institutions?filter=country.continent:south\_america)
* Get works where at least one author's institution is located in the Global South\
  [https://api.openalex.org/works?filter=institutions.country.is\_global\_south:true](https://api.openalex.org/works?filter=institutions.country.is\_global\_south:true)
* Group highly-cited authors by their last known institution's continent\
  [https://api.openalex.org/authors?group-by=last\_known\_institution.country.continent\&filter=cited\_by\_count:>100](https://api.openalex.org/authors?group-by=last\_known\_institution.country.continent\&filter=cited\_by\_count:%3E100)

### Continents

Countries are mapped to continents using data from the [United Nations Statistics Division](https://unstats.un.org/unsd/methodology/m49/). You can see the actual mapping used by the API [here](https://github.com/ourresearch/openalex-elastic-api/blob/master/countries.py).&#x20;

#### **Filter by continent**

There are three ways to use continent filters:

| Endpoint     | Format                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| Authors      | `/authors?filter=last_known_institution.country.continent:<continent>` |
| Institutions | `/institutions?filter=country.continent:<continent>`                   |
| Works        | `/works?filter=institutions.country.continent:<continent>`             |

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
  [https://api.openalex.org/institutions?group-by=country.continent](https://api.openalex.org/institutions?group-by=country.continent)

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

| Endpoint     | Format                                                       |
| ------------ | ------------------------------------------------------------ |
| Authors      | `/authors?group-by=last_known_institution.country.continent` |
| Institutions | `/institutions?group-by=country.continent`                   |
| Works        | `/works?group-by=institutions.country.continent`             |

### **Global South**

The Global South is a term used to identify regions within Latin America, Asia, Africa, and Oceania. Our source for this group of countries is the [United Nations Finance Center for South-South Cooperation](http://www.fc-ssc.org/en/partnership\_program/south\_south\_countries).&#x20;

#### Filter by Global South

You can filter Global South countries by using the boolean filter `is_global_south` in the following endpoints:

| Endpoint     | Format                                                                     |
| ------------ | -------------------------------------------------------------------------- |
| Authors      | `/authors?filter=last_known_institution.country.is_global_south:<boolean>` |
| Institutions | `/institutions?filter=country.is_global_south:<boolean>`                   |
| Works        | `/works?filter=institutions.country.is_global_south:<boolean>`             |

#### Group by Global South

You can also group by the Global South:

| Endpoint     | Format                                                             |
| ------------ | ------------------------------------------------------------------ |
| Authors      | `/authors?group-by=last_known_institution.country.is_global_south` |
| Institutions | `/institutions?group-by=country.is_global_south`                   |
| Works        | `/works?group-by=institutions.country.is_global_south`             |

### Tips & Tricks

To see country-by-country details for a geographic region, filter by region, then group by `country_code`.

* Get number of authors with last known institution in the Global South, by country\
  [https://api.openalex.org/authors?filter=last\_known\_institution.country.is\_global\_south:true\&group-by=last\_known\_institution.country\_code](https://api.openalex.org/authors?filter=last\_known\_institution.country.is\_global\_south:true\&group-by=last\_known\_institution.country\_code)

Response:

```json
// all countries are in the Global South
{
  key: "CN",
  key_display_name: "China",
  count: 13926441
},
{
  key: "IN",
  key_display_name: "India",
  count: 2632721
},
{
  key: "BR",
  key_display_name: "Brazil",
  count: 2089957
}...
```
