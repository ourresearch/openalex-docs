# Group authors

You can group authors with the `group_by` parameter:

*   Get counts of authors by the last known institution continent:\
    [`https://api.openalex.org/authors?group_by=last_known_institution.continent`](https://api.openalex.org/authors?group_by=last_known_institution.continent)\`\`

Or you can group using one the attributes below.

{% hint style="info" %}
It's best to [read about group by](../../how-to-use-the-api/get-groups-of-entities.md) before trying these out. It will show you how results are formatted, the number of results returned, and how to sort results.
{% endhint %}

### `/authors` group\_by attributes

*   [`cited_by_count`](author-object.md#cited_by_count)
*   [`has_orcid`](filter-authors.md#has_orcid)
*   [`last_known_institution.continent`](filter-authors.md#last_known_institution.continent)
*   [`last_known_institution.country_code`](author-object.md#last_known_institution)
*   [`last_known_institution.id`](author-object.md#last_known_institution)
*   [`last_known_institution.is_global_south`](filter-authors.md#last_known_institution.is_global_south)
*   [`last_known_institution.ror`](author-object.md#last_known_institution)
*   [`last_known_institution.type`](author-object.md#last_known_institution)
*   [`summary_stats.2yr_mean_citedness`](author-object.md#summary_stats)
*   [`summary_stats.h_index`](author-object.md#summary_stats)
*   [`summary_stats.i10_index`](author-object.md#summary_stats)
*   [`works_count`](author-object.md#works_count)
