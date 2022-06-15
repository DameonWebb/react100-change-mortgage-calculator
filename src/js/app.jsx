import React from 'react';
//
export default class App extends React.Component {
  // constructor method to initialize the state of the app
  constructor(props) {
    this.state = {
      balance: '',
      rate:'',
    
    }
  }
  //add a property for ech input field to the state object and set their initial values
  //create a function that updates the state values when an input changes, using event binding
  render() {
    return ( 
     //input element for mortgage loan balance
     //input element for APR
     <div className='container'>
        {<input type = 'number' name='balance'></input>} 
        {<input type = 'number' name='rate' step = '0.01'></input>}
        {<select name='term'><option value = '15'></option><option value = '30'></option></select>}
        {<button name = 'submit'>Submit</button>}
        {<div name = 'output' id= 'output'></div>}
      </div>
    );
  }
}
