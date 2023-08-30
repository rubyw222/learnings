import React from "react";

const Age = ({age}) => {
  console.log('4-age')
  return (
    <>
      <h1>The age is {age}</h1>
    </>
  )
}

export default React.memo(Age);