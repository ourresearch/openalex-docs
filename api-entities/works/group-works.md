# Group works

You can group works with the `group_by` parameter:

*   Get counts of works by Open Access status:\
    [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group_by=oa_status)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/works` group\_by attributes

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](work-object/#primary_location) and [`locations`](work-object/#locations). `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

*   [`authors_count`](filter-works.md#authors_count)
*   [`authorships.author.id`](work-object/#author) (alias `author.id`)
*   [`authorships.author.orcid`](work-object/#author) (alias `author.orcid`)
*   [`authorships.institutions.country_code`](work-object/#institutions) (alias `institutions.country_code`)
*   [`authorships.institutions.continent`](filter-works.md#authorships.institutions.continent-alias-institutions.continent) (alias `institutions.continent`)
*   [`authorships.institutions.is_global_south`](filter-works.md#authorships.institutions.is_global_south-alias-institutions.is_global_south)
*   [`authorships.institutions.id`](work-object/#institutions) (alias `institutions.id`)
*   [`authorships.institutions.ror`](work-object/#institutions) (alias `institutions.ror`)
*   [`authorships.institutions.type`](work-object/#institutions) (alias `institutions.type`)
*   [`authorships.is_corresponding`](./work-object/authorship-object.md#is_corresponding) (alias: `is_corresponding`): this marks whether or not we have corresponding author information for a given work
*   [`apc_payment.price`](./work-object/README.md#apc_payment)
*   [`apc_payment.currency`](./work-object/README.md#apc_payment)
*   [`apc_payment.provenance`](./work-object/README.md#apc_payment)
*   [`apc_payment.price_usd`](./work-object/README.md#apc_payment)
*   [`best_oa_location.is_oa`](work-object/#best_oa_location)
*   [`best_oa_location.license`](work-object/#best_oa_location)
*   [`best_oa_location.source.host_organization`](work-object/#best_oa_location)
*   [`best_oa_location.source.id`](work-object/#best_oa_location)
*   [`best_oa_location.source.issn`](work-object/#best_oa_location)
*   [`best_oa_location.source.type`](work-object/#best_oa_location)
*   [`best_oa_location.version`](work-object/#best_oa_location)
*   [`best_open_version`](filter-works.md#best_open_version)
*   [`cited_by_count`](work-object/#cited_by_count)
*   [`cites`](filter-works.md#cites)
*   [`concepts_count`](filter-works.md#concepts_count)
*   [`concepts.id`](work-object/#concepts)
*   [`concepts.wikidata`](work-object/#concepts)
*   [`corresponding_author_ids`](work-object/#corresponding_author_ids)
*   [`corresponding_institution_ids`](work-object/#corresponding_institution_ids)
*   [`grants.award_id`](work-object/#grants)
*   [`grants.funder`](work-object/#grants)
*   [`has_abstract`](filter-works.md#has_abstract)
*   [`has_doi`](filter-works.md#has_doi)
*   [`has_orcid`](filter-works.md#has_orcid)
*   [`has_pmid`](filter-works.md#has_pmid)
*   [`has_pmcid`](filter-works.md#has_pmcid)
*   [`has_ngrams`](filter-works.md#has_ngrams)
*   [`has_references`](filter-works.md#has_references)
*   [`is_retracted`](work-object/#is_retracted)
*   [`is_paratext`](work-object/#is_paratext)
*   [`journal`](filter-works.md#journal)
*   [`language`](work-object/#language)
*   [`locations.source.host_institutions_lineage`](filter-works.md#locations.source.host_institution_lineage)
*   [`locations.source.publisher_lineage`](filter-works.md#locations.source.publisher_lineage)
*   [`locations_count`](work-object/#locations_count)
*   [`open_access.any_repository_has_fulltext`](work-object/#open_access)
*   [`open_access.is_oa`](work-object/#is_oa-1) (alias `is_oa`)
*   [`open_access.oa_status`](work-object/#oa_status) (alias `oa_status`)
*   [`primary_location.is_oa`](work-object/#primary_location)
*   [`primary_location.license`](work-object/#primary_location)
*   [`primary_location.source.has_issn`](work-object/#primary_location)
*   [`primary_location.source.host_organization`](work-object/#primary_location)
*   [`primary_location.source.id`](work-object/#primary_location)
*   [`primary_location.source.issn`](work-object/#primary_location)
*   [`primary_location.source.type`](work-object/#primary_location)
*   [`primary_location.version`](work-object/#primary_location)
*   [`publication_year`](work-object/#publication_year)
*   [`repository`](filter-works.md#repository)
*   [`version`](work-object/#version)
