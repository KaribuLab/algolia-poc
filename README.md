# Algolia POC

## Getting started

First create a file `.env` in the root of your project, like this:

```shell
ALGOLIA_ADMIN_API_KEY=<your-algolia-admin-api-key>
ALGOLIA_APP_ID=<your-algolia-app-id>
CONTENT_DELIVERY_ACCESS_TOKEN=<your-delivery-access-token>
CONTENT_TYPE_ID=<your-content-type>
ENVIRONMENT_ID=<your-environment-id>
SPACE_ID=<your-space-id>
ENTRY_ID=<your-entry-id>
```

Then run the following commands

```shell
npm install
npm run load
npm run search
```