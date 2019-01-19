import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './header.module.scss';
import cx from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowGnb: false
    }
  }

  handleGnbToggleClick = () => {
    const { isShowGnb } = this.state;
    this.setState({isShowGnb: !isShowGnb});
  }

  render() {
    return(
      <header className={cx({[styles.isShowGnb]: this.state.isShowGnb })}>
        <div className={styles.container}>
          <h1>
            <Link 
              className={styles.vision}
              to="/"
            >Inspiration<br />Designer</Link>
            <Link to="/">
              <span className={styles.eatdesignlove}>eatdesignlove</span>
            </Link>
          </h1>
          <button
            className={styles.gnbToggle}
            onClick={this.handleGnbToggleClick}
          >
            <span className={styles.barTop}></span>
            <span className={styles.barMiddle}></span>
            <span className={styles.barBottom}></span>
          </button>
          <ul className={cx(
            styles.gnb,
            {[styles.hide]: !this.state.isShowGnb})
          }>
            <li>
              <Link
                className={styles.gnbLink}
                activeClassName={styles.active}
                to="/creative-lab/">Creative Lab
              </Link>
            </li>
            <li>
              <Link
                className={styles.gnbLink}
                activeClassName={styles.active}
                to="/matters/">Matters
              </Link>
            </li>
            <li>
              <Link
                className={styles.gnbLink}
                activeClassName={styles.active}
                to="/life-logs/">Life Logs
              </Link>
            </li>
            <li>
              <Link
                className={styles.gnbLink}
                activeClassName={styles.active}
                to="/about/">About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
