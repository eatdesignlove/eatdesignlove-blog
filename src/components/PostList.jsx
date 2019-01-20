import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const PostList = ({ children, className, type }) => (
  <div className={className}>
    {children}
  </div>
)

PostList.propTypes = {
  children: PropTypes.node
}

export default PostList;
