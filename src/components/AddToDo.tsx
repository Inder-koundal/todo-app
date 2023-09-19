import * as React from 'react';
import {Button,  Grid,} from '@mui/material';
import TextField from '@mui/material/TextField';
import TodoList from './TodoList';

interface ITodoItem {
  title: string;
  description: string;
}

const initalToDoItems: ITodoItem[] = []

const AddTodo = () => {

  const [todoItems, setTodoItems] = React.useState<ITodoItem[]>(initalToDoItems)

  const [title, setTitle] = React.useState<string>("")
  const [description, setDescription] = React.useState<string>("")
  

  return (
     <>
       <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item xs={2}> 
          <TextField 
            value={title}
            fullWidth label="Title" 
            id="fullWidth"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value)
            }}
          />
        </Grid>
        <Grid item xs={8}> 
          <TextField 
            value={description}
            fullWidth 
            label="Description" 
            id="fullWidth" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value)
            }}
          />
        </Grid>   
        <Grid item xs={2}> 
          <Button 
            variant="contained"
            disabled={!title && !description}
              onClick={() => {
                setTodoItems([
                  ...todoItems,
                  {
                    description: description,
                    title: title
                  }
                ])
                setTitle('')
                setDescription('')
              }}
            >
              Add
            </Button>
        </Grid>      
    </Grid>
    {
      todoItems && todoItems.length > 0 && 
      <Grid container style={{marginTop: 30}}>
        {
           todoItems.map((item: ITodoItem, index: number) => {
            return (
              <>
                <Grid item xs={2}>{item.title}</Grid>
                <Grid item xs={8}>{item.description}</Grid>
                <Grid item xs={2}>
                  <Button 
                  variant="contained"
                  // disabled={!title && !description}
                  onClick={() => {
                      setTodoItems([
                      ...todoItems.slice(0, index ),
                      ...todoItems.slice(index+1)
                    ])
                  }}
                  >
                    Delete
                  </Button>
                </Grid>
              </>
            )
          })
        }
      </Grid>
       
    }
     </>
  );
}

export default AddTodo
