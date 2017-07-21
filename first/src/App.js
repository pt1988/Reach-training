import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNumber from './MyNumber';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { value : 0 }
    console.log('start class');
  }

  _handleAdd = () => {
    this.setState({
     value : this.state.value + 1
    });
      console.log('add button click');

}

  //var show_status = () => (<dev>test</dev>);

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='hello'>
          Hello React.
        </div>
        <div className='number'>
          <MyNumber value={this.state.value}/>  //this mean MyNumber Class
        </div>
        <div className='button'>
          <button onClick={this._handleAdd}> Add </button>
        </div>
        <show_status/>
      </div>
    );
  }
}

export default App;
