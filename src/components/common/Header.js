import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from './Menu';
import UI from './HeaderStyle'

const Header = ({ siteTitle, currentPath, isSimple }) => {
  if (isSimple) {
    return(
      <>
        <UI.SimpleHeaderWrapper>
            <UI.EatdesignloveLogo>
                eatdesignlove.com
            </UI.EatdesignloveLogo>
            <Menu currentPath={currentPath} />
        </UI.SimpleHeaderWrapper>
      </>
    );
  }
  return (
    <>
      <UI.HeaderWrapper>
        <div>
          <UI.EatdesignloveLogo>
            eatdesignlove.com
          </UI.EatdesignloveLogo>
          <UI.BlogTitle style={{ margin: 0 }}>
            <Link to="/">
              <strong>jeongsic.yoo</strong>
              <span>eatdesignlove</span>
            </Link>
          </UI.BlogTitle>
          <UI.EatdesignloveDesc>
            Design + Technology + ❤️<br />
            Front-end Developer<br />
            Inspiration Designer
          </UI.EatdesignloveDesc>
        </div>
      </UI.HeaderWrapper>
      <Menu currentPath={currentPath} isShadow={true} />
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
