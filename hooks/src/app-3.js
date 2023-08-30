import React, { useRef } from "react";

const App = () => {

  const textInput = useRef()

  const triggerHandler = () => {
    console.log(textInput.current.value)
  }

  return(
    <>
      <h1>My form</h1>
      <InputComponent ref={textInput} />
      <button onClick={triggerHandler}>Submit</button>
    </>
  )
}

const InputComponent = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})

export default App;