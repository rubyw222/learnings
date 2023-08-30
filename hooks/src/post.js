import React, { useEffect } from "react";

const Post = ({post}) => {

  useEffect(() => {
    console.log('Mounted')

    return () => {
      console.log("unmount")
    }
  }, []) 

  return (
    <div>
      <h4>{post.title}</h4>
      <div>{post.description}</div>
      <hr/>
    </div>
  )
}

export default Post;