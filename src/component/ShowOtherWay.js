import React,{useState} from 'react';
import "../style/ShowOtherWay.css";

const showOtherWay = (props) =>{
    const [update,setUpdate]= useState();
    let updatedTask;
    const [taskDone ,setTaskDone] = useState(false);
    return(
       <div className='task'>
          <div className="show_part">
            <h3 className={taskDone ? "task_done show_task_title" : "show_task_title task_not_done"} onClick={(event) => setUpdate(true)}>{props.title}</h3>
          </div>
          <div className="control-part">
            {update &&<input 
                          type='text'
                          value={updatedTask}
                          onChange={(event) => updatedTask=event.target.value }
                          className="update_input"
                       />  
            }
            
            <button className="task-control" onClick={(event) => {return setTaskDone(true)}}>mark done</button>
            <button className="task-control" onClick={props.deleteTask.bind(this,props.task.id)}>delete</button>
            <button className="task-control" onClick={(event) => {return(setUpdate(false),props.updateTask(props.task.id,updatedTask))}}>update</button>
          </div>    
       </div>  
    );
}
export default showOtherWay;

//