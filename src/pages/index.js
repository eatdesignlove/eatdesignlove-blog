import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const StuffWrapper = styled.div`
  margin-bottom: 80px;
  padding-top: 40px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 13px;
  color: #999;
`;

const StuffLink = styled.a`
  display: block;
  background-color: #F1F4F8;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 16px;
`;



const IndexPage = ({ data, path }) => {
  return (
    <Layout currentPath={path}>
      <SEO title="Home" />
      <StuffWrapper>
        <Title>Inspiration</Title>
        <StuffLink href="/">
            🖥 Wadiz Screen Saver
        </StuffLink>
      </StuffWrapper>
    </Layout>
  );
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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

export default IndexPage
