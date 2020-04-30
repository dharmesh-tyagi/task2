import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskManager from './component/TaskManager';
import {BrowserRouter,Route as Route,Switch,Redirect} from 'react-router-dom';
import LoginPage from './component/LoginPage';
import ProtectedRoute from './component/ProtectedRoute';
import auth from './container/Auth';

class App extends Component {
  render() {
    return (
      
      <div className="App">

        <Switch>
            <Route path='/' exact component={LoginPage}></Route>        
            <ProtectedRoute path='/taskmanager' exact component={TaskManager} />
            <Route path='*' component={() => "error 404 not found"} />
         </Switch>

      </div>

    );
  }
}

export default App;
//