const initialState = {userId:null};

const reducer = (initialState,action) => {
    switch(action.type){
        case "authenticate":
            return {userId:action.userId};
        case "deauthenticate":
            return {userId:null}    
    }    
}

export default reducer;