---
description: >-
  This page documents each of the columns and tables in the MAG format data
  dump, as well as how they all connect to one another.
---

# MAG format schema

The MAG format snapshot is for people migrating to OpenAlex from MAG (Microsoft Academic Graph) —  you'll want to check out the [MAG migration guide](mag-migration-guide.md) for more info.&#x20;

You may also want to pay particular attention to tables and columns marked ❄️FROZEN (not updated) and 🔥NEW (data was not included in original MAG).

## ![](../../.gitbook/assets/image.png)

## Affiliations

Base table for affiliations/institutions (mag/Affiliations.txt)

| Field Name       | Data Type | Description                                                                                                          |
| ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| AffiliationId    | bigint    | PRIMARY KEY                                                                                                          |
| Rank             | integer   | ❄️FROZEN                                                                                                             |
| NormalizedName   | varchar   | UPDATED; slightly different normalization algorithm                                                                  |
| DisplayName      | varchar   |                                                                                                                      |
| GridId           | varchar   | ❄️FROZEN; RorId is the new standard identifier for organizations                                                     |
| RorId            | varchar   | 🔥NEW; ROR for this organization, see [https://ror.org](https://ror.org), https://ror.org/:RorId                     |
| OfficialPage     | varchar   |                                                                                                                      |
| WikiPage         | varchar   |                                                                                                                      |
| PaperCount       | bigint    |                                                                                                                      |
| PaperFamilyCount | bigint    | ❄️FROZEN; same value as PaperCount                                                                                   |
| CitationCount    | bigint    |                                                                                                                      |
| Iso3166Code      | varchar   | Two-letter country codes, see [https://en.wikipedia.org/wiki/ISO\_3166-2](https://en.wikipedia.org/wiki/ISO\_3166-2) |
| Latitude         | real      |                                                                                                                      |
| Longitude        | real      |                                                                                                                      |
| CreatedDate      | varchar   |                                                                                                                      |
| UpdatedDate      | timestamp | 🔥NEW; set values updated from new ror data                                                                          |

## AuthorExtendedAttributes&#x20;

Additional author name representations (mag/AuthorExtendedAttributes.txt)

| Field Name     | Data Type | Description                             |
| -------------- | --------- | --------------------------------------- |
| AuthorId       | bigint    | FOREIGN KEY REFERENCES Authors.AuthorId |
| AttributeType  | integer   | Possible values: 1=Alternative name     |
| AttributeValue | varchar   |                                         |

## Authors&#x20;

Base table for authors (mag/Authors.txt)

| Field Name             | Data Type | Description                                                                            |
| ---------------------- | --------- | -------------------------------------------------------------------------------------- |
| AuthorId               | bigint    | PRIMARY KEY                                                                            |
| Rank                   | integer   | ❄️FROZEN                                                                               |
| NormalizedName         | varchar   | UPDATED; slightly different normalization algorithm                                    |
| DisplayName            | varchar   |                                                                                        |
| Orcid                  | varchar   | 🔥NEW; ORCID identifier for this author (see [https://orcid.org](https://orcid.org)).  |
| LastKnownAffiliationId | integer   | FOREIGN KEY REFERENCES Affiliations.AffiliationId                                      |
| PaperCount             | bigint    |                                                                                        |
| PaperFamilyCount       | bigint    | ❄️FROZEN; same value as PaperCount                                                     |
| CitationCount          | bigint    |                                                                                        |
| CreatedDate            | varchar   |                                                                                        |
| UpdatedDate            | timestamp | 🔥NEW; set when changes are made going forward                                         |

## ConferenceInstances&#x20;

❄️FROZEN; Base table for Conference Instances (mag/ConferenceInstances.txt)

| Field Name               | Data Type | Description                                                |
| ------------------------ | --------- | ---------------------------------------------------------- |
| ConferenceInstanceId     | bigint    | PRIMARY KEY                                                |
| NormalizedName           | varchar   | UPDATED; slightly different normalization algorithm        |
| DisplayName              | varchar   |                                                            |
| ConferenceSeriesId       | bigint    | FOREIGN KEY REFERENCES ConferenceSeries.ConferenceSeriesId |
| Location                 | varchar   |                                                            |
| OfficialUrl              | varchar   |                                                            |
| StartDate                | varchar   |                                                            |
| EndDate                  | varchar   |                                                            |
| AbstractRegistrationDate | varchar   |                                                            |
| SubmissionDeadlineDate   | varchar   |                                                            |
| NotificationDueDate      | varchar   |                                                            |
| FinalVersionDueDate      | varchar   |                                                            |
| PaperCount               | bigint    |                                                            |
| PaperFamilyCount         | bigint    | ❄️FROZEN; same value as PaperCount                         |
| CitationCount            | bigint    |                                                            |
| Latitude                 | real      |                                                            |
| Longitude                | real      |                                                            |
| CreatedDate              | varchar   |                                                            |

## ConferenceSeries&#x20;

❄️FROZEN; Base table for Conference Series (mag/ConferenceSeries.txt)

| Field Name         | Data Type | Description                                         |
| ------------------ | --------- | --------------------------------------------------- |
| ConferenceSeriesId | bigint    | PRIMARY KEY                                         |
| Rank               | integer   | ❄️FROZEN                                            |
| NormalizedName     | varchar   | UPDATED; slightly different normalization algorithm |
| DisplayName        | varchar   |                                                     |
| PaperCount         | bigint    |                                                     |
| PaperFamilyCount   | bigint    | ❄️FROZEN; same value as PaperCount                  |
| CitationCount      | bigint    |                                                     |
| CreatedDate        | varchar   |                                                     |

## EntityRelatedEntities&#x20;

❄️FROZEN;  Relationship between papers, authors, fields of study. (advanced/EntityRelatedEntities.txt)

| Field Name        | Data Type | Description                                                                                                                                  |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| EntityId          | bigint    |                                                                                                                                              |
| EntityType        | varchar   | Possible values: af (Affiliation), j (Journal), c (Conference)                                                                               |
| RelatedEntityId   | bigint    |                                                                                                                                              |
| RelatedEntityType | varchar   | Possible values: af (Affiliation), j (Journal), c (Conference)                                                                               |
| RelatedType       | integer   | Possible values: 0 (same paper), 1 (common coauthors), 2 (co-cited), 3 (common field of study), 4 (same venue), 5 (A cites B), 6 (B cites A) |
| Score             | real      | Confidence range between 0 and 1. Larger number representing higher confidence.                                                              |

## FieldOfStudyChildren&#x20;

Relationship between Fields of Study (advanced/FieldOfStudyChildren.txt)

| Field Name          | Data Type | Description                                         |
| ------------------- | --------- | --------------------------------------------------- |
| FieldOfStudyId      | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId |
| ChildFieldOfStudyId | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId |

## FieldOfStudyExtendedAttributes&#x20;

Other identifiers for Fields of Study (advanced/FieldOfStudyExtendedAttributes.txt)

| Field Name     | Data Type | Description                                                                                                                                                                                                                                  |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FieldOfStudyId | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId                                                                                                                                                                                          |
| AttributeType  | bigint    | Possible values: 1 ([AUI](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsarchives04.html#2018AA) from UMLS), 2 (source url), 3 ([CUI](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html) from UMLS) |
| AttributeValue | varchar   |                                                                                                                                                                                                                                              |

## FieldsOfStudy&#x20;

Base table for Fields of Study (advanced/FieldsOfStudy.txt)

| Field Name       | Data Type | Description                                         |
| ---------------- | --------- | --------------------------------------------------- |
| FieldOfStudyId   | bigint    | PRIMARY KEY                                         |
| Rank             | varchar   | ❄️FROZEN                                            |
| NormalizedName   | varchar   | UPDATED; slightly different normalization algorithm |
| DisplayName      | varchar   |                                                     |
| MainType         | varchar   |                                                     |
| Level            | integer   | Possible values: 0-5                                |
| PaperCount       | bigint    |                                                     |
| PaperFamilyCount | bigint    | ❄️FROZEN; same value as PaperCount                  |
| CitationCount    | bigint    |                                                     |
| CreatedDate      | varchar   |                                                     |

## Journals&#x20;

Base table for Journals (mag/Journals.txt)

| Field Name       | Data Type | Description                                                                                                                |
| ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| JournalId        | bigint    | PRIMARY KEY                                                                                                                |
| Rank             | integer   | ❄️FROZEN                                                                                                                   |
| NormalizedName   | varchar   | UPDATED; slightly different normalization algorithm                                                                        |
| DisplayName      | varchar   |                                                                                                                            |
| Issn             | varchar   | UPDATED; the [ISSN-L](https://en.wikipedia.org/wiki/International\_Standard\_Serial\_Number#Linking\_ISSN) for the journal |
| Issns            | varchar   | 🔥NEW; JSON list of all ISSNs for this journal (example: '\["1469-5073","0016-6723"]' )                                    |
| IsOa             | boolean   | 🔥NEW; TRUE when the journal is 100% OA                                                                                    |
| IsInDoaj         | boolean   | 🔥NEW; TRUE when the journal is in [DOAJ](https://doaj.org)                                                                |
| Publisher        | varchar   |                                                                                                                            |
| Webpage          | varchar   |                                                                                                                            |
| PaperCount       | bigint    |                                                                                                                            |
| PaperFamilyCount | bigint    | ❄️FROZEN; same value as PaperCount                                                                                         |
| CitationCount    | bigint    |                                                                                                                            |
| CreatedDate      | varchar   |                                                                                                                            |
| UpdatedDate      | timestamp | 🔥NEW; set when changes are made going forward                                                                             |

## PaperAbstractsInvertedIndex&#x20;

Inverted index of abstracts (nlp/PaperAbstractsInvertedIndex.txt{\*} split across multiple files)

| Field Name      | Data Type | Description                                                     |
| --------------- | --------- | --------------------------------------------------------------- |
| PaperId         | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                           |
| IndexedAbstract | varchar   | I[nverted index](https://en.wikipedia.org/wiki/Inverted\_index) |

## PaperAuthorAffiliations&#x20;

Links between papers, authors, and affiliations/institutions. NOTE: It is possible to have multiple rows with same (PaperId, AuthorId, AffiliationId) when an author is associated with multiple affiliations. (mag/PaperAuthorAffiliations.txt)

| Field Name           | Data Type | Description                                                                                                |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| PaperId              | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                                                      |
| AuthorId             | bigint    | FOREIGN KEY REFERENCES Authors.AuthorId                                                                    |
| AffiliationId        | bigint    | FOREIGN KEY REFERENCES Affiliations.AffiliationId                                                          |
| AuthorSequenceNumber | integer   | 1-based author sequence number. 1: the 1st author listed on paper, 2: the 2nd author listed on paper, etc. |
| OriginalAuthor       | varchar   |                                                                                                            |
| OriginalAffiliation  | varchar   |                                                                                                            |

## PaperCitationContexts&#x20;

❄️FROZEN; citation contexts (nlp/PaperCitationContexts.txt)

| Field Name       | Data Type | Description                           |
| ---------------- | --------- | ------------------------------------- |
| PaperId          | bigint    | FOREIGN KEY REFERENCES Papers.PaperId |
| PaperReferenceId | bigint    | FOREIGN KEY REFERENCES Papers.PaperId |
| CitationContext  | varchar   |                                       |

## PaperExtendedAttributes&#x20;

Extra paper identifiers (mag/PaperExtendedAttributes.txt)

| Field Name     | Data Type | Description                                                           |
| -------------- | --------- | --------------------------------------------------------------------- |
| PaperId        | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                 |
| AttributeType  | integer   | Possible values: 1=PatentId, 2=PubMedId, 3=PmcId, 4=Alternative Title |
| AttributeValue | varchar   |                                                                       |

## PaperFieldsOfStudy&#x20;

Linking table from papers to fields, with score (advanced/PaperFieldsOfStudy.txt)

| Field Name       | Data Type | Description                                                                                     |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------- |
| PaperId          | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                                           |
| FieldOfStudyId   | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId                                             |
| Score            | real      | Confidence range between 0 and 1. Bigger number representing higher confidence.                 |
| AlgorithmVersion | integer   | 🔥NEW; version of algorithm to assign fields. Possible values: 1=old MAG (❄️FROZEN), 2=OpenAlex |

## PaperMeSH&#x20;

MeSH headings assigned to the paper by PubMed (advanced/PaperMeSH.txt)

| Field Name     | Data Type | Description                                                      |
| -------------- | --------- | ---------------------------------------------------------------- |
| PaperId        | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                            |
| DescriptorUI   | varchar   | [more](https://en.wikipedia.org/wiki/Medical\_Subject\_Headings) |
| DescriptorName | varchar   | [more](https://en.wikipedia.org/wiki/Medical\_Subject\_Headings) |
| QualifierUI    | varchar   | [more](https://en.wikipedia.org/wiki/Medical\_Subject\_Headings) |
| QualifierName  | varchar   | [more](https://en.wikipedia.org/wiki/Medical\_Subject\_Headings) |
| IsMajorTopic   | boolean   | [more](https://en.wikipedia.org/wiki/Medical\_Subject\_Headings) |

## PaperRecommendations&#x20;

Paper recommendations with score (advanced/PaperRecommendations.txt)

| Field Name         | Data Type | Description                                                                     |
| ------------------ | --------- | ------------------------------------------------------------------------------- |
| PaperId            | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                           |
| RecommendedPaperId | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                           |
| Score              | real      | Confidence range between 0 and 1. Bigger number representing higher confidence. |

## PaperReferences&#x20;

Paper references and, in reverse, citations (mag/PaperReferences.txt)

| Field Name       | Data Type | Description                           |
| ---------------- | --------- | ------------------------------------- |
| PaperId          | bigint    | FOREIGN KEY REFERENCES Papers.PaperId |
| PaperReferenceId | bigint    | FOREIGN KEY REFERENCES Papers.PaperId |

## PaperResources&#x20;

❄️FROZEN. Data and code urls associated with papers (mag/PaperResources.txt)

| Field Name       | Data Type | Description                                                            |
| ---------------- | --------- | ---------------------------------------------------------------------- |
| PaperId          | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                  |
| ResourceType     | integer   | Bit flags: 1=Project, 2=Data, 4=Code                                   |
| ResourceUrl      | varchar   | Url of resource                                                        |
| SourceUrl        | varchar   | List of urls associated with the project, used to derive resource\_url |
| RelationshipType | integer   | Bit flags: 1=Own, 2=Cite                                               |

## PaperUrls&#x20;

Urls for the paper (mag/PaperUrls.txt)

| Field Name            | Data Type | Description                                                                                                                                                                                   |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PaperId               | bigint    | FOREIGN KEY REFERENCES Papers.PaperId                                                                                                                                                         |
| SourceType            | integer   | Possible values: 1=Html, 2=Text, 3=Pdf, 4=Doc, 5=Ppt, 6=Xls, 8=Rtf, 12=Xml, 13=Rss, 20=Swf, 27=Ics, 31=Pub, 33=Ods, 34=Odp, 35=Odt, 36=Zip, 40=Mp3, 0/999/NULL=unknown                        |
| SourceUrl             | varchar   |                                                                                                                                                                                               |
| LanguageCode          | varchar   |                                                                                                                                                                                               |
| UrlForLandingPage     | varchar   | 🔥NEW; URL for the landing page, when article is free to read                                                                                                                                 |
| UrlForPdf             | varchar   | 🔥NEW; URL for the PDF, when article is free to read                                                                                                                                          |
| HostType              | varchar   | 🔥NEW; host type of the free-to-read URL, Possible values: publisher, repository                                                                                                              |
| Version               | varchar   | N🔥NEWEW; version of the free-to-read URL Possible values: submittedVersion, acceptedVersion, publishedVersion ([more](https://support.unpaywall.org/support/solutions/articles/44000708792)) |
| License               | varchar   | 🔥NEW; license of the free-to-read URL (example: cc0, cc-by, publisher-specific)                                                                                                              |
| RepositoryInstitution | varchar   | 🔥NEW; name of repository host of URL                                                                                                                                                         |
| OaiPmhId              | varchar   | 🔥NEW; OAH-PMH id of the repository record                                                                                                                                                    |

## Papers&#x20;

Main data for papers (mag/Papers.txt)

| Field Name           | Data Type | Description                                                                                                                                                                     |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PaperId              | bigint    | PRIMARY KEY                                                                                                                                                                     |
| Rank                 | integer   | ❄️FROZEN                                                                                                                                                                        |
| Doi                  | varchar   | Doi values are upper-cased per [DOI standard](https://www.doi.org/doi\_handbook/2\_Numbering.html#2.4)                                                                          |
| DocType              | varchar   | Possible values: Book, BookChapter, Conference, Dataset, Journal, Patent, Repository, Thesis, NULL : unknown. Patent is REMOVED; no patents are included.                       |
| Genre                | varchar   | 🔥NEW; Crossref ontology for work type such as journal-article, posted-content, dataset, or book-chapter                                                                        |
| IsParatext           | boolean   | 🔥NEW; indicates front-matter. See [https://support.unpaywall.org/support/solutions/articles/44001894783](https://support.unpaywall.org/support/solutions/articles/44001894783) |
| PaperTitle           | varchar   | UPDATED; slightly different normalization algorithm                                                                                                                             |
| OriginalTitle        | varchar   |                                                                                                                                                                                 |
| BookTitle            | varchar   |                                                                                                                                                                                 |
| Year                 | integer   |                                                                                                                                                                                 |
| Date                 | varchar   |                                                                                                                                                                                 |
| OnlineDate           | varchar   |                                                                                                                                                                                 |
| Publisher            | varchar   |                                                                                                                                                                                 |
| JournalId            | bigint    | FOREIGN KEY references Journals.JournalId                                                                                                                                       |
| ConferenceSeriesId   | bigint    | ❄️FROZEN. FOREIGN KEY references ConferenceSeries.ConferenceSeriesId;                                                                                                           |
| ConferenceInstanceId | bigint    | ❄️FROZEN. FOREIGN KEY references ConferenceInstance.ConferenceInstanceId;                                                                                                       |
| Volume               | varchar   |                                                                                                                                                                                 |
| Issue                | varchar   |                                                                                                                                                                                 |
| FirstPage            | varchar   |                                                                                                                                                                                 |
| LastPage             | varchar   |                                                                                                                                                                                 |
| ReferenceCount       | bigint    |                                                                                                                                                                                 |
| CitationCount        | bigint    |                                                                                                                                                                                 |
| EstimatedCitation    | bigint    | UPDATED; new algorithm                                                                                                                                                          |
| OriginalVenue        | varchar   |                                                                                                                                                                                 |
| FamilyId             | bigint    | ❄️FROZEN..                                                                                                                                                                      |
| FamilyRank           | bigint    | ❄️FROZEN.                                                                                                                                                                       |
| DocSubTypes          | varchar   | Possible values: Retracted Publication, Retraction Notice                                                                                                                       |
| OaStatus             | varchar   | 🔥NEW; Possible values: closed, green, gold, hybrid, bronze ([more](https://en.wikipedia.org/wiki/Open\_access#Colour\_naming\_system))                                         |
| BestUrl              | varchar   | 🔥NEW; An url for the paper (see PaperUrls table for more)                                                                                                                      |
| BestFreeUrl          | varchar   | 🔥NEW; Url of best legal free-to-read copy when it exists ([more](https://support.unpaywall.org/support/solutions/articles/44001943223))                                        |
| BestFreeVersion      | varchar   | 🔥NEW; Possible values: submittedVersion, acceptedVersion, publishedVersion ([more](https://support.unpaywall.org/support/solutions/articles/44000708792))                      |
| DoiLower             | varchar   | 🔥NEW; lowercase doi for convenience linking to Unpaywall                                                                                                                       |
| CreatedDate          | varchar   |                                                                                                                                                                                 |
| UpdatedDate          | timestamp | 🔥NEW; set when changes are made going forward                                                                                                                                  |

## RelatedFieldOfStudy&#x20;

Relationships between fields of study (advanced/RelatedFieldOfStudy.txt)

| Field Name      | Data Type | Description                                                                    |
| --------------- | --------- | ------------------------------------------------------------------------------ |
| FieldOfStudyId1 | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId                            |
| Type1           | varchar   | Possible values: general, disease, disease\_cause, medical\_treatment, symptom |
| FieldOfStudyId2 | bigint    | FOREIGN KEY REFERENCES FieldsOfStudy.FieldOfStudyId                            |
| Type2           | varchar   | Possible values: general, disease, disease\_cause, medical\_treatment, symptom |
| Rank            | real      | ❄️FROZEN.                                                                      |

