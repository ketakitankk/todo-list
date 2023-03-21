import React, {useState, useEffect} from 'react'
import Todo from './Todo';

const ListCom = () => {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        
        if (storedTodos) {
            setTodos([...todos, storedTodos]);
        }
    }, [todos]);

    


  return (
      <>
          {todos.map((todo) => {
              return (
                  <Todo props={todo} />
              )
            })}
      </>
  )
}

export default ListCom;