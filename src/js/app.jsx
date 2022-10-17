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

  //que changes to the component state, and re-render this component and its children with updated state
  //mortgage calculator
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
       <div className="model" tabIndex = "-1">
       <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
    </div>
    <div className="modal-body">
    
        <input type = 'number' name='balance' value ={this.state.balance} onChange = {this.handleChange}/> 
        <input type = 'number' name='rate' step = '0.01' value = {this.state.rate} 
        onChange = {this.handleChange}/>
        <select name='term' value = {this.state.term} onChange = {this.handleChange}>
          <option value = '15' >15</option>
        <option value = '30'>30</option></select>
       </div>
       <div className="modal-footer">
        <button name = 'submit' className ="btn btn-success" onClick = {(e) => {
          e.preventDefault(); //prevents the default behavior of the the onClick function
          this.handleClick(e);

        }}>Calculate</button>
        </div>
        </div>
        </div>
        <div name = 'output' id= 'output'>{this.state.output}</div>
        

      </div>
      </div>
    );
  }
}


