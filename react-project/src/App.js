import './style.css';
import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Tasklist from './components/TaskList/TaskList';

let idAdd = 0;
const generateId = () => {
  idAdd += 1;
  return idAdd;
};

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    
    const newTask = {
      id:generateId(),
      title,
      state
    }
    setTasks((existingTasks) => {
      return[...existingTasks, newTask]
    });

  }
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if(task.id === id){
          return {...task, title, state}
        } else{
            return task;
        }
      })
    })
  }
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='Container'>
        <Tasklist 
        title = "Pendente" 
        onAddTask ={addTask} 
        taskState = "Pendente"
        tasks={tasks.filter((t) => t.state === 'Pendente')} 
        onTaskUpdate={updateTask}
        onDeleteTask ={deleteTask}/>

        <Tasklist 
        title = "Em andamento" 
        onAddTask ={addTask}
        taskState = "Em andamento"
        tasks={tasks.filter((t) => t.state === 'Em andamento')} 
        onTaskUpdate = {updateTask}
        onDeleteTask ={deleteTask}/>
        <Tasklist 
        title = "Concluida" 
        onAddTask ={addTask} 
        taskState = "Concluida"
        tasks={tasks.filter((t) => t.state === 'Concluida')} 
        onTaskUpdate = {updateTask}
        onDeleteTask ={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
