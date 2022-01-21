# Known issues

OpenAlex is still very new, and so you'll encounter some bugs as you look through the data. This page documents the ones we currently know about.&#x20;

{% hint style="info" %}
&#x20;Please report any other issues you find by emailing us at **team@ourresearch.org.**
{% endhint %}

## Some strings not yet matched to entities.

We've got a lot of strings floating around for venues and institutions that haven't actually been linked to a [`Venue`](about-the-data/venue.md) or [`Institution`](about-the-data/institution.md) entity in the database. These show up as objects missing an `id` property, in these fields:

* [HostVenue](https://docs.openalex.org/entity-objects/work#the-hostvenue-object) objects (found in the [`Work.host_venue`](https://docs.openalex.org/entity-objects/work#host\_venue) and [`Work.alternate_host_venues`](https://docs.openalex.org/entity-objects/work#alternate\_host\_venues) properties).
* [`Dehydrated Institution`](https://docs.openalex.org/entity-objects/institution#the-dehydratedinstitution-object) `` objects found as part of the [`Authorships`](https://docs.openalex.org/entity-objects/work#the-authorship-object) objects in the [`Work.authorships property`](https://docs.openalex.org/entity-objects/work#authorships).

These ID-less objects are tricky because they can't do most of the things a regular entity can. They're just a suitcase for a name, right now.  They are inherited from MAG, and we plan to fix them. Over the next month or so, we'll be processing all these stub entities, clustering them together, and minting tens of millions of new entities from them.

## The download snapshot missing some strings.&#x20;

The native-format snapshot is currently _missing_ the "stub entities [described above](known-issues.md#some-strings-not-yet-matched-to-entities.): dehydrated `Venue` and `Institution` objects that don't have IDs, only strings.

These are however still available via the API, and in the MAG Format snapshot. The native-format snapshot will be updated in the next week to fix this inconsistency.

## Inverted abstract indices missing from native-format snapshot and some api endpoints.&#x20;

Sorry about that!  They got missed on the initial release.  We'll be adding them in in the next few weeks. They are live in the [single-entity API endpoints](https://docs.openalex.org/api#get-single-entities) now.

## Misspelled associated\_insitutions

We misspelled associated\_institutions key in the Institutions entity as associated\_insitutions. It is currently fixed in some places but not others.  Sorry about that! Will fix everywhere soon.

## MAG format snapshot has a few duplicate rows and escaping issues.

We're continuing to improve our processes to make sure the data in the MAG format is clean and easy to pull in to a relational database. This current release still has a few issues, but we'll try to fix these by the next release.
