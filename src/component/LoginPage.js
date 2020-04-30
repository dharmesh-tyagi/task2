import React from 'react';
import auth from '../container/Auth';
import '../style/LoginPage.css';

const loginPage = (props) => {
  let userName;
  let password; 
    return(
      <div className="login row no-gutters">
        <div class="col-md-6 no-gutters">
          <div className="form leftside">  
           <div className="login_avatar" >
             <img src="./login-side.jpg" alt="an avatar picture"></img>
           </div>
            <form >
              <label className="label" for="name"><b>NAME</b></label>
              <input className="login_input" type="text"   value={userName} onChange={(event) => {userName=event.target.value}}></input>
              <br/>
              <label className="label" for="password"><b>PASSWORD</b></label>
              <input className="login_input" type="password" value={password} onChange={(event) =>{password=event.target.value}}></input>
              

              <button class="login_button" id="lgbtn" onClick={
                  () =>{
                  console.log("login clicked"); 
                  auth.login(
                      () =>{
                        props.history.push("/taskmanager");
                  },userName,password);
              }}>login</button>
            </form>
           </div>  
        </div>   
        <div class="col-md-6 no-gutters">
          <div class="rightside">
            <div className="welcome">
              <h3>WELCOME TO TASK MANAGER</h3>
            </div>  
          </div> 
        </div>
      </div>
    );
}

export default loginPage;
