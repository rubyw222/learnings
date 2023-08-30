import React, { Component } from "react";
import UsersItem from "./usersItem";
import { MyContext } from "../context";

class User extends Component {

  render() {
    return (
      <>
      <MyContext.Consumer>
        {context => {
          console.log(context)
        }}
      </MyContext.Consumer>
      <UsersItem />
      </>
    )
  }
}

export default User;