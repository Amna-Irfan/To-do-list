import React, { useState, useContext} from 'react';
import { TasksContext } from "./AddTask";

const EditTask = (props) => {

    const {deleteTask, tasks, setTasks} = useContext(TasksContext);
    const [updatedTaskName, setUpdatedTaskName] = useState(props.task.taskName);
    const [updatedTaskDescription, setUpdatedTaskDescription] = useState(props.task.taskDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(updatedTaskName && updatedTaskDescription){
            const newTasks =tasks.map((task)=>{
                if(task.id === props.task.id)
                {
                    const newTask = {id: props.task.id, taskName:updatedTaskName, taskDescription:updatedTaskDescription};

                    return newTask;
                }
                else{
                    return task;
                }
            })
            setTasks(newTasks);
            props.setIsEditModalOpen(false);
            setUpdatedTaskName('');
            setUpdatedTaskDescription('');
        }
        else{
            alert('Please Enter Values');
        }
    };

    return (
    <>
        <React.Fragment>
            <div className='form-center'>
                <form className='form' style={{width: '370px', margin: '1rem 0'}}onSubmit={handleSubmit}>
                    <h3 style={{textAlign: 'center', color: 'black'}}>Task: '{updatedTaskName}'</h3>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='updatedTaskName'>Task Name: </label>
                        <input 
                        style={{width: '280px'}}
                        type='text'
                        id='updatedTaskName'
                        name='updatedTaskName'
                        value={updatedTaskName}
                        onChange={(e)=>setUpdatedTaskName(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='updatedTaskDescription'>Task Description: </label>
                        <input
                        style={{width: '280px'}}
                        className='descriptionText'
                        type='text'
                        id='updatedTaskDescription'
                        name='updatedTaskDescription'
                        value={updatedTaskDescription}
                        onChange={(e)=>setUpdatedTaskDescription(e.target.value)}/>
                    </div>
                    <button className='button' type='submit'>Update Task</button>
                    <button className='button' type='button' onClick={()=>props.setIsEditModalOpen(false)}>Cancel</button>
                </form>
                <hr style={{color: 'black'}}></hr>
            </div>
        </React.Fragment>        
    </>
)};

export default EditTask;