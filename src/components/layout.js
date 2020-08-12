/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Header from "./header"
import "./layout.css"

const FooterWrapper = styled.div`
  margin-top: 80px;
`;

const Copyright = styled.p`
  font-size: 13px;
  font-family: 'Space Mono', sans-serif;
`

const Layout = ({ children,  currentPath }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} currentPath={currentPath} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 760,
          padding: `0px 30px 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <FooterWrapper>
          <Copyright>
            ©{new Date().getFullYear()}, eatdesignlove
          </Copyright>
        </FooterWrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
