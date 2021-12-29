# Entity objects

So far we've talked about ways to access the OpenAlex data. Now it's time to discuss the attributes of that data itself.

## Entity objects

The OpenAlex dataset describes scholarly _entities_ and how those entities are connected to each other. There are five types of entities, each with its own object:

* :page\_facing\_up: [Works](work.md) are papers, books, datasets, etc; they _cite_ other works
* :woman: [Authors](author.md) are people who _create_ works
* :books: [Venues](venue.md) are journals and repositories that _host_ works
* :school: [Institutions](institution.md) are universities and other orgs that are _affiliated with_ works (via authors)
* :bulb: [Concepts](concept.md) _tag_ Works with a topic

Together, these make a huge web (or more technically, heterogeneous directed [graph](https://en.wikipedia.org/wiki/Graph\_theory)) of of hundreds of millions of entities and over a billion connections between them all..

## License

All OpenAlex data is made available under the [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/). That means it's in the public domain, and free to use in any way you like. We appreciate attribution where it's convenient, but it's not at all necessary.

## Sources

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## The OpenAlex ID

The OpenAlex ID is the primary key for all entities. Its canonical format is as a URL shaped like this: `https://openalex.org/<OpenAlexID>`. Example: [https://openalex.org/W2741809807](https://openalex.org/W2741809807)

Following the URL will take you to the resource that the ID is attached to. By default, the resource will be represented by a webpage. But if you append a `.json` to it, you'll get the same resource in JSON via our REST API.

Because OpenAlex was originally launched as a replacement for Microsoft Academic Graph (MAG), OpenAlex IDs are designed to be somewhat backwards-compatible with MAG IDs. For&#x20;

## Dehydrated objects

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Coverage

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Reporting bugs

OpenAlex is still very new, and so you'll probably encounter some bugs as you look through the data. Please report these by emailing us at **team@ourresearch.org.**

