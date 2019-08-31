import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props)=>{
  return(
    <List>
      {
        props.todos.map((item,index) => {
          return(
            <ListItem button key={index} onClick={()=> props.isItCheckedBox(index)}>
              <Checkbox color= "primary" checked = {item.completed}/>
              <ListItemText primary= {item.value}/>
              <ListItemSecondaryAction>
                <IconButton onClick={()=> props.deleteTodo(index)}>
                  <DeleteIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })
      }

    </List>
  );


}


export default TodoList;
