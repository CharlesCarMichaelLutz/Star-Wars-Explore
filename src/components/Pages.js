import React from 'react'

const Pages = ({pages}) => {

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