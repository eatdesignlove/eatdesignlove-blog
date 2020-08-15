const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
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
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, idx) => {
        const prev = idx === 0 ? false : posts[idx - 1].node;
        const next = idx === posts.length - 1 ? false : posts[idx + 1].node;
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.jsx`),
            context: {
                slug: node.fields.slug,
                prev,
                next,
            },
        })
    })
}