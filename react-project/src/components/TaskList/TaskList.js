import React from 'react';

import './TaskList.css';
import proptypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({title,taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask}) {
    
    const addTask = () => {
        onAddTask('Nova tarefa', taskState)
    };

    

    return(
        <div className="TaskList">
            <div className='title'>{title}</div>
            <div className='content'>
                {tasks.map((task) => {
                    return(
                        <TaskItem 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        taskState={task.state}
                        onTaskUpdate={onTaskUpdate}
                        onDeleteTask ={onDeleteTask}
                        />
                    )
                }
                )}
            </div>
            <button onClick={addTask}>Adicionar tarefa</button>
        </div>
    )
}

TaskList.propTypes = {
    title : proptypes.string.isRequired,
    onAddTask : proptypes.func.isRequired,
    tasks : proptypes.array.isRequired
}