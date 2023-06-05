# 🏫 Institutions

***

### description: Universities and other organizations to which authors claim affiliations

## 🏫 Institutions

Institutions are universities and other organizations to which authors claim affiliations. OpenAlex indexes about 109,000 institutions.

You can get an institution from the OpenAlex API like this:

* Get the institution with ROR ID `https://ror.org/00jmfr291`\
  [https://api.openalex.org/institutions/https://ror.org/00jmfr291](https://api.openalex.org/institutions/https://ror.org/00jmfr291)

The [Canonical External ID](../../the-api/get-single-entities/#canonical-external-ids) for institutions is the ROR ID. All institutions in OpenAlex have ROR IDs.

Our information about institutions comes from metadata found in Crossref, PubMed, ROR, MAG, and publisher websites. In order to link institutions to works, we parse every affiliation listed by every author. These affiliation strings can be quite messy, so we’ve trained an algorithm to interpret them and extract the actual institutions with reasonably high reliability.

For a simple example: we will treat both “MIT, Boston, USA” and “Massachusetts Institute of Technology” as the same institution ([https://ror.org/042nb2s44](https://ror.org/042nb2s44)).

Institutions are linked to works via the [`works.authorships`](../works/work-object/#authorships) property.

### What's next

Learn more about what you can do with institutions:

* [The Institution object](institution-object.md)
* [Get a single institution](get-a-single-institution.md)
* [Get lists of institutions](get-lists-of-institutions.md)
* [Filter institutions](../../the-api/filters/filter-institutions.md)
* [Search institutions](search-institutions.md)
* [Group institutions](group-institutions.md)
