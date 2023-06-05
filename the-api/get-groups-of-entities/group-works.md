# Group works

You can group works with the `group_by` parameter:

* Get counts of works by Open Access status:\
  [`https://api.openalex.org/works?group_by=oa_status`](https://api.openalex.org/works?group\_by=oa\_status)

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](./) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/works` group\_by attributes

{% hint style="danger" %}
The `host_venue` and `alternate_host_venues` properties have been deprecated in favor of [`primary_location`](../../the-data/works/work-object/#primary\_location) and [`locations`](../../the-data/works/work-object/#locations). `host_venue` and `alternate_host_venues` are no longer available in the Work object, and trying to access them in filters or group-bys will return an error.
{% endhint %}

* [`authors_count`](../filters/filter-works.md#authors\_count)
* [`authorships.author.id`](../../the-data/works/work-object/#author) (alias `author.id`)
* [`authorships.author.orcid`](../../the-data/works/work-object/#author) (alias `author.orcid`)
* [`authorships.institutions.country_code`](../../the-data/works/work-object/#institutions) (alias `institutions.country_code`)
* [`authorships.institutions.continent`](../filters/filter-works.md#authorships.institutions.continent-alias-institutions.continent) (alias `institutions.continent`)
* [`authorships.institutions.is_global_south`](../filters/filter-works.md#authorships.institutions.is\_global\_south-alias-institutions.is\_global\_south)
* [`authorships.institutions.id`](../../the-data/works/work-object/#institutions) (alias `institutions.id`)
* [`authorships.institutions.ror`](../../the-data/works/work-object/#institutions) (alias `institutions.ror`)
* [`authorships.institutions.type`](../../the-data/works/work-object/#institutions) (alias `institutions.type`)
* [`authorships.is_corresponding`](../../the-data/works/work-object/authorship-object.md#is\_corresponding) (alias: `is_corresponding`): this marks whether or not we have corresponding author information for a given work
* [`apc_payment.price`](../../the-data/works/work-object/#apc\_payment)
* [`apc_payment.currency`](../../the-data/works/work-object/#apc\_payment)
* [`apc_payment.provenance`](../../the-data/works/work-object/#apc\_payment)
* [`apc_payment.price_usd`](../../the-data/works/work-object/#apc\_payment)
* [`best_oa_location.is_oa`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.license`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.source.host_organization`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.source.id`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.source.issn`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.source.type`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_oa_location.version`](../../the-data/works/work-object/#best\_oa\_location)
* [`best_open_version`](../filters/filter-works.md#best\_open\_version)
* [`cited_by_count`](../../the-data/works/work-object/#cited\_by\_count)
* [`cites`](../filters/filter-works.md#cites)
* [`concepts_count`](../filters/filter-works.md#concepts\_count)
* [`concepts.id`](../../the-data/works/work-object/#concepts)
* [`concepts.wikidata`](../../the-data/works/work-object/#concepts)
* [`corresponding_author_ids`](../../the-data/works/work-object/#corresponding\_author\_ids)
* [`corresponding_institution_ids`](../../the-data/works/work-object/#corresponding\_institution\_ids)
* [`grants.award_id`](../../the-data/works/work-object/#grants)
* [`grants.funder`](../../the-data/works/work-object/#grants)
* [`has_abstract`](../filters/filter-works.md#has\_abstract)
* [`has_doi`](../filters/filter-works.md#has\_doi)
* [`has_orcid`](../filters/filter-works.md#has\_orcid)
* [`has_pmid`](../filters/filter-works.md#has\_pmid)
* [`has_pmcid`](../filters/filter-works.md#has\_pmcid)
* [`has_ngrams`](../filters/filter-works.md#has\_ngrams)
* [`has_references`](../filters/filter-works.md#has\_references)
* [`is_retracted`](../../the-data/works/work-object/#is\_retracted)
* [`is_paratext`](../../the-data/works/work-object/#is\_paratext)
* [`journal`](../filters/filter-works.md#journal)
* [`language`](../../the-data/works/work-object/#language)
* [`locations.source.host_institutions_lineage`](../filters/filter-works.md#locations.source.host\_institution\_lineage)
* [`locations.source.publisher_lineage`](../filters/filter-works.md#locations.source.publisher\_lineage)
* [`locations_count`](../../the-data/works/work-object/#locations\_count)
* [`open_access.any_repository_has_fulltext`](../../the-data/works/work-object/#open\_access)
* [`open_access.is_oa`](../../the-data/works/work-object/#is\_oa-1) (alias `is_oa`)
* [`open_access.oa_status`](../../the-data/works/work-object/#oa\_status) (alias `oa_status`)
* [`primary_location.is_oa`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.license`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.source.has_issn`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.source.host_organization`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.source.id`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.source.issn`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.source.type`](../../the-data/works/work-object/#primary\_location)
* [`primary_location.version`](../../the-data/works/work-object/#primary\_location)
* [`publication_year`](../../the-data/works/work-object/#publication\_year)
* [`repository`](../filters/filter-works.md#repository)
* [`version`](../../the-data/works/work-object/#version)
