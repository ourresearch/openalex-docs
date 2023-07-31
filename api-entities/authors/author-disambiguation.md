# Author disambiguation

Our information about authors comes from MAG, Crossref, PubMed, ORCID, and publisher websites. We use an algorithm to [disambiguate](https://en.wikipedia.org/wiki/Author\_name\_disambiguation) authors; this uses an author’s name, their publication record, their citation patterns, and (where available) their ORCID.

So for example, if J. Schmidt and John Jacob Jingleheimer Schmidt both write about 19th-century ketchup production, we’ll treat them as one author–but we won’t include the JJJ Schmidt who writes about weasel migration (even though his name is their name, too).

In late July, 2023, we switched to a new, more accurate author disambiguation system, with a better machine-learning model to identify authors, a smarter strategy for author assignments for new works, and a much better integration with ORCID data when it is available. As part of that switch, we deprecated all of the old OpenAlex Author IDs, and assigned new Author IDs to all authors. You can find the old Author IDs, along with their associated works, [as a data dump here](https://zenodo.org/record/8189450). New Author IDs have a numeric component of their OpenAlex ID >5000000000. The new Author IDs have been used since late July, 2023, and in the data snapshots starting in August, 2023.
