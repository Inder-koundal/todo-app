import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import AddTodo from './components/AddToDo'

const  App = () => {
  return (
    <div className="main">
      <Grid container >
        <AddTodo />
      </Grid>
    </div>
  );
}

export default App;
