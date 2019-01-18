import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './PostListItem.module.scss';

const PostListItem = ({
  slug,
  title,
  date,
  thumb,
  description,
  category
}) => (
  <Link to={slug} className={styles.postListItemContainer}>
    <article className={styles.postListItem}>
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