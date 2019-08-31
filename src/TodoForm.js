import React from 'react';
import TextField from '@material-ui/core/TextField';



const TodoForm= (props) =>{
  return(
    <form
      onSubmit={e =>{
        e.preventDefault();
        props.saveTodo();
      }}
      >
      <TextField
        label="To do"
         type="text"
          placeholder="Next to do...."
          value={props.value}
          onChange = {props.updateValue}

          />

    </form>
  );
}

export default TodoForm;
