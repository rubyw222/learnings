import React, { useContext } from "react";
import { MyContext } from '../context'

const UserItem = () => {

  const context = useContext(MyContext);

  console.log(context)

  return (
    <>
     { context.active ? 
     context.users.map((user) => (
      <div key={user.id}>
        <div>Name: {user.name}</div>
      </div>
     ))
     
    :null }
    <hr />
    <button onClick={context.toggleActive}>Toggle state</button>
    </>
  )
}

export default UserItem;