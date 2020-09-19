import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number';
import Add from './components/Add';

class App extends Component {
  style = {
    backgroundColor: '#fff',
    color: '#444',
    border: '1px solid black'
  }

  numWidgetStyle = {
    margin: '0 auto',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid black',
    borderRadius: '5px',
    width: '150px'
  }

  state= {
    number: 0,
    randNum: Math.floor(Math.random()*100),
    interval: 0 
  }

  handleIntUp = () => {
    let interval = this.state.interval
    this.setState({interval: interval += 1})
  }
  handleIntDown = () => {
    let interval = this.state.interval
    this.setState({interval: interval -= 1})
  }

  handleAdd = () => {
    let interval = this.state.interval
    let number = this.state.number
    this.setState({number: number += interval})
  }
  handleSub = () => {
    let interval = this.state.interval
    let number = this.state.number
    this.setState({number: number -= interval})
  }
  
  render () {
    
  return (
    <div className="App">
      <h1>Hello TSX!</h1>
      <img className="App-logo" src={logo} alt="logo" width="250px"/>
      <Number randNum={this.state.randNum}/>
      <Add first={50} second={100}/>
      <br/>
      <br/>
      <div style={this.numWidgetStyle}>
        <h3>{this.state.number}</h3>
        <br/>
        <button style={this.style} onClick={this.handleAdd}>Add</button>
        <button style={this.style} onClick={this.handleSub}>Sub</button>
        <br/>
        <button style={this.style} onClick={this.handleIntUp}>Interval +</button>
        <button style={this.style} onClick={this.handleIntDown}>Interval -</button>
        <p>Interval: {this.state.interval}</p>
      </div>
    </div>
  )};
}

export default App;
