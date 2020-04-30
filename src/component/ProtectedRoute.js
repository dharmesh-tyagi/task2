import React, { Component } from 'react';
import {Route,Redirect}  from 'react-router-dom';
import auth from '../container/Auth';

const protectedComponent = ({component:Component,...rest}) => {
    return(
        <Route {...rest} render={
            (props) => {
                if(auth.isAuthenticated()){
                    return (<Component {...props} />);
                }
                else{
                    return(<Redirect to={
                        {
                            pathname:'/',
                            state:{
                                from:props.location
                            }
                        }
                    } />);
                }    
            }
        }/>
    );
}


export default protectedComponent;