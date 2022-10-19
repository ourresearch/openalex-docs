# Global regions

We've made it easy to filter and group by global regions, such as continents and the Global South. Let's say you want to find the number of institutions in South America. That would involve looking up a list of country codes and building a query like:

* [https://api.openalex.org/institutions?filter=country\_code:ar|br|cl](https://api.openalex.org/institutions?filter=country\_code:ar|br|cl)

But you still have quite a few countries to add! Instead you can do:

* [https://api.openalex.org/institutions?filter=country.is\_south_\__america:true](https://api.openalex.org/institutions?filter=country.is\_south\_america:true)

To see a detailed count by country, you can add a group-by for the country\_code:

* [https://api.openalex.org/institutions?filter=country.is\_south\_america:true\&group-by=country\_code](https://api.openalex.org/institutions?filter=country.is\_south\_america:true\&group-by=country\_code)

Which will give results like this:

```json
{
  key: "BR",
  key_display_name: "Brazil",
  count: 1805
},
{
  key: "AR",
  key_display_name: "Argentina",
  count: 348
},
{
  key: "CO",
  key_display_name: "Colombia",
  count: 340
}...
```

### Filter by global region

Every country\_code filter in OpenAlex has a corresponding regional boolean filter, falling into one of these groups:

#### **Continents**

Countries are mapped to continents using data from the [United Nations Statistics Division](https://unstats.un.org/unsd/methodology/m49/). You can see the actual mapping used by the API [here](https://github.com/ourresearch/openalex-elastic-api/blob/master/countries.py).

* `is_africa`
* `is_antarctica`
* `is_asia`
* `is_europe`
* `is_north_america`
* `is_oceania`
* `is_south_america`

#### **Global South**

The Global South is a term used to identify regions within Latin America, Asia, Africa, and Oceania. Our source for this group of countries in the API is the [United Nations Finance Center for South-South Cooperation](http://www.fc-ssc.org/en/partnership\_program/south\_south\_countries).

* `is_global_south`

### Group by global region

You can group regions or continents using:

* `global_region` - display all available regions (currently continents and the Global South)
* `continent` - continents only
