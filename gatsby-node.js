/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const axios = require(`axios`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    axios
      .get(`myItems.json`)
      .then(result => {
        const { data } = result
        /**
         * creates a page dynamic page with the data received
         * injects the data received into the context object alongside with some options
         * to configure js-search
         */
        createPage({
          path: `/search`,
          component: path.resolve(`./src/templates/ClientSearchTemplate.js`),
          context: {
            bookData: {
              allBooks: data.books,
              options: {
                indexStrategy: `Prefix match`,
                searchSanitizer: `Lower Case`,
                NameIndex: true,
                AuthorIndex: true,
                SearchByTerm: true,
              },
            },
          },
        })
        resolve()
      })
      .catch(err => {
        console.log(`====================================`)
        console.log(`error creating Page:${err}`)
        console.log(`====================================`)
        reject(new Error(`error on page creation:\n${err}`))
      })
  })
}