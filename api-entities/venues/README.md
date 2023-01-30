---
description: Journals and repositories that host works
---

# 📚 Venues

Venues are where works are hosted. OpenAlex indexes about 226,000 venues. There are several types, including journals, conferences, preprint repositories, and institutional repositories.

You can get venues from the OpenAlex API like this:

* Search for the journal Nature\
  [https://api.openalex.org/venues?search=nature](https://api.openalex.org/venues?search=nature)

The [Canonical External ID](../../how-to-use-the-api/get-single-entities.md#canonical-external-ids) for venues is ISSN-L, which is a special "main" ISSN assigned to every venue (venues tend to have multiple ISSNs). About 90% of venues in OpenAlex have an ISSN-L or ISSN.

Our information about venues comes from Crossref, the ISSN Network, and MAG. These datasets are joined automatically where possible, but there’s also a lot of manual combining involved. We do not curate journals, so any journal that is available in the data sources should make its way into OpenAlex.&#x20;

Several venues may host the same work. OpenAlex reports both the primary host venue (generally wherever the [version of record](https://en.wikipedia.org/wiki/Version\_of\_record) lives), and alternate host venues (like preprint repositories).

Venues are linked to works via the [`works.host_venue`](../works/work-object.md#host\_venue) and [`works.alternate_host_venues`](../works/work-object.md#alternate\_host\_venues) properties.

## What's next

Learn more about what you can do with venues:

* [The Venue object](venue-object.md)
* [Get a single venue](get-a-single-venue.md)
* [Get lists of venues](get-lists-of-venues.md)
* [Filter venues](filter-venues.md)
* [Search venues](search-venues.md)
* [Group venues](group-venues.md)
