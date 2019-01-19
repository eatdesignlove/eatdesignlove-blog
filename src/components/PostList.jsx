import PropTypes from 'prop-types'
import React from 'react'

const PostList = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
)

PostList.propTypes = {
  children: PropTypes.node
}

export default PostList;
