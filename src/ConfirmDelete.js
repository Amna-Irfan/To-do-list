import React, {useContext} from 'react';

import { TasksContext } from "./AddTask";

const ConfirmDelete= (props) => {

    const {deleteTask} = useContext(TasksContext);

    const confirmDelete = (id) =>{
        deleteTask(id);
        props.setIsDelModalOpen(false);
    };

    return (
        <>
        <React.Fragment>
            <div className='form-center'>
                <form style={{margin: '1rem 0'}} className='form'>
                    <h3 style={{textAlign: 'center', color: 'black'}}>Task: '{props.taskName}'</h3>
                    <p style={{color: 'black'}}>Arou you sure you want to delete this task?</p>
                    <button className='button' type='button' onClick={()=>confirmDelete(props.id)}>OK</button>
                    <button className='button' type='button' onClick={()=>props.setIsDelModalOpen(false)}>CANCEL</button>
                </form>
            </div>
        </React.Fragment>       
    </>
)};

export default ConfirmDelete;