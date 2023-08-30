import React from "react";

const Count = ({count}) => {
  console.log('2-count')
  return (
    <>
      <h1>The count is {count}</h1>
    </>
  )
}

export default React.memo(Count);