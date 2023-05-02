# Group works

You can group works with the `group_by` parameter:

* Get counts of works by Open Access status:\
  [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group\_by=oa\_status)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/works` group\_by attributes

* [`authors_count`](filter-works.md#authors\_count)
* [`authorships.author.id`](work-object/#author) (alias `author.id`)
* [`authorships.author.orcid`](work-object/#author) (alias `author.orcid`)
* [`authorships.institutions.country_code`](work-object/#institutions) (alias `institutions.country_code`)
* [`authorships.institutions.continent`](filter-works.md#authorships.institutions.continent-alias-institutions.continent) (alias `institutions.continent`)
* [`authorships.institutions.is_global_south`](filter-works.md#authorships.institutions.is\_global\_south-alias-institutions.is\_global\_south)
* [`authorships.institutions.id`](work-object/#institutions) (alias `institutions.id`)
* [`authorships.institutions.ror`](work-object/#institutions) (alias `institutions.ror`)
* [`authorships.institutions.type`](work-object/#institutions) (alias `institutions.type`)
* [`authorships.is_corresponding`](work-object/#is\_corresponding) (alias: `is_corresponding`)
* [`best_oa_location.is_oa`](work-object/#best\_oa\_location)
* [`best_oa_location.license`](work-object/#best\_oa\_location)
* [`best_oa_location.source.host_organization`](work-object/#best\_oa\_location)
* [`best_oa_location.source.id`](work-object/#best\_oa\_location)
* [`best_oa_location.source.issn`](work-object/#best\_oa\_location)
* [`best_oa_location.source.type`](work-object/#best\_oa\_location)
* [`best_oa_location.version`](work-object/#best\_oa\_location)
* [`best_open_version`](filter-works.md#best\_open\_version)
* [`cited_by_count`](work-object/#cited\_by\_count)
* [`cites`](filter-works.md#cites)
* [`concepts_count`](filter-works.md#concepts\_count)
* [`concepts.id`](work-object/#concepts)
* [`concepts.wikidata`](work-object/#concepts)
* [`corresponding_author_ids`](work-object/#corresponding\_author\_ids)
* [`corresponding_institution_ids`](work-object/#corresponding\_institution\_ids)
* [`grants.award_id`](work-object/#grants)
* [`grants.funder`](work-object/#grants)
* [`has_abstract`](filter-works.md#has\_abstract)
* [`has_doi`](filter-works.md#has\_doi)
* [`has_orcid`](filter-works.md#has\_orcid)
* [`has_pmid`](filter-works.md#has\_pmid)
* [`has_pmcid`](filter-works.md#has\_pmcid)
* [`has_ngrams`](filter-works.md#has\_ngrams)
* [`has_references`](filter-works.md#has\_references)
* [`is_retracted`](work-object/#is\_retracted)
* [`is_paratext`](work-object/#is\_paratext)
* [`journal`](filter-works.md#journal)
* [`locations.source.host_institutions_lineage`](filter-works.md#locations.source.host\_institution\_lineage)
* [`locations.source.publisher_lineage`](filter-works.md#locations.source.publisher\_lineage)
* [`open_access.any_repository_has_fulltext`](work-object/#open\_access)
* [`open_access.is_oa`](work-object/#is\_oa-1) (alias `is_oa`)
* [`open_access.oa_status`](work-object/#oa\_status) (alias `oa_status`)
* [`primary_location.is_oa`](work-object/#primary\_location)
* [`primary_location.license`](work-object/#primary\_location)
* [`primary_location.source.has_issn`](work-object/#primary\_location)
* [`primary_location.source.host_organization`](work-object/#primary\_location)
* [`primary_location.source.id`](work-object/#primary\_location)
* [`primary_location.source.issn`](work-object/#primary\_location)
* [`primary_location.source.type`](work-object/#primary\_location)
* [`primary_location.version`](work-object/#primary\_location)
* [`publication_year`](work-object/#publication\_year)
* [`repository`](filter-works.md#repository)
* [`version`](work-object/#version)
