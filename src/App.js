import './App.css';
import React, { useState } from 'react';


function App() {
const [tasks, setTasks] = useState([])
const [input, setInput] = useState('')

// add tasks
  
const handleSubmit = (e) => {
 e.preventDefault()
 const addTask = {
  id: Math.floor(Math.random() * 1000),
  text: input,
  completed: false
  }

  setTasks([...tasks, addTask])
  setInput('')
}

//delete tasks

const deleteTask = (id) => {
  let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
  setTasks(filteredTasks)
  console.log('task deleted')
}

return (
    <div className ='App'>
      <div className = "container">
       <h3>Task List   <button onClick = {handleSubmit}>+ Add Task</button></h3> 
       
    
    
    <form onSubmit = {handleSubmit}>
     <input 
     value = {input}
     onChange = {e => setInput(e.target.value)}
     placeholder ="Enter a task" 
     type = "text"  />
     </form>

 <div>
  {tasks.map(task => (
    <div>
    <p>{task.text} <button>edit</button> <button onClick = {() => deleteTask(task.id)}>delete</button></p>
      </div>
  ))}
 </div>
   

    </div>
 </div>
  );
}

export default App;
