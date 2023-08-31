import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MyContext = React.createContext();

const DEFAULT_STATE = {
  stage: 1,
  payers: [],
  result: ''
}

class MyProvider extends Component {

  state = DEFAULT_STATE

  addPayerHandler = (name) => {
    this.setState((prevState) => ({
      payers:[
        ...prevState.payers,
        name
      ]
    }))
  }

  deletePayerHandler = (payer) => {
    console.log(payer)
    let newArray = this.state.payers;
    newArray.splice(payer, 1);
    this.setState({payers: newArray})
  }

  nextHandler = () => {
    const { payers } = this.state;

    if (payers.length < 2) {
      toast.error('You need more than one payer', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000
      })
    } else {
      this.setState({
        stage: 2
      }, () => {
        this.generateLooser()
      })
    }
  }

  generateLooser = () => {
    const { payers } = this.state;
    this.setState({
      result: payers[Math.floor(Math.random()*payers.length)]
    });
  }

  resetGame = () => {
    this.setState(DEFAULT_STATE);
  }

  render() {
    return(
      <>
        <MyContext.Provider value={{
          state: this.state,
          addPayer: this.addPayerHandler,
          deletePayer: this.deletePayerHandler,
          next: this.nextHandler,
          getNewLooser: this.generateLooser,
          resetGame: this.resetGame
          }}>
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer/>
      </>
    )
  }

}

export { MyContext, MyProvider }