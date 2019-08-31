import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
        todos: [...this.state.todos, this.state.value],
        value:"",
      })
    }

  };



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
          <form
            onSubmit={e =>{
              e.preventDefault();
              this.saveTodo();
            }}
            >
            <TextField
              label="To do"
               type="text"
                placeholder="Next to do...."
                value={this.state.value}
                onChange = {this.updateValue}

                />

          </form>

        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8}>
          <List>
            {
              this.state.todos.map((item,index) => {
                return(
                  <ListItem button key={index}>
                    <Checkbox/>
                    <ListItemText primary= {item}/>
                    <ListItemSecondaryAction>
                      <IconButton>
                        <DeleteIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })
            }

          </List>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
}

export default App;
