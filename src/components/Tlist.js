import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons"
import{faTrashCan}from "@fortawesome/free-regular-svg-icons"


 export function Tlist({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)} >{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
        
        <FontAwesomeIcon className='faTrashCan' icon={faTrashCan} onClick={()=>deleteTodo(task.id)} />
        
      </div>
    </div>
  )
}



