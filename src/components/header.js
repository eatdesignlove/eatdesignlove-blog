import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import logo from "../images/logo@2x.png"

const HeaderWrapper = styled.header`
  padding: 36px 30px 0;
  margin: 0 auto;
  max-width: 760px;
  width: 100%;
`;

const BlogTitle = styled.h1`
  font-size: 32px;

  a {
    text-decoration: none;
    color: #333;
  }

  strong {
    margin-left: -4px;
  }

  span {
    margin-top: 12px;
    font-size: 13px;
    display: block;
  }
`;

const EatdesignloveDesc = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  font-size: 16px;
`;

const MenuList = styled.ul`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0 30px;
  background: #fff;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;

  li {
    font-weight: bold;
    padding: 0;
    margin: 0 30px 0 0;
    display: inline-block;
  }

  a {
    display: inline-block;
    padding: 8px 0;
    position: relative;
  }
`;

const MenuLink = styled.span`
  color: #C9C9C9;

  ${(props) => props.isActive && `
    color: #333;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      height: 1px;
      background: #333;
      content: '';
    }
  `}
`;

const EatdesignloveLogo = styled.button`
  margin-left: -4px;
  margin-bottom: 8px;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
  overflow: hidden;
  padding: 0;
  border: 0;
  background-color: transparent;
  background-image: url(${logo});
  background-size: contain;
`;

const Header = ({ siteTitle, currentPath }) => {
  console.log(currentPath, 'currentPath');
  return (
    <>
      <HeaderWrapper>
        <div>
          <EatdesignloveLogo>
            eatdesignlove
          </EatdesignloveLogo>
          <BlogTitle style={{ margin: 0 }}>
            <Link to="/">
              <strong>jeongsic.yoo</strong>
              <span>eatdesignlove</span>
            </Link>
          </BlogTitle>
          <EatdesignloveDesc>
            Design + Technology + ❤️<br />
            Front-end Developer<br />
            Inspiration Designer
          </EatdesignloveDesc>
        </div>
      </HeaderWrapper>
      <MenuList>
        <li>
          <Link to="/">
            <MenuLink isActive={currentPath === '/'}>Stuff</MenuLink>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <MenuLink isActive={currentPath === '/blog/'}>Blog</MenuLink>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <MenuLink isActive={currentPath === '/about/'}>About</MenuLink>
          </Link>
        </li>
      </MenuList>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
