# FAQ

### How do I cite OpenAlex

See our [citation section here.](../#citation)

### Are OpenAlex IDs stable?

Yes! The work associated with ID W1234 will keep the ID W1234.

At some point we might merge duplicated works, authors, etc that already have assigned IDs. At that point we will expand the schema to include synonym ID data.

### Can you index my journal?

We automatically index new journals and articles so there is nothing you need to do. We primarily retrieve new records from [Crossref](https://www.crossref.org/). So if you are not seeing your journal or article in OpenAlex, it is best to check if it is in Crossref with a query like `https://api.crossref.org/works/<doi>` ([example](https://api.crossref.org/works/10.1097/HS9.0000000000000014)). We do not curate journals or limit which journals will be included in OpenAlex. So any discoverable journals will be added to the data set.

If your example DOI is in Crossref but not in OpenAlex, please send us a [support request](https://openalex.org/help) so we can look into it further!

### Do you disambiguate authors?

Yes. Using coauthors, references, and other features of the data, we can tell that the same Jane Smith wrote both "Frog behavior" and "Frogs: A retrospective," but it's a different Jane Smith who wrote "Oats before boats: The breakfast customs of 17th-Century Dutch bargemen."

### Do you gather author affiliations?

Yes. We automatically gather and normalize author affiliations from both structured and unstructured sources.

### Where does your data come from?

OpenAlex is not doing this alone! Rather, we're aggregating and standardizing data from a whole bunch of other great projects, like a river fed by many tributaries. Our two most important data sources are [MAG](https://aka.ms/msracad) and [Crossref.](https://www.crossref.org/) Other key sources include:

* [ORCID](https://orcid.org/)
* [ROR](https://ror.org/)
* [DOAJ](https://doaj.org/)
* [Unpaywall](https://unpaywall.org/)
* [Pubmed](https://pubmed.ncbi.nlm.nih.gov/)
* [Pubmed Central](https://www.ncbi.nlm.nih.gov/pmc/)
* [The ISSN International Centre](https://www.issn.org/)
* [Internet Archive](https://archive.org/details/GeneralIndex)
* Web crawls
* Subject-area and institutional repositories from [arXiv](https://arxiv.org/) to [Zenodo](https://zenodo.org/) and everywhere in between

### How often is the data updated?

For now, the database snapshot is updated about once per month. However, in the future we will probably offer a much faster update cadence (approximately daily) as an optional, [paid upgrade](faq.md#whats-your-sustainability-plan). If you're interested in that, drop us a line at [team@ourresearch.org](mailto:team@ourresearch.org).

### Is your data quality better than \_\_\_\_?

Our dataset is still very young, so there's not a lot of systematic research comparing OpenAlex to peer databases like MAG, Scopus, Dimensions, etc. We're currently working on publishing some research like that ourselves. Our initial finding are very encouraging...we believe OpenAlex is already comparable in coverage and accuracy to the more established players--but OpenAlex is 100% open data, built on 100% open-source code. We think that's a really important feature. We will also continue improving the data quality in the days, weeks, months, and years ahead!

### How is OpenAlex licensed?

OpenAlex data is licensed as [CC0](https://creativecommons.org/publicdomain/zero/1.0/) so it is free to use and distribute.

### How much does OpenAlex cost?

It's free! The [website](https://explore.openalex.org), the [API](../), and the [database snapshot](../the-data-snapshot/openalex-snapshot.md) are all available at no charge. As a nonprofit, making this data free and open is part of our mission.

For those who would like a higher level of service and to provide direct financial support for our mission, we offer [OpenAlex Premium. Click here to learn more.](https://openalex.org/pricing)

### What's your sustainability plan?

Our nonprofit (OurResearch) has a ten-year track record of building sustainable scholarly infrastructure, and a formal commitment to sustainability as part of [our adoption of the POSI principles.](https://blog.ourresearch.org/posi/)

We're currently still exploring our options for OpenAlex's sustainability plan. Thanks to a generous grant from [Arcadia—a charitable fund of Lisbet Rausing and Peter Baldwin](https://www.arcadiafund.org.uk/), we've got lots of runway, and we don't need to roll anything out in a rush.

Our Unpaywall project (a free index of the world's open-access research literature) has been self-sustaining via a freemium revenue model for nearly five years, and we have recently introduced a similar model in [OpenAlex Premium. ](https://openalex.org/pricing)Access to the data will always be free for everyone, but OpenAlex Premium offers several benefits in service above the services we offer for free.
