import React from 'react';
import TodoList from '../components/TodoList';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {
          key: '1',
          text: "This is my first task"
        },
        {
          key: '2',
          text: "This is my second task"
        },
        {
          key: '3',
          text: "This is my third task"
        }
      ],
      currentItem:{
        text: '',
        key: ''
      },
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState ({
        items:filteredItems
      })
  }
  setUpdate(text, key){
    //loop through and find key value
    const items = this.state.items.map((item) => {
      if(item.key===key){
        item.text=text;
      }
      //return modified item
      return item;
    })
    //set new object into state
    this.setState({
      items: items });
  }
  render() {
  return(
    <div className="todo-container">
    <header>
      <h1 className="todo-h1"> To Do</h1>
      <form id="to-do-form" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter Task"
        value={this.state.currentItem.text}
        onChange={this.handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </header>
    <TodoList items= {this.state.items} 
    deleteItem = {this.deleteItem}
    setUpdate = {this.setUpdate}
    />
    </div>
  )
}
}


export default ToDo;