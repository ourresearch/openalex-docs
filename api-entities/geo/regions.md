# Regions

### **Global South**

The Global South is a term used to identify regions within Latin America, Asia, Africa, and Oceania. Our source for this group of countries is the [United Nations Finance Center for South-South Cooperation](http://www.fc-ssc.org/en/partnership\_program/south\_south\_countries).&#x20;

#### Filter by Global South

You can filter Global South countries by using the boolean filter `is_global_south` in the following endpoints:

| Endpoint     | Format                                                             |
| ------------ | ------------------------------------------------------------------ |
| Authors      | `/authors?filter=last_known_institution.is_global_south:<boolean>` |
| Institutions | `/institutions?filter=is_global_south:<boolean>`                   |
| Works        | `/works?filter=institutions.is_global_south:<boolean>`             |

#### Group by Global South

You can also group by the Global South:

| Endpoint     | Format                                                     |
| ------------ | ---------------------------------------------------------- |
| Authors      | `/authors?group-by=last_known_institution.is_global_south` |
| Institutions | `/institutions?group-by=is_global_south`                   |
| Works        | `/works?group-by=institutions.is_global_south`             |

### Tips & Tricks

To see country-by-country details for a geographic region, filter by region, then group by `country_code`.

* Get number of authors with last known institution in the Global South, by country\
  [https://api.openalex.org/authors?filter=last\_known\_institution.is\_global\_south:true\&group-by=last\_known\_institution.country\_code](https://api.openalex.org/authors?filter=last\_known\_institution.is\_global\_south:true\&group-by=last\_known\_institution.country\_code)

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
