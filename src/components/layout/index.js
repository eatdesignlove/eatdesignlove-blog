import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Header from "../common/Header"
import Footer from "../common/Footer"
import appleTouchIcon from '../../images/favicon/apple-touch-icon.png';
import favicon32 from '../../images/favicon/favicon-32x32.png';
import favicon16 from '../../images/favicon/favicon-16x16.png';
import webmanifest from '../../images/favicon/site.webmanifest';
import safariPinnedTab from '../../images/favicon/safari-pinned-tab.svg';


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
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={webmanifest} />
        <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
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
