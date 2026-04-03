import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({remove, number, post}) => {
    
  const router = useNavigate()
  
    return (
      <div className='post'>
        <div className='post-cont'>
          <div>
            <strong>{post.id} {post.title}</strong>
            <div>
              {post.body}
            </div>
          </div>
          
                    
          <div>
            <button className='post-btn post-btn-open' onClick={() => router(`/posts/${post.id}`)}>Open</button>
            <button onClick={() => { remove(post) }} className='post-btn'>Delete</button>
          </div>
          
        </div>
      </div>

    )
}

export default Post;
