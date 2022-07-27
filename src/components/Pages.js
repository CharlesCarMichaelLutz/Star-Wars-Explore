import React from 'react'

const Pages = ({pages}) => {
/*
  if (loading) {
    return <h2>Loading...</h2>
  }
  */

  return(
    <ul>
      {pages.map(post => {
        <li key ={post.id}>
          {post.title}
        </li>
      })}
    </ul>
  )

}

export default Pages