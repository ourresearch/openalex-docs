# Known issues

OpenAlex is still very new, and so you'll encounter some bugs as you look through the data. This page documents the ones we currently know about.&#x20;

{% hint style="info" %}
&#x20;Please report any other issues you find by emailing us at **support@openalex.org**
{% endhint %}

## Some strings not yet matched to entities.

We've got a lot of strings floating around for venues and institutions that haven't actually been linked to a [`Venue`](about-the-data/venue.md) or [`Institution`](about-the-data/institution.md) entity in the database. These show up as objects missing an `id` property, in these fields:

* [HostVenue](https://docs.openalex.org/entity-objects/work#the-hostvenue-object) objects (found in the [`Work.host_venue`](https://docs.openalex.org/entity-objects/work#host\_venue) and [`Work.alternate_host_venues`](https://docs.openalex.org/entity-objects/work#alternate\_host\_venues) properties).
* [`Dehydrated Institution`](https://docs.openalex.org/entity-objects/institution#the-dehydratedinstitution-object) `` objects found as part of the [`Authorships`](https://docs.openalex.org/entity-objects/work#the-authorship-object) objects in the [`Work.authorships property`](https://docs.openalex.org/entity-objects/work#authorships).

These ID-less objects are tricky because they can't do most of the things a regular entity can. They're just a suitcase for a name, right now.  They are inherited from MAG, and we plan to fix them. Over the next month or so, we'll be processing all these stub entities, clustering them together, and minting tens of millions of new entities from them.

## Questionable dates

Some dates, notably publication dates, come from external sources like publishers and are included in OpenAlex as-is. Dates in the future can be especially suspect.&#x20;

[https://openalex.org/W4205467938](https://openalex.org/W4205467938) has a publication date of 2023-01-31, for example (if you're reading this after February 2023, that date used to be in the future). This date came from publisher-submitted [Crossref metadata](https://api.crossref.org/v1/works/10.1145/3485132) for this article. Looking at [https://dl.acm.org/doi/10.1145/3485132](https://dl.acm.org/doi/10.1145/3485132), this does seem to be part of an ACM issue-in-progress with a print publication date of 2023-01-31.

[https://openalex.org/W4200151376](https://openalex.org/W4200151376) has a publication date in _2029_. This also comes from the publisher's [Crossref metadata](https://api.crossref.org/v1/works/10.12960/tsh.2020.0006), but it's less plausible that the journal has an issue planned that far in advance. On [https://doi.org/10.12960/tsh.2020.0006](https://doi.org/10.12960/tsh.2020.0006), we see an accepted date of 2019-12-21 and a publication date of 2029-01-31, suggesting that the latter is a typo and the _publication\_date_ is wrong.&#x20;

