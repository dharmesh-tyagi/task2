import axios from 'axios';
class Authenticate {
    constructor(){
        this.authenticated=false;
        this.userId =null;
    }
    login = (loginCallback,userName,password) => {
      let allUser =['a','b','c']
      let allPass= ['a','b','c'];
      console.log("inside login");
      /*axios.get('https://react-my-burger-5a46c.firebaseio.com/username.json')
      .then(response => {allUser=response.data})
      .catch(error => {});

      axios.get('https://react-my-burger-5a46c.firebaseio.com/pass.json')
      .then(response => {allPass=response.data})
      .catch(error => {});*/
      for(let i=0;i<allUser.length;i++){
          if(userName===allUser[i]&&password===allPass[i]){
            this.authenticated=true;
            loginCallback();
            this.userId=userName;
            break; 

          }
      }
    }

    logout= (logoutCallback) => {
        this.authenticated=false;
        logoutCallback();
    }
    isAuthenticated = () => {
        return this.authenticated;
    }
    getUserId = () =>{
        return this.userId;
    }
}

export default new Authenticate();