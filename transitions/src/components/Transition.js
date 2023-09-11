import { useState } from "react";
import { Transition } from 'react-transition-group'


const TransitionComp = () => {
  let [show,setShow] = useState(true)

  const toggleDiv = () =>{
    setShow(!show ? true :false)
  }


  return (
    <>
      <Transition
        in={show}
        timeout={2000}
      >  
      { state => 
        <div style={{
          background:'red',
          height:'100px',
          transition:'all 2s ease',
          opacity: state === 'exited' || state === 'exiting' ? 0:1
        }}>
          {state}
        </div>
      }
      </Transition>
      <button className="btn btn-primary" onClick={toggleDiv}>Toggle show</button>
    </>
  );
};

export default TransitionComp;
