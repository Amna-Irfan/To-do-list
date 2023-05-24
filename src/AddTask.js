import React, { useState, useEffect} from 'react';
import './AddTask.css';
import List from './List';
import { v4 as uuid } from 'uuid';
import {data} from './data';

export const TasksContext = React.createContext();

const AddTask = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [tasks, setTasks] = useState([]);

    const getTasks = async() => {
        setTasks(data); 
    };

    const deleteTask = (id) => {
        const newList = tasks.filter((task) => task.id !== id);
        setTasks(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName && taskDescription){
            const newTask = {id: uuid().slice(0,8), taskName, taskDescription};
            setTasks((tasks)=>{
                return [...tasks, newTask];
            });
            setTaskName('');
            setTaskDescription('');
        }
        else{
            alert('Please Enter Values');
        }
    };
    useEffect(()=>{
        getTasks();
    }, []);

    return (
    <TasksContext.Provider value={{deleteTask, tasks, setTasks}}>
        <React.Fragment>
            <h1>ToDo List App</h1>
            <div className='form-center'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='taskName'>Task Name: </label>
                        <input 
                        type='text'
                        id='taskName'
                        name='taskName'
                        value={taskName}
                        onChange={(e)=>setTaskName(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='taskDescription'>Task Description: </label>
                        <input
                        className='descriptionText'
                        type='text'
                        id='taskDescription'
                        name='taskDescription'
                        value={taskDescription}
                        onChange={(e)=>setTaskDescription(e.target.value)}/>
                    </div>
                    <button className='button' type='submit'>+Add ToDo</button>
                </form>
            </div>
            <List tasks={tasks}/>
        </React.Fragment>
    </TasksContext.Provider>
)};

export default AddTask;