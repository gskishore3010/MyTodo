import React, { Component } from 'react';
import './App.css';
 
import Form from './components/Form';
import List from './components/List';



class App extends Component {

	state = {
		inputValue: '',
		todos: []

	}

	handleChange = (event) => {
         this.setState({ inputValue: event.target.value });
	}

	handleClick = (index) => {
          const todos = this.state.todos;
          todos[index].done = !todos[index].done;
          this.setState({todos});
	}
    
	handleSubmit = (event) => { 
	  event.preventDefault();
	  const newTodo = {
	  	value: this.state.inputValue,
	  	done: false
	  };
      const todos = this.state.todos;
      todos.push(newTodo);
      this.setState({todos, inputValue: ''})
  }
  
  deleteClick = (index, e) => {
    const todos = Object.assign([], this.state.todos);
    todos.splice(index, 1);
    this.setState({todos: todos});
  }


    render() {
    return (
      <div className="App">
        <h1> To Do List </h1>

      <Form 
      handleChange={this.handleChange}
      inputValue={this.state.inputValue}
      handleSubmit={this.handleSubmit}
      />
      
      <List 
       handleClick={this.handleClick}
       todos={this.state.todos}
       deleteClick={this.deleteClick}
       />   
      </div>
    ); 
  }
}

export default App;