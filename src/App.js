import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
  state = {
    persons:[
      {name: 'Scott', age:28 },
      {name: 'Mike', age: 29},
      {name: 'DJ', age:25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {name: newName, age:28 },
        {name: 'Mike', age: 29},
        {name: 'DJ', age:26}
      ]
    });
  }

  nameChangedHandler =(event) => {
    this.setState({
      persons:[
        {name: 'Scott', age:28 },
        {name: event.target.value, age: 29},
        {name: 'DJ', age:26}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
      <h1>Hi I am A React App</h1>
      <h2>Hello there H2</h2>
      <button style={style}
      onClick={this.switchNameHandler.bind(this, 'Harold')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} />
      <Person name="DJ" age="26">Hello DJ: Cardinals are not good</Person>
      </div>
      
    );
  }
}

export default App;
