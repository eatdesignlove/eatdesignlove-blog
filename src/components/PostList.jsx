import PropTypes from 'prop-types'
import React from 'react'

const PostList = ({ children }) => (
  <div>
    {children}
  </div>
)

PostList.propTypes = {
  children: PropTypes.node
}

export default PostList;
