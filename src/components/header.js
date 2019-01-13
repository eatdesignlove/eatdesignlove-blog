import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.container}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="gnb">
        <li>
          <Link to="/lab/">Creative Lab</Link>
        </li>
        <li>
          <Link to="/matters/">Matters</Link>
        </li>
        <li>
          <Link to="/life-logs/">Life Logs</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
