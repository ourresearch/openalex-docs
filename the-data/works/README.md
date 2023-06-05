# 📄 Works

***

### description: Journal articles, books, datasets, and theses

## 📄 Works

Works are scholarly documents like journal articles, books, datasets, and theses. OpenAlex indexes over 240M works, with about 50,000 added daily. You can access a work in the OpenAlex API like this:

* Get the work with the DOI `https://doi.org/10.7717/peerj.4375` [https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375](https://api.openalex.org/works/https://doi.org/10.7717/peerj.4375)

That will return a [`Work`](work-object/) object, describing everything OpenAlex knows about the work with that ID. We collect new works from many sources, including Crossref, PubMed, institutional and discipline-specific repositories (eg, arXiv). Many older works come from the now-defunct Microsoft Academic Graph.

Works are linked to other works via the [`referenced_works`](work-object/#referenced\_works) (outgoing citations), [`cited_by_api_url`](work-object/#cited\_by\_api\_url) (incoming citations), and [`related_works`](work-object/#related\_works) properties.

### What's next

Learn more about what you can do with works:

* [The Work object](work-object/)
* [Get a single work](get-a-single-work.md)
* [Get lists of works](get-lists-of-works.md)
* [Filter works](../../the-api/filters/filter-works.md)
* [Search for works](search-works.md)
* [Group works](group-works.md)
* [Get N-grams](get-n-grams.md)
