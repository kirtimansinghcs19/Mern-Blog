import jwt_decode from 'jwt-decode';
const initState = {
    loading: false,
    registerErrors : [],
    loginErrors : []
}
const token = localStorage.getItem('mytoken');
const decodeToToken = jwt_decode(token);
console.log
const AuthReducer = (state = initState,action) => {
    if(action.type === 'SET_LOADER'){
        return {...state,loading:true};
    }
    else if(action.type === 'CLOSE_LOADER'){
        return {...state,loading:false};
    }
    else if(action.type === 'REGISTER_ERRORS'){
        return {...state,registerErrors:action.payload};
    }
    else if(action.type === 'SET_TOKEN'){

    }
    else{
        return state;
    }
}
export default AuthReducer;