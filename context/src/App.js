import React from 'react';
import User from './components/users';
import { MyProvider } from './context';

const App = () => {

  return(
    <MyProvider>
    <User />
    </MyProvider>
  )
}

export default App