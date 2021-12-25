# 📄 Works

## `GET /works/:id`

Get a work from an ID. Example: [https://api.openalex.org/works/w2741809807](https://api.openalex.org/works/w2741809807)&#x20;

### Path parameters

#### `:id`

The ID of the work you want to see. We support these IDs and formats:

* OpenAlex ID as: `w123`, `openalex:w123`, or `https://openalex.org/w123`
* DOI as: `doi:10.123` or `https://doi.org/10.123`
* MAG ID as `mag:123`
* PMID as `pmid:123` or `https://pubmed.ncbi.nlm.nih.gov/123`

### Returns

* `200`: A [**Work**](../../data/work.md) object
* `404`: We couldn't find any work with that ID
* `500`: Oops we broke



``
