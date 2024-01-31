// hello_algolia.js
const algoliasearch = require('algoliasearch')
const dotenv = require('dotenv')
dotenv.config()

const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY)
const index = algoliaClient.initIndex('products')
index
  .search('product')
  .then(({ hits }) => console.log(JSON.stringify(hits, null, 2)))
