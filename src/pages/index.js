import React from "react"

import CommonLayout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const StuffWrapper = styled.div`
  margin-bottom: 80px;
  padding-top: 40px;
`;

const Title = styled.h2`
  margin: -1px 0 0 0;
  text-indent: -9999px;
  height: 1px;
`;

const StuffTitle = styled.h3`
  margin-top: 80px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #999;
  font-family: 'Space Mono', sans-serif;
  font-weight: 400;

  &:first-child {
    margin-top: 0;
  }
`;

const StuffLink = styled.a`
  margin-bottom: 24px;
  display: block;
  background-color: #F1F4F8;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 16px;
`;

const IndexPage = ({ data, path }) => {
  return (
    <CommonLayout currentPath={path}>
      <SEO title="Home" />
      <Title>Stuff</Title>
      <StuffWrapper>
        <StuffTitle>Inspiration</StuffTitle>
        <StuffLink href="/">
            🍕 If your life is food
        </StuffLink>
        <StuffLink href="/">
            🖥 Wadiz Screen Saver
        </StuffLink>
        <StuffTitle>Experiment</StuffTitle>
        <StuffLink href="/">
            🎨 WebGL
        </StuffLink>
      </StuffWrapper>
    </CommonLayout>
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
