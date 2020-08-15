import React, { useEffect } from "react"
import { Link } from "gatsby"

import CommonLayout from "../components/layout"
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
    font-family: 'Noto Sans KR', sans-serif;

    span {
      display: inline-block;
      font-size: 17px;
    }
  }

  @keyframes hovered {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(0, -10px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &:hover {
    h3 span {
      animation: hovered 0.5s forwards;
    }
  }
`;

const BlogDesc = styled.span`
  display: inline-block;
  margin: 16px 16px 0 0;
  font-size: 13px;
  font-family: 'Space Mono', sans-serif;
`;

const BlogPage = ({ data, path }) => {
  
  return (
    <CommonLayout currentPath={path}>
      <SEO title="Home" />
      <BlogWrapper>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                <span>{node.frontmatter.emoji}</span><br />
                {node.frontmatter.title}
              </h3>
              <div>
                <BlogDesc>
                  {node.frontmatter.category}
                </BlogDesc>
                <BlogDesc>
                  {node.frontmatter.date}
                </BlogDesc>
              </div>
            </Link>
          {/* <p>{node.excerpt}</p> */}
        </BlogCard>
      ))}
      </BlogWrapper>
    </CommonLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark 
    (sort: { fields: [frontmatter___date], order: DESC })
    {
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
