# MAG format

this will point to the documentation already on the website. some of it may move here though. [https://openalex.org/mag-migration-guide](https://openalex.org/mag-migration-guide)





Base table for affiliations/institutions (mag/Affiliations.txt)

|     | Field Name       | Data Type | Description                                                                 |
| --- | ---------------- | --------- | --------------------------------------------------------------------------- |
|     | AffiliationId    | bigint    | PRIMARY KEY                                                                 |
| 📦️ | Rank             | integer   | ARCHIVAL; no new ranks will be added after Jan 3.                           |
|     | NormalizedName   | varchar   | UPDATED; slightly different normalization algorithm                         |
|     | DisplayName      | varchar   |                                                                             |
| 📦️ | GridId           | varchar   | ARCHIVAL; RorId is the new standard identifier for organizations            |
| 🔥  | RorId            | varchar   | NEW; ROR for this organization, see https://ror.org, https://ror.org/:RorId |
|     | OfficialPage     | varchar   |                                                                             |
|     | WikiPage         | varchar   |                                                                             |
|     | PaperCount       | bigint    |                                                                             |
| 📦️ | PaperFamilyCount | bigint    | ARCHIVAL; same value as PaperCount after Jan 3                              |
|     | CitationCount    | bigint    |                                                                             |
|     | Iso3166Code      | varchar   | Two-letter country codes, see https://en.wikipedia.org/wiki/ISO\_3166-2     |
|     | Latitude         | real      |                                                                             |
|     | Longitude        | real      |                                                                             |
|     | CreatedDate      | varchar   |                                                                             |
| 🔥  | UpdatedDate      | timestamp | NEW; set values updated from new ror data                                   |





