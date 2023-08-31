import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from 'react-bootstrap';
import { MyContext } from "../context";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if(validate) {
      setError([false, ''])
      context.addPayer(value)
      textInput.current.value = ''
    }
  }

  const validateInput = (value) => {
    if(value === '') {
      setError([true, 'Sorry, you need to input a name'])
      return false
    } else if (value.length < 3) {
      setError([true, 'Sorry, you need a longer name (min 3 char)'])
      return false
    }

    return true
  }

  console.log(context.state)

  return (
    <>
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group>
        <Form.Control type="text" 
        placeholder="Add payer name"
        name="payer"
        ref={textInput} />
      </Form.Group>

      { error[0] ?
        <Alert>
          {error[1]}
        </Alert>
      : null }

      <Button variant="primary" type="submit" className="miami">
        Add payer
      </Button>

      { context.state.payers && context.state.payers.length > 0 ?
        <>
        <hr />
        <div>
          <ul className="list-group">
            { context.state.payers.map((payer, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                  { payer }
                  <span className="badge badge-danger"
                  onClick={() => {context.deletePayer(i)}}>x</span>
                </li>
            ))}
          </ul>
          <div className="action_button" onClick={()=>{context.next()}}>
            Next
          </div>
        </div>
        </>
      : null }

    </Form>
    </>
  )
}

export default Stage1;