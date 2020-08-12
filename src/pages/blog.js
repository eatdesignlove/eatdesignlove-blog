import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const BlogWrapper = styled.div`
  padding-top: 40px;
`;

const BlogCard = styled.div`
  margin-bottom: 24px;

  border-radius: 8px;
  background: #F1F4F8;
  padding: 24px 30px 32px;
  
  h3 {
    margin: 0%;
    line-height: 1.5;
    font-size: 24px;
    font-weight: 500;
    word-break: keep-all;
  }
`;

const BlogDesc = styled.span`
  display: inline-block;
  margin: 16px 16px 0 0;
  font-size: 13px;
  font-family: 'Space Mono', sans-serif;
`;

const BlogPage = ({ data, path }) => (
  <Layout currentPath={path}>
    <SEO title="Home" />
    <BlogWrapper>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogCard key={node.id}>
        <h3>
          <Link to={node.fields.slug}>
            {node.frontmatter.emoji}<br />
            {node.frontmatter.title}
            <div>
              <BlogDesc>
                {node.frontmatter.category}
              </BlogDesc>
              <BlogDesc>
                {node.frontmatter.date}
              </BlogDesc>
            </div>
          </Link>
        </h3>
        {/* <p>{node.excerpt}</p> */}
      </BlogCard>
    ))}
    </BlogWrapper>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            emoji
            title
            date(formatString: "YYYY.MM.DD")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
