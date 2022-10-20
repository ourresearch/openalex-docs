# Continents and regions

It's easy to filter and group by large geographic regions, such as continents and the [Global South](https://en.wikipedia.org/wiki/Global\_North\_and\_Global\_South).&#x20;

* Get institutions located in South America\
  [https://api.openalex.org/institutions?filter=country.is\_south_\__america:true](https://api.openalex.org/institutions?filter=country.is\_south\_america:true)
* Group highly-cited authors by their last known institution's continent\
  [https://api.openalex.org/authors?group-by=last\_known\_institution.continent\&filter=cited\_by\_count:>100](https://api.openalex.org/authors?group-by=last\_known\_institution.continent\&filter=cited\_by\_count:%3E100)
* Get works where at least one author's institution is located in the Global South\
  [https://api.openalex.org/works?filter=institutions.country.is\_global\_south:true](https://api.openalex.org/works?filter=institutions.country.is\_global\_south:true)

### Filters

There are three ways to use geographic region filters:

| Endpoint     | Format                                                                |
| ------------ | --------------------------------------------------------------------- |
| Authors      | `/authors?filter=last_known_institution.country.<region_filter>:true` |
| Institutions | `/institutions?filter=country.<region_filter>:true`                   |
| Works        | `/works?filter=institutions.country.<region_filter>:true`             |

The `<region_filter>` accepts a continent boolean filter, or Global South boolean filter as described below.

#### **Continent Region Filters**

Countries are mapped to continents using data from the [United Nations Statistics Division](https://unstats.un.org/unsd/methodology/m49/). You can see the actual mapping used by the API [here](https://github.com/ourresearch/openalex-elastic-api/blob/master/countries.py). The filters for each continent are:

| Continent     | Boolean Filter     |
| ------------- | ------------------ |
| Africa        | `is_africa`        |
| Antarctica    | `is_antarctica`    |
| Asia          | `is_asia`          |
| Europe        | `is_europe`        |
| North America | `is_north_america` |
| Oceania       | `is_oceania`       |
| South America | `is_south_america` |

#### **Global South Region Filter**

The Global South is a term used to identify regions within Latin America, Asia, Africa, and Oceania. Our source for this group of countries is the [United Nations Finance Center for South-South Cooperation](http://www.fc-ssc.org/en/partnership\_program/south\_south\_countries). The filter is:

| Region       | Boolean Filter    |
| ------------ | ----------------- |
| Global South | `is_global_south` |

### Group by

You can group by geographic region to collect counts by continent or region.

* Group institutions by continent\
  [https://api.openalex.org/institutions?group-by=continent](https://api.openalex.org/institutions?group-by=continent)

```json
{
  key: "Europe",
  key_display_name: "Europe",
  count: 41382
},
{
  key: "Global South",
  key_display_name: "Global South",
  count: 37458
},
{
  key: "Asia",
  key_display_name: "Asia",
  count: 20432
}...
```

#### Available group by fields

There are three ways to group by global region or continent:

| Endpoint     | Format                                                    |
| ------------ | --------------------------------------------------------- |
| Authors      | `/authors?group-by=last_known_institution.<region_group>` |
| Institutions | `/institutions?group-by=<region_group>`                   |
| Works        | `/works?group-by=institutions.<region_group>`             |

The two region groups are:

* `geographic_region` - display all available regions (currently continents and the Global South)
* `continent` - continents only

For example, to see all continents and Global South, you can use:

* [https://api.openalex.org/institutions?group-by=geographic\_region](https://api.openalex.org/institutions?group-by=geographic\_region)

To limit the group to continents you can use:

* [https://api.openalex.org/institutions?group-by=continent](https://api.openalex.org/institutions?group-by=continent)
