== FEEDBACK

Thoughts on improving the Uber API & tools for developers to help them build better app experiences:

1. More comprehensive documentation for Request endpoint to minimize ambiguity:

  * Make it clear that being authorized for "developer-only" scopes are required for the Request endpoint.  
  * Document how to receive the current request_id. Since you need the request_id for to issue successful POST or GET requests, you must be able to programmatically grab request_id. User profile doesn't return request_id, and user activity only returns already completed rides. It's not clear in the documentation how else to grab the parameter.
  * Document error codes when oAuth2 access tokens do not reliably work with the Request endpoint. Not clear whether it's due to the endpoint being limited to authorized apps with "developer-only" scopes, or for other reasons.

2. More comprehensive documentation for oAuth2 flow:

  * Make it clear what request scopes are allowed with oAuth2. Mention in the documentation which scopes are not permitted due to not having a privacy policy.
  * validation_failed (422) should be included on the list of authentication errors.
  * Include info on recommended methods to refresh tokens when they get expired.

3. Create a developer/Sandbox console where a developer can test the API link they constructed. While the Sandbox tab provides the URL to make calls, it doesn't help the developer test out the URL she constructs with the endpoints.

  This would be especially helpful support for the Request endpoint. Since it is the only write-access level endpoint, it's important to give developer tools to be able to manipulate request parameters in Sandbox. The tool will specify what parameters are required or optional, and you can get a JSON response immediately in the console.

4. Application examples in different languages. The documentation uses Python, and the example app on Github is a Python/Flask app. Would be great to add app examples in another language (Ruby, Go, etc.) and on mobile (iOS, Swift, Android, etc.).

5. Video or interactive documentation that explains Request endpoint in more detail. Since it's a truly an IoT API endpoint, and not a mere web API that doesn't dispatch live drivers, not many developers will have experience building against it as compared to regular RESTful APIs. Perhaps a live Sandbox tool or console which shows the request flow when using the endpoint.
