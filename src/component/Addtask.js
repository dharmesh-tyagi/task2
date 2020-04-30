import React,{useState} from 'react';
import "../style/Addtask.css";

const addTask = (props) => {
    
    const [enteredTask,setEnteredTask] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        props.onAddTask({title:enteredTask});
    }

    return(
        
        <section>
           <form onSubmit={onSubmitHandler}>
              <div className="">
                <label for="Title"><b>Title</b></label>  
                <input 
                        type='text' 
                        value={enteredTask}
                        onChange={event => {
                            setEnteredTask(event.target.value);
                        }}
                        className="add_task_input"
                />
               </div>       
              
              <div className="add_task_submit">
                <button className="add_task_submit" type="submit">Add Task</button>
              </div>
           </form>
        </section>
    );

};

export default addTask;