---
description: >-
  This page documents each of the columns and tables in the MAG format data
  dump, as well as how they all connect to one another.
---

# MAG format schema

If you're migrating to OpenAlex from MAG, you'll want to check out the [MAG migration guide](https://openalex.org/mag-migration-guide) for more info.

You may also want to pay particular attention to tables and columns marked [📦️ARCHIVAL](https://openalex.org/mag-migration-guide#data-changes-archival) (not updated after Jan 3) and [🔥NEW](https://openalex.org/mag-migration-guide#data-changes-archival) (in OpenAlex, but not MAG).

## ![](../../.gitbook/assets/image.png)

## Tables&#x20;

Affiliations&#x20;

AuthorExtendedAttributes&#x20;

Authors&#x20;

ConferenceInstances&#x20;

ConferenceSeries&#x20;

EntityRelatedEntities&#x20;

FieldOfStudyChildren&#x20;

FieldOfStudyExtendedAttributes&#x20;

FieldsOfStudy&#x20;

Journals&#x20;

PaperAbstractsInvertedIndex&#x20;

PaperAuthorAffiliations&#x20;

PaperCitationContexts&#x20;

PaperExtendedAttributes&#x20;

PaperFieldsOfStudy&#x20;

PaperMeSH&#x20;

PaperRecommendations&#x20;

PaperReferences&#x20;

PaperResources Papers&#x20;

PaperUrls&#x20;

RelatedFieldOfStudy

## Affiliations

Base table for affiliations/institutions (mag/Affiliations.txt)

| Field Name       | Data Type | Description                                                                 |
| ---------------- | --------- | --------------------------------------------------------------------------- |
| AffiliationId    | bigint    | PRIMARY KEY                                                                 |
| Rank             | integer   | ARCHIVAL; no new ranks will be added after Jan 3.                           |
| NormalizedName   | varchar   | UPDATED; slightly different normalization algorithm                         |
| DisplayName      | varchar   |                                                                             |
| GridId           | varchar   | ARCHIVAL; RorId is the new standard identifier for organizations            |
| RorId            | varchar   | NEW; ROR for this organization, see https://ror.org, https://ror.org/:RorId |
| OfficialPage     | varchar   |                                                                             |
| WikiPage         | varchar   |                                                                             |
| PaperCount       | bigint    |                                                                             |
| PaperFamilyCount | bigint    | ARCHIVAL; same value as PaperCount after Jan 3                              |
| CitationCount    | bigint    |                                                                             |
| Iso3166Code      | varchar   | Two-letter country codes, see https://en.wikipedia.org/wiki/ISO\_3166-2     |
| Latitude         | real      |                                                                             |
| Longitude        | real      |                                                                             |
| CreatedDate      | varchar   |                                                                             |
| UpdatedDate      | timestamp | NEW; set values updated from new ror data                                   |

## AuthorExtendedAttributes&#x20;

Additional author name representations (mag/AuthorExtendedAttributes.txt)



## Authors&#x20;

Base table for authors (mag/Authors.txt)

## ConferenceInstances&#x20;

📦️ ARCHIVAL; Base table for Conference Instances (mag/ConferenceInstances.txt)

## ConferenceSeries&#x20;

📦️ ARCHIVAL; Base table for Conference Series (mag/ConferenceSeries.txt)

## EntityRelatedEntities&#x20;

📦️ ARCHIVAL;  Relationship between papers, authors, fields of study. (advanced/EntityRelatedEntities.txt)

## FieldOfStudyChildren&#x20;

Relationship between Fields of Study (advanced/FieldOfStudyChildren.txt)

## FieldOfStudyExtendedAttributes&#x20;

Other identifiers for Fields of Study (advanced/FieldOfStudyExtendedAttributes.txt)

## FieldsOfStudy&#x20;

Base table for Fields of Study (advanced/FieldsOfStudy.txt)

## Journals&#x20;

Base table for Journals (mag/Journals.txt)

## PaperAbstractsInvertedIndex&#x20;

Inverted index of abstracts (nlp/PaperAbstractsInvertedIndex.txt{\*} split across multiple files)

## PaperAuthorAffiliations&#x20;

Links between papers, authors, and affiliations/institutions. NOTE: It is possible to have multiple rows with same (PaperId, AuthorId, AffiliationId) when an author is associated with multiple affiliations. (mag/PaperAuthorAffiliations.txt)

## PaperCitationContexts&#x20;

📦️ ARCHIVAL; citation contexts (nlp/PaperCitationContexts.txt)

## PaperExtendedAttributes&#x20;

Extra paper identifiers (mag/PaperExtendedAttributes.txt)

## PaperFieldsOfStudy&#x20;

Linking table from papers to fields, with score (advanced/PaperFieldsOfStudy.txt)

## PaperMeSH&#x20;

MeSH headings assigned to the paper by PubMed (advanced/PaperMeSH.txt)

## PaperRecommendations&#x20;

Paper recommendations with score (advanced/PaperRecommendations.txt)

## PaperReferences&#x20;

Paper references and, in reverse, citations (mag/PaperReferences.txt)

## PaperResources&#x20;

📦️ ARCHIVAL; not updated after Jan 3. Data and code urls associated with papers (mag/PaperResources.txt)

## PaperUrls&#x20;

Urls for the paper (mag/PaperUrls.txt)

## Papers&#x20;

Main data for papers (mag/Papers.txt)

## RelatedFieldOfStudy&#x20;

Relationships between fields of study (advanced/RelatedFieldOfStudy.txt)

