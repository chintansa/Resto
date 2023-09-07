/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title: "Simple Recipes",
    description: " A recipe website built for learning graphql",
    author: "@whoami",
    person:{name: " john", age: "32"},
    simpleData:['item1', 'item2'],
    complexData : [
      {name: " john", age: "32"},
      {name: "susan", age: "21"},
    ]
  },
  plugins: [`gatsby-plugin-styled-components`,
            `gatsby-plugin-image`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            {
              resolve: `gatsby-source-filesystem`,
              options:{
                name: `images`,
                path: `${__dirname}/src/assets/images`,
              },
            },
]
}
