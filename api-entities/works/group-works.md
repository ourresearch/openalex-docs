# Group works

You can group works with the `group_by` parameter:

* Get counts of works by Open Access status:\
  [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group\_by=oa\_status)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/works` group\_by attributes

* ``[`alternate_host_venues.id`](work-object.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.license`](work-object.md#alternate\_host\_venues)``
* ``[`alternate_host_venues.version`](work-object.md#alternate\_host\_venues)``
* ``[`authors_count`](filter-works.md#authors\_count)``
* ``[`authorships.author.id`](work-object.md#author) (alias `author.id`)
* ``[`authorships.author.orcid`](work-object.md#author) (alias `author.orcid`)
* ``[`authorships.institutions.country_code`](work-object.md#institutions) (alias `institutions.country_code`)
* ``[`authorships.institutions.continent`](filter-works.md#authorships.institutions.continent-alias-institutions.continent) (alias `institutions.continent`)
* ``[`authorships.institutions.is_global_south`](filter-works.md#authorships.institutions.is\_global\_south-alias-institutions.is\_global\_south)``
* ``[`authorships.institutions.id`](work-object.md#institutions) (alias `institutions.id`)
* ``[`authorships.institutions.ror`](work-object.md#institutions) (alias `institutions.ror`)
* ``[`authorships.institutions.type`](work-object.md#institutions) (alias `institutions.type`)
* ``[`best_oa_location.is_oa`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.license`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.source.id`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.source.issn`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.source.host_organization`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.source.type`](work-object.md#best\_oa\_location)``
* ``[`best_oa_location.version`](work-object.md#best\_oa\_location)``
* ``[`cited_by_count`](work-object.md#cited\_by\_count)``
* ``[`cites`](filter-works.md#cites)``
* ``[`concepts_count`](filter-works.md#concepts\_count)``
* ``[`concepts.id`](work-object.md#concepts)``
* ``[`concepts.wikidata`](work-object.md#concepts)``
* ``[`has_abstract`](filter-works.md#has\_abstract)``
* ``[`has_doi`](filter-works.md#has\_doi)``
* ``[`has_orcid`](filter-works.md#has\_orcid)``
* ``[`has_pmid`](filter-works.md#has\_pmid)``
* ``[`has_pmcid`](filter-works.md#has\_pmcid)``
* ``[`has_ngrams`](filter-works.md#has\_ngrams)``
* ``[`has_references`](filter-works.md#has\_references)``
* ``[`host_venue.id`](work-object.md#host\_venue) (alias `journal.id`)
* ``[`host_venue.issn`](work-object.md#host\_venue)``
* ``[`host_venue.license`](work-object.md#host\_venue)``
* ``[`host_venue.publisher`](work-object.md#host\_venue)``
* ``[`host_venue.version`](work-object.md#host\_venue)``
* ``[`is_retracted`](work-object.md#is\_retracted)``
* ``[`is_paratext`](work-object.md#is\_paratext)``
* ``[`open_access.is_oa`](work-object.md#is\_oa-1) (alias `is_oa`)
* ``[`open_access.oa_status`](work-object.md#oa\_status) (alias `oa_status`)
* ``[`primary_location.is_oa`](work-object.md#primary\_location)``
* ``[`primary_location.license`](work-object.md#primary\_location)``
* ``[`primary_location.source.has_issn`](work-object.md#primary\_location)``
* ``[`primary_location.source.host_organization`](work-object.md#primary\_location)``
* ``[`primary_location.source.id`](work-object.md#primary\_location)``
* ``[`primary_location.source.issn`](work-object.md#primary\_location)``
* ``[`primary_location.source.type`](work-object.md#primary\_location)``
* ``[`primary_location.version`](work-object.md#primary\_location)``
* ``[`publication_year`](work-object.md#publication\_year)``
* ``[`version`](work-object.md#version)``
