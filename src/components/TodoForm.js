//Adds new todos
import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: ""};
  }
  handleChange = event => {
    this.setState({ todoInput: event.target.value}); //Updates todoInput with input value
  }
  handleSubmit = event => {
    event.preventDefault(); //Adds new todo to list
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input>
        type="text" 
        placeholder="Add"
        value={this.state.todoInput}
        onChange={event => this.handleChange(event)}
        </input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
      
}
export default TodoForm;