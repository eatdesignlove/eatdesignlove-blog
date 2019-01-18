import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby'

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.linkList}>
      <li><Link to="/">Instagram</Link></li>
      <li><Link to="/">Twitter</Link></li>
      <li><Link to="/">Diribble</Link></li>
      <li><Link to="/">Behance</Link></li>
    </ul>
    <Link to="eatdesignlove@gmail.com">
      eatdesignlove@gmail.com
    </Link>
  </footer>
);

export default Footer;