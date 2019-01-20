
import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import PostListItem from '../components/PostListItem'

import styles from './page.module.scss'

const LifeLogsPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Life Logs" keywords={[`lifestyle`, `story`, `learning`, `study`]} />
      <h2 className={styles.title}>Life Logs</h2>
      <PostList>
        {postList.edges.map(({ node }, i) => (
          <PostListItem
            type="LIFE_LOGS"
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

export default LifeLogsPage;

export const LifeLogs = graphql`
  query LifeLogsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { category: { eq: "Life logs" } } }
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