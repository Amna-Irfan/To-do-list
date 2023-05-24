import React, { useState} from 'react';
import './Task.css';
import ConfirmDelete from './ConfirmDelete';
import EditTask from './EditTask';
import CheckBox from './CheckBox';

const Task = ({task}) => {

    const {id, taskName, taskDescription} = task;
    const [isDelModalOpen, setIsDelModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    return (
    <React.Fragment>
        { 
            <div className='item'>
                <CheckBox checked={checked} setChecked={setChecked}/>
                <h4 className={checked? 'completed-task': 'pending-task'} onClick={checked? ()=>setIsEditModalOpen(false):()=>setIsEditModalOpen(true)}>{taskName}</h4>
                <h5 className={checked? 'completed-task': 'pending-task'}>{taskDescription}</h5>
                <button className='delete-button' type='button' onClick={()=>setIsDelModalOpen(true)}>Delete</button>
            </div>
        }
                
        {isDelModalOpen && <ConfirmDelete id={task.id} setIsDelModalOpen={setIsDelModalOpen} taskName={taskName}/>}
        {isEditModalOpen && <EditTask task={task} setIsEditModalOpen={setIsEditModalOpen}/>}

    </React.Fragment>
)};

export default Task;