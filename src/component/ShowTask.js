import React, { useState } from 'react';
import UpdateTask from './UpdateTask';

const showTask = (props) =>{
    
  return(
        <section className="">
            <h2>TASK TO BE DONE</h2>
            
                <ul>
                    <p>something here</p>
                    {
                     props.taskList.map(task => (
                     <div>
                      <li key={task.id}>
                        <span>{task.title}</span>
                        <button onClick={props.toggleStatus}>mark done</button>
                        <button onClick={props.deleteTask.bind(this,task.id)}>delete</button>
                        <button onClick={() => {}}>udpate</button>
                        
                      </li>  
                     </div>))
                    }
                </ul>
            
        </section>
    );
}

export default showTask;