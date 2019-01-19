import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import PostListItem from '../components/PostListItem'

import styles from './page.module.scss'

const MattersPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Matters" keywords={[`design`, `graphic`, `3D`, `application`, `work`]} />
      <h2 className={styles.title}>Matters</h2>
      <PostList>
        {!postList && (
          <div>등록된 포스트가 없습니다.</div>
        )}
        {postList && postList.edges.map(({ node }, i) => (
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

export default MattersPage;

export const Matters = graphql`
  query MattersQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { category: { eq: "Matters" } } }
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