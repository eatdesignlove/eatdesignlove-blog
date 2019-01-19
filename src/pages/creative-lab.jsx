import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import PostListItem from '../components/PostListItem'

const CreativeLabPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="Creative Lab"
        keywords={[`creative`, `future`, `try`]} />
      <h2>Creative Lab</h2>
      <PostList>
        {postList.edges.map(({ node }, i) => (
          <PostListItem
            slug={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            category={node.frontmatter.category}
            date={node.frontmatter.date}
            thumb={node.frontmatter.image.childImageSharp.resize.src}
            key={node.frontmatter.date}
          />
        ))}
      </PostList>
    </Layout>
  )
}

export default CreativeLabPage;

export const CreativeLab = graphql`
  query CreativeLabListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { category: { eq: "Creative Lab" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            description
            category
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`