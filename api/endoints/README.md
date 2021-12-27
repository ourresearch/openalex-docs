# Endoints

There are five main types of API endpoints, one for each type of entity in OpenAlex:

* Works (papers, books, datasets, etc)
* Authors (people who create Works)
* Venues (journals and repositories that host Works)
* Institutions (universities and other orgs that employ Authors)
* Concepts (things that Works are about)

For each type of entity, there are two endpoints: a singleton endpoint and a list endpoint.

## Singleton endpoints

There's one singleton endpoint for each type of entity. Each singleton endpoint gets you exactly one specific entity, based on its ID. You call it using a URL like this: `/:entity_name/:entity_id.`&#x20;

For example, to get the Venue whose ISSN is 2167-8359, you would call [`https://api.openalex.org/venues/issn:2167-8359`](https://api.openalex.org/venues/issn:2167-8359)(for more on how to format IDs, see below). Singleton endpoints don't have any paging or support any query parameters. You just give us an ID, and we give you an entity.

## List endpoints

List endpoints are more complicated and more powerful. Each list endpoint gives you a list of entities that you can filter, search, sort, and group. You call it using a URL like `/:entity_name`, and then adding parameters.&#x20;

For example, if you wanted to see  <mark style="color:red;">**example here**</mark>

Here are the parameters that you can add:

### filter

* you can combine filters and it acts like AND
* format:
  * for strings: key:value
  * for dates and numbers, you can also use key:>value. for dates use iso 8601 format.
* dot filters

### search

* only searches the display\_name property
* searches stemmed and lemmatized

### sort

* you can sort by anything you can filter by.
* use sort:desc to sort descending

### group\_by

* returns a list of groups. here's what a group looks like.

### page

####

####

``

main topics

* general description of the five main endpoints
* authentication: it's anonymous. Polite pool and Slow pool.  See [Crossref](https://github.com/CrossRef/rest-api-doc#good-manners--more-reliable-service).
  * how to get in the polite pool. you don't need to give us a name.
* you can use your browser, if you install a jsonview extension
* rate limits: keep below 100k for now.
* tip: if you want to make millions of API calls a day, it'll probably be cheaper for you to just download the complete dataset.
* response format is json
* cost is free
* IDs
* endpoints
  * entity
    * IDs
  * entity-list
    * parameters
      * filters
      * search
      * sort
      * group\_by
      * page



## ID formats

stuff about what kinds of id formats we accept.
