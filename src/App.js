import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      value: "",
      todos: []
    };
  }

  updateValue= e=>{
    this.setState({
      value: e.target.value
    })
  }

  saveTodo = () =>{
    if(this.state.value.trim()){
      this.setState({
        todos: [...this.state.todos,
            {
              value: this.state.value,
              completed: false
            }
        ],
        value:"",
      })
    }

  };

deleteTodo =(index) =>{
  //Imperativo
  // console.log(index)
  // var pos= index, n=1;
  // var todos=[...this.state.todos]
  // todos.splice(pos,n);
  // this.setState({
  //   todos: todos
  // })
  //Declarativo
  this.setState({
    todos: this.state.todos.filter((_, i) => index !== i)
  })
}

isItCheckedBox = (index) =>{
  // var todos = [...this.state.todos]
  // todos[index].completed = !todos[index].completed
  // this.setState({
  //   todos: todos
  // })
  this.setState({
    todos: this.state.todos.map((todo,i) =>
      index === i ? {...todo, completed: !todo.completed} : todo
    )
  })
}


  render(){
    console.log(this.state)
    return (
      // Con react fragments podemos meter varios nodos
      <React.Fragment>
        <Typography variant= 'h2' align='center' gutterBottom>
        To-do list
      </Typography>
      <Grid container justify="center">
        <Grid item >
            <TodoForm
              updateValue={this.updateValue}
              saveTodo={this.saveTodo}
              value={this.state.value}
              />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8}>
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            isItCheckedBox={this.isItCheckedBox}/>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
}

export default App;
