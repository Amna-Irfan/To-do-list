import React from 'react';
import './List.css';
import Task from './Task';

const List = React.memo(({tasks}) => {
    return (
    <section className='list'>
        {
            tasks.map((task)=>{
                return(
                    <Task key={task.id} task={task}/>
                )
            })
        }
    </section>
)});

export default List;