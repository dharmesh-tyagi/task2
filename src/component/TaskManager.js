import React,{usestate, useState, useEffect, useCallback} from 'react';
import AddTask from './Addtask';
import ShowTask from './ShowTask';
import axios from 'axios';
import ShowOtherWay from './ShowOtherWay';
import auth from '../container/Auth';
import "../style/TaskManager.css";

const taskManager = (props) => {
    const userId = auth.getUserId();
    const [taskList,setTaskList] = useState([]);
    //Adding Task To Firebase 
    const addTaskHandler = (task) => {
        console.log(userId);
        axios.post('https://react-my-burger-5a46c.firebaseio.com/tasks/'+userId+'.json',task)
            .then(response => {
                    console.log(response);
                    const insertTask = {id:response.data.name,...task};
                    setTaskList([...taskList,insertTask]);
             })
            .catch(error => {console.log("error message   "+error)})
         
    };  
    //Toggle Status To Manage Task Behaviour
    const taskStatusToggle = (id) => {
        console.log("task status handler called");
    }
    //Takes Key And Removes Task From Firebase
    const deleteTaskHandler = (id) => {
        console.log("delete task handler called" + id);
        axios.delete('https://react-my-burger-5a46c.firebaseio.com/tasks/'+userId+'/'+id+'/.json')
         .then(response =>{
             console.log(response);
             const newTaskList=taskList.filter(task => task.id!==id);
             setTaskList([...newTaskList]);
         })
         .catch(error =>{
             console.log(error);
         });
    }
    //Takes Key And Title And Update The Task In Firebase
    const updateTaskHandler = (id,updatedTitle) => {
        console.log("update task handler called");
        console.log('id'+ id);
        console.log('update--'+ updatedTitle);
        const newTaskList=[...taskList];
        for(const task of newTaskList){
            if(task.id===id){
                console.log("element found")
                task.title=updatedTitle;
                break;
            }
        }
        setTaskList([...newTaskList]);
        let updatedTask ={title:updatedTitle};
        axios.put('https://react-my-burger-5a46c.firebaseio.com/tasks/'+userId+'/'+id+'.json',updatedTask)
                  .then(response => {console.log(response)})
                  .catch(error => {console.log(error)});
    }
    
    // LOADING INITIAL STATE FROM DATABASE
    useEffect(() => {
        console.log("inside use effect");
        axios.get('https://react-my-burger-5a46c.firebaseio.com/tasks/'+userId+'.json')
         .then(response => {
            console.log("inside use effect"); 
            console.log(response.data);
            const keys = Object.keys(response.data);
            const tasks = Object.values(response.data);
            for(let i = 0;i<keys.length;i++){
                tasks[i]={id:keys[i],...tasks[i]};
            }
            setTaskList([...tasks]);
         })
         .catch(error => {console.log('error occured -- '+ error)})
         
    },[]);
    

    return(
        <div className="task_manager">
         
         <div className="upper_part">
            <button class="logout_button" onClick={() => {
                 auth.logout(() =>{ props.history.push("/")})
            }} >
            logout</button> 
                       
            <AddTask onAddTask = {addTaskHandler}  />
         </div>      
           
         <div className="display-task">
            {taskList.map(task => {
               return( 
                <ShowOtherWay title={task.title}
                   deleteTask={deleteTaskHandler}
                   toggleStatus={taskStatusToggle}
                   updateTask={updateTaskHandler}
                   task={task}
                 ></ShowOtherWay>);
            })}
         </div>     
        </div>
    );
};

export default taskManager;

                