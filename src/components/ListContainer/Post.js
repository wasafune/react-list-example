import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  const {
    userId, id,
    title, body,
  } = props

  return (
    <li>
      <p>
        <span>UserId: </span>
        {userId}
      </p>
      <p>
        <span>Id: </span>
        {id}
      </p>
      <p>
        <span>Title: </span>
        {title}
      </p>
      <p>
        <span>Body: </span>
        {body}
      </p>
    </li>
  )
}

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
