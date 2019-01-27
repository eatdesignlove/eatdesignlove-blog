import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/PostList';
import PostListItem from '../components/PostListItem';

import styles from '../pages/index.module.scss'

class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const postList = this.props.data.allMarkdownRemark.edges;

    const isFirst = currentPage == 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage -1 ).toString();
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <PostList className={styles.postList}>
          {postList.map(({ node }, i) => (
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
        {!isFirst && (
          <Link to={prevPage} >
            Prev
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} >
            Next
          </Link>
        )}
      </Layout>
    )
  }
}

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
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