const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/portfolio/"}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `)

  // create our blog listings
  const types = result.data.posts.edges.map(post => post.node.frontmatter.type).reduce((a, b) => a.concat(b))
  const uniqueTypes = []
  types.forEach(type => {
    if (!uniqueTypes.includes(type)) {
      uniqueTypes.push(type)
    }
  })
  const pageMeta = {
    quotes: {
      title:  "Inspirational Running Quotes",
      subtitle: "A Series Of Training Quotes From Around The World",
      intro: "I collect quotes from around the world and use them to think deeply about training methodologies and mental endurance. Enjoy!"
    },
    general: {
      title: "Latest Blog Posts",
      subtitle: "Interesting learnings from the field of sports science and mental resilience",
      intro: null
    },
    training: {
      title: "Latests Posts On Modern Training Methods",
      subtitle: "Interesting learnings from the field of sports science",
      intro: null
    },    
    "mental-health": {
      title: "Latest Blog Posts",
      subtitle: "Interesting learnings from the field of sports science and mental resilience",
      intro: null
    },
  }
  // main blog page for all posts
  createPage({
    path: '/blog',
    component: path.resolve(`./src/templates/blog-list.js`),
    context: {
      meta: pageMeta.general
    }
  })
  // create a separate page for each type
  uniqueTypes.forEach(type => {
    createPage({
      path: `/blog/${type}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        type,
        meta: pageMeta[type]
      },
    })
  })
  result.data.posts.edges.forEach(({ node }) => {
    const type = node.frontmatter.type
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.fields.slug,
        type,
        meta: pageMeta[type]
      },
    })
  })
  result.data.portfolio.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/portfolio-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}