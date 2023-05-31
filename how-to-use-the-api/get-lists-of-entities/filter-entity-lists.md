# Filter entity lists

Filters narrow the list down to just entities that meet a particular condition--specifically, a particular value for a particular attribute.&#x20;

A list of filters are set using the `filter` parameter,  formatted like this: `filter=attribute:value,attribute2:value2`. Examples:

*   Get the works whose [type](../../api-entities/works/work-object/#type) is `book`:\
    [`https://api.openalex.org/works?filter=type:book`](https://api.openalex.org/works?filter=type:book)
*   Get the authors whose name is Einstein:\
    [`https://api.openalex.org/authors?filter=display_name.search:einstein`](https://api.openalex.org/authors?filter=display_name.search:einstein)\`\`

Filters are case-insensitive.&#x20;

## Logical expressions

### Inequality

For numerical filters, use the less-than (`<`) and greater-than (`>`) symbols to filter by inequalities. Example:

*   Get sources that host more than 1000 works:\
    [`https://api.openalex.org/sources?filter=works_count:>1000`](https://api.openalex.org/sources?filter=works_count:%3E1000)

Some attributes have special filters that act as syntactic sugar around commonly-expressed inequalities: for example, the `from_publication_date` filter on `works`. See the endpoint-specific documentation below for more information. Example:&#x20;

*   Get all works published between 2022-01-01 and 2022-01-26 (inclusive):\
    [`https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26`](https://api.openalex.org/works?filter=from_publication_date:2022-01-01,to_publication_date:2022-01-26)

### Negation (NOT)

You can negate any filter, numerical or otherwise, by prepending the exclamation mark symbol (`!`) to the filter value. Example:

*   Get all institutions *except* for ones located in the US:\
    [`https://api.openalex.org/institutions?filter=country_code:!us`](https://api.openalex.org/institutions?filter=country_code:!us)\`\`

### Intersection (AND)

By default, the returned result set includes only records that satisfy *all* the supplied filters. In other words, filters are combined as an AND query. Example:

*   Get all works that have been cited more than once *and* are free to read:\
    [`https://api.openalex.org/works?filter=cited_by_count:>1,is_oa:true`](https://api.openalex.org/works?filter=cited_by_count:%3E1,is_oa:true)\`\`
*   Get all the works that have an author from France *and* an author from the UK:\
    [`https://api.openalex.org/works?filter=institutions.country_code:fr,institutions.country_code:gb`](https://api.openalex.org/works?filter=institutions.country_code:fr,institutions.country_code:gb)\`\`

You can repeat a filter to create an AND query within a single attribute. Example:

*   Get all works that have concepts "Medicine" *and* "Artificial Intelligence":\
    [`https://api.openalex.org/works?filter=concepts.id:C71924100,concepts.id:C154945302`](https://api.openalex.org/works?filter=concepts.id:C71924100,concepts.id:C154945302)\`\`

### Addition (OR)

Use the pipe symbol (`|`) to input lists of values such that *any* of the values can be satisfied--in other words, when you separate filter values with a pipe, they'll be combined as an `OR` query. Example:

*   Get all the works that have an author from France or an author from the UK:\
    [`https://api.openalex.org/works?filter=institutions.country_code:fr|gb`](https://api.openalex.org/works?filter=institutions.country_code:fr|gb)\`\`

This is particularly useful when you want to retrieve a many records by ID all at once. Instead of making a whole bunch of singleton calls in a loop, you can make one call, like this:

*   Get the works with DOI `10.1371/journal.pone.0266781` *or* with DOI `10.1371/journal.pone.0267149` (note the pipe separator between the two DOIs): \
    <https://api.openalex.org/works?filter=doi:https://doi.org/10.1371/journal.pone.0266781|https://doi.org/10.1371/journal.pone.0267149>

You can combine up to 50 values for a given filter in this way. See our [blog post](https://blog.ourresearch.org/fetch-multiple-dois-in-one-openalex-api-request/) for a tutorial.

{% hint style="danger" %}
You can use OR for values *within* a given filter, but not *between* different filters. So this, for example, **doesn't work and will return an error**:&#x20;

*   Get either French works *or* ones published in the journal with ISSN 0957-1558:\
    [`https://api.openalex.org/works?filter=institutions.country_code:fr|primary_location.source.issn:0957-1558`](https://api.openalex.org/works?filter=institutions.country_code:fr|primary_location.source.issn:0957-1558)\`\`
    {% endhint %}

## Available Filters

The filters for each entity can be found here:

*   [Works](../../api-entities/works/filter-works.md)
*   [Authors](../../api-entities/authors/filter-authors.md)
*   [sources](../../api-entities/sources/filter-sources.md)
*   [Institutions](../../api-entities/institutions/filter-institutions.md)
*   [Concepts](../../api-entities/concepts/filter-concepts.md)
