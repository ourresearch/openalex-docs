# Aboutness endpoint (/text)

You can use the `/text` API endpoint to tag your own free text with OpenAlex's "aboutness" assignments—topics, keywords, and concepts.

Accepts a title or optional abstract in the GET params or as a POST request. The results are straight from the model, with the only thing truncated is 0 values.

Queries are limited to between 20 and 2000 characters. The endpoints are rate limited to 1 per second and 1000 requests per day.
