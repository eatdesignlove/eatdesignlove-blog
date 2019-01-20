import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './PostListItem.module.scss';
import cx from 'classnames';

const PostListItem = ({
  slug,
  title,
  date,
  thumb,
  description,
  category,
  type
}) => (
  <Link
    to={slug}
    className={styles.postListItemContainer}
  >
    <article className={cx(
      styles.postListItem,
      {[styles.projectType]: type === 'CREATIVE_LAB'},
      {[styles.designType]: type === 'MATTERS'},
      {[styles.postType]: type === 'LIFE_LOGS'}
    )}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.category}>{category}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div
        className={styles.thumb}
        style={{backgroundImage: `url(${thumb})`}}
      />
    </article>
  </Link>
);

PostListItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  thumb: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string
}

export default PostListItem;