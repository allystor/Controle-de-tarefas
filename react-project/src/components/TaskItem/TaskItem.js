import React, {useState} from 'react';
import './TaskItem.css';
import PropTypes from 'prop-types';

export default function TaskItem({id,title,taskState,onTaskUpdate, onDeleteTask}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title); 

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    }

    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            setIsEditing(false);
            if(editableTitle.length === 0){
                onDeleteTask(id);
            }
        }
    }

    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value);
    };
    

    if (isEditing) {
        return <div className='TaskItem'>
            <input type="text" value={editableTitle} onChange ={onTitleChange} onKeyPress ={onKeyPress}/>
        </div> 
    } else{
        return (<div>
            <div className="TaskItem" onClick={() => setIsEditing(true)}>{editableTitle}</div>
            <select onChange={onTaskStateChange} value={taskState}>
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluida">Concluida</option>
            </select>
        </div>
        )
    }

}

TaskItem.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    taskState : PropTypes.string.isRequired
}