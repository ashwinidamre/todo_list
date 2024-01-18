import React,{useState} from 'react'
import {Todoform} from './Todoform'
import {Tlist} from './Tlist'
import {Todoupdate} from './Todoupdate'

export  function Todowrap() {
  const { v4: uuidv4 } = require('uuid');
  const[todos,setTodos]= useState([])
  const addTodo = todo =>{
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(todos)
  }
    const toggleComplete = (id) => {
      setTodos(todos.map(todo=>todo.id===id ? {...todo,completed:!todo.completed}:todo));
      
    } 
    const deleteTodo=(id)=>
    setTodos(todos.filter((todo) => todo.id !== id));
    
    const editTodo=(id) =>{
      setTodos(todos.map((todo) =>todo.id=== id ?{...todo , isEditing: !todo.isEditing}:todo));
    }
    const editTask=(task,id)=>{
      setTodos(todos.map((todo)=>todo.id===id ? {
        ...todo,task,isEditing:!todo.isEditing}:todo));
    }
  return (
    <div className='TodoWrapper'>
      <h1>To-do List</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo)=>(
        todo.isEditing?(
          <Todoupdate editTodo={editTask} task={todo} />
        ):( <Tlist task={todo} key={todo.id} toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} editTodo={editTodo} />

        )
        
      ))
      }
      
    </div>
  );
};





