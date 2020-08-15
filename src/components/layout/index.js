import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Header from "../common/Header"
import Footer from "../common/Footer"
import './layout.css';

const MainWrapper = styled.main`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const CommonLayout = ({ children,  currentPath, isSimpleHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
        }
      }
    }
  `)
  return (
    <>
      <Header
        isSimple={isSimpleHeader}
        siteTitle={data.site.siteMetadata.title}
        currentPath={currentPath}
      />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CommonLayout
