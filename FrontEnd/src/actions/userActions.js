import Axios from "axios";
import { auth, provider } from '../firebase';

import { 
    
        SET_USER_GMAIL_AUTH,
        USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,  
        USER_SIGNOUT,
        // User List 
        USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL,
        //Ading Users 
        USER_ADD_REQUEST, USER_ADD_SUCCESS, USER_ADD_FAIL

    } from "../constants/userConstants";

export const signIn = (pseudo, password) => async(dispatch) => {       

    dispatch({ type: USER_SIGNIN_REQUEST, payload: { pseudo, password } });
    try{
        const { data } = await Axios.post('/api/users/signin',{ pseudo, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });      
        //Keep the user signin
        localStorage.setItem("userWhatsAppClone", JSON.stringify(data));

    } catch(error){
        dispatch({ 
            type: USER_SIGNIN_FAIL,
            payload: 
                (error.response && error.response.data.message) 
                    ? error.response.data.message
                    : error.message  
        })
    }
}

export const signInGmail = () => (dispatch) => {
    auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: SET_USER_GMAIL_AUTH,
                payload: result.user,
            })

            localStorage.setItem("userWhatsAppClone", JSON.stringify(result.user));
        })
        .catch((error) => alert(error.message));

}


export const listUsers = (pseudo) => async (dispatch) =>{
    dispatch({ type: USER_LIST_REQUEST , payload: { pseudo } });
    try{
        const { data } = await Axios.get('/api/users', { pseudo });
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    }catch(error){
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
    }
}

export const addUsers = (pseudo, password) => async (dispatch) =>{
    dispatch({ type: USER_ADD_REQUEST });
    try{
        const { data } = await Axios.post('/api/users/insertNewUser', {pseudo, password});
        dispatch({ type: USER_ADD_SUCCESS, payload: data });
    }catch(error){
        dispatch({ type: USER_ADD_FAIL, payload: error.message });
    }
}

export const signOut = () => (dispatch) =>{
    localStorage.removeItem('userWhatsAppClone');
    dispatch({ type: USER_SIGNOUT });
}