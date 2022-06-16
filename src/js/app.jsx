import React from 'react';
//
export default class App extends React.Component {
  // constructor method to initialize the state of the app
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate:0.00,
      term: '15',
      output: ''
    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('event', event, 'this', this);
  }
  calculate(balance, rate, terms){
    const p = this.state.balance;

    const r = (this.state.rate/100)/12;

    const n = this.state.term * 12;

    const divide = r*((1+r)**n);

    const divideBy = ((1+r)**n)-1;

    const answer = p*(divide/divideBy);
    return answer
  }


  handleClick(){
      const result = this.calculate();
      this.setState({
        output: `${result.toFixed(2)} is your monthly payment`
      })
  }

  //add a property for ech input field to the state object and set their initial values
  //create a function that updates the state values when an input changes, using event binding
  render() {
    return ( 
     //input element for mortgage loan balance
     //input element for APR
     <div className='container'>
       <h3>Mortgage Calculator</h3>
        <input type = 'number' name='balance' value ={this.state.balance} onChange = {this.handleChange}/> 
        <input type = 'number' name='rate' step = '0.01' value = {this.state.rate} 
        onChange = {this.handleChange}/>
        <select name='term' value = {this.state.term} onChange = {this.handleChange}>
          <option value = '15' >15</option>
        <option value = '30'>30</option></select>
        <button name = 'submit' onClick = {(e) => {
          e.preventDefault();
          this.handleClick(e);
        }}>Calculate</button>
        <div name = 'output' id= 'output'>{this.state.output}</div>
      </div>
    );
  }
}


