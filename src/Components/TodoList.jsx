import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import ClearIcon from '@mui/icons-material/Clear';
import Footer from './Footer'
import Todo from './Todo'

const TodoList = () => {

    const [item, setItem] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);
    
    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const addTodoToLocalStorage = (newTodo) => {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push(newTodo);
            window.location.reload()
            localStorage.setItem('todos', JSON.stringify(todos));
    };
    
    const listOfItems = () => {
        if (item !== "") {
            const todo = { text: item, id: Date.now() };
            addTodoToLocalStorage(todo);
            setItem("");
        } else {
            alert("Please describe your task");
        }
    }

  return (
      <div className='--main'>
          <div>
              <h1 className='heading'>To do List</h1>
              <input
                  className='--input'
                  type="text"
                  value={item}
                  placeholder=" Add task description"
                  onChange={itemEvent}
              />
              <Button className='--btn' onClick={listOfItems} >
                  <AddIcon />
              </Button>
              <Button className='--btn'>
                  <ClearIcon onClick={() => {
                      setItem("");
                  }} />
              </Button>
              
              <br />
              <br></br>
              
              <ol className='list'>
              {todos.map((todo) => {
                return <Todo key={todo.id} props = {todo}/>
            })}
              </ol>
          </div>
          <div className='--footer'>
              <Footer/>
          </div>
    </div>
  )
}

export default TodoList ;