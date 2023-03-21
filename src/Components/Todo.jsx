import React, { useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';


const Todo = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editedText, setEditedText] = useState("");


    const handleEdit = () => {
        console.log(JSON.parse(localStorage.getItem('todos')));
        setIsEdit(true);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        let id = props.props.id
        const item = JSON.parse(localStorage.getItem('todos'));

        console.log(item);
        const items = item.filter(i => i.id !== id);

        localStorage.setItem('todos', JSON.stringify(items));
        window.location.reload()
    }

    const itemEvent = (event) => {
        setEditedText(event.target.value);
    }

    const saveInLocalStorage = (event) => {
        event.preventDefault();
        let id = props.props.id

        const item = JSON.parse(localStorage.getItem('todos'));

        const items = item.filter(i => i.id === id);

        items[0].text = editedText

        localStorage.setItem('todos', JSON.stringify(item));
        window.location.reload();
        
        setIsEdit(false);
    }
    
    return (
    <div id={props.props.id} className='todo_style --flex-start'>
         <span>
             <DeleteIcon className='deleteIcon'
                    style={{ fontSize: '25px' }} 
                    onClick={handleDelete}
           />
            </span>
            {isEdit ? (
                <>
                <input
                  className='edit'
                  type="text"
                  value={editedText}
                  placeholder=" Add edited description"
                  onChange={itemEvent}
                    />
                    <CheckIcon
                        style={{ fontSize: '25px' }}
                        className='editIcon'
                        onClick={saveInLocalStorage}
                    />
                </>
            ) : (
                    <>
                <li style={{ textDecoration: "none" }}>
                    {props.props.text}
                    </li>    
                    <span>
             <EditIcon className='editIcon'
                 style={{ fontSize: '25px' }}
                    onClick={handleEdit}
             />
                        </span>
                    </>
            )}
    </div>
  )
}

export default Todo