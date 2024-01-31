const algoliasearch = require('algoliasearch')
const contentful = require('contentful')
const dotenv = require('dotenv')
dotenv.config()

const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY)

const index = algoliaClient.initIndex('products')

const contentfulClient = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENT_DELIVERY_ACCESS_TOKEN,
})
contentfulClient
    .getEntries({
        content_type: 'product',
    })
    .then((entries) =>
        entries.items.forEach((entry) => {
            console.log(JSON.stringify(entry, null, 2))
            const record = {
                objectID: entry.sys.id,
                name: entry.fields.productName,
                description: entry.fields.productDescription.content.reduce((previous, current) => {
                    return previous + current.content.reduce((prev, curr) => {
                        return prev + curr.value
                    }, '')
                    
                }, ''),
                plans: entry.fields.plans.map((plan) => {
                    return {
                        name: plan.fields.planName,
                        price: plan.fields.planPrice,
                    }
                }),
            }
            index.saveObject(record).wait()
        })
    )
    .catch((err) => console.log(err))