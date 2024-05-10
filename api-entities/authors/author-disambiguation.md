# Author disambiguation

Our information about authors comes from MAG, Crossref, PubMed, ORCID, and publisher websites. We use an algorithm to [disambiguate](https://en.wikipedia.org/wiki/Author\_name\_disambiguation) authors; this uses an author’s name, their publication record, their citation patterns, and (where available) their ORCID.

So for example, if J. Schmidt and John Jacob Jingleheimer Schmidt both write about 19th-century ketchup production, we’ll treat them as one author–but we won’t include the JJJ Schmidt who writes about weasel migration (even though his name is their name, too).

Our methods, code, and models are all, of course, fully open. You can find [technical documentation on the author disambiguation model on Github here.](https://github.com/ourresearch/openalex-name-disambiguation/tree/main/V3) You will also find code and links to training data there.

In late July, 2023, we switched to a new, more accurate author disambiguation system, with a better machine-learning model to identify authors, a smarter strategy for author assignments for new works, and a much better integration with ORCID data when it is available. As part of that switch, we deprecated all of the old OpenAlex Author IDs, and assigned new Author IDs to all authors. You can find the old Author IDs, along with their associated works, [as a data dump here](https://zenodo.org/record/8189450). New Author IDs have a numeric component of their OpenAlex ID >5000000000. The new Author IDs have been used since late July, 2023, and in the data snapshots starting in August, 2023.

### The "null" Author ID

You may come across an OpenAlex Author with ID `A9999999999`, particularly if you are using the data snapshot. We use this author ID internally within the disambiguation system as our "null author". It is assigned to all authorships that do not go through disambiguation. Usually, this is because we did not receive an author name for that authorship, the name was too short to disambiguate, or it was a phrase we have specifically called out to ignore in our disambiguation process (for example, "'Unknown Unknown" or "Unknown Author").