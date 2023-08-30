import React, { useState, useEffect } from "react";
import Post from './post';

const App = ({initialCount}) => {
  
  let [state, setState] = useState({
    count: initialCount,
    user: "Ruby"
  }) // set inital state

  let [posts, setPosts] = useState([
    {
      title: "Your first post!",
      description: "This is your first post to be displayed. How awesome."
    }
  ])

  // useEffect(() => {
  //   console.log(state);
  // }, [state]) // update only on state change

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]) // update only on posts change

  useEffect(()=>{
    console.log('Mounted')
  }, []) // update only on component mount

  const addOnePost = () => {
    let newPost = {
      title: "Your second post!",
      description: "This is your second post to be displayed. Look at you go."
    }

    setPosts([...posts, newPost])
  }

  const removePosts = () => {
    setPosts([])
  }

  const addOne = () => {
    setState({...state, count: state.count + 1})
  }

  const minusOne = () =>{
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1}
    })
  }
  
  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={() => setState({...state, count:initialCount})}>Reset</button>

      <hr/>

      {posts.map((post, i) => (
        <Post post={post} key={i}/>
      ))}
      <button onClick={addOnePost}>Add one post</button>
      <button onClick={removePosts}>Remove posts</button>
    </>
  )
}

export default App;