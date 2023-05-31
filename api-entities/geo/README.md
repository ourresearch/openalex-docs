***

## description: Where things are in the world

# 🌎 Geo

While geo is not a core entity within OpenAlex, geography is central to categorizing scholarly data. That's why OpenAlex uses United Nations data to divide the globe into continents and regions that makes filtering data easier.&#x20;

Here are some ways you can filter and group by continents and the [Global South](https://en.wikipedia.org/wiki/Global_North_and_Global_South).&#x20;

*   Get institutions located in South America\
    [https://api.openalex.org/institutions?filter=continent:south\_\_\_america](https://api.openalex.org/institutions?filter=continent:south_america)
*   Get works where at least one author's institution is located in the Global South\
    <https://api.openalex.org/works?filter=institutions.is_global_south:true>
*   Group highly-cited authors by their last known institution's continent\
    [https://api.openalex.org/authors?group-by=last\_known\_institution.continent\&filter=cited\_by\_count:>100](https://api.openalex.org/authors?group-by=last_known_institution.continent\&filter=cited_by_count:%3E100)

## What's next

Learn more about what you can do with geo:

*   [Continents](continents.md)
*   [Regions](regions.md)
