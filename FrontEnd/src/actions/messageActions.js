import Axios from 'axios';

import { 
         MESSAGE_LIST_REQUEST, 
         MESSAGE_LIST_SUCCESS,
         MESSAGE_LIST_FAIL,

         MESSAGE_SEND_REQUEST,
         MESSAGE_SEND_SUCCESS,
         MESSAGE_SEND_FAIL,
        } 
from '../constants/MessageConstants';

export const listMessages = (sender, receiver) => async (dispatch) => {
    dispatch({ type: MESSAGE_LIST_REQUEST });

    try{
        const { data } = await Axios.get(`/api/messages/${sender}/${receiver}`);
        dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
    }catch(error){
        dispatch({ type: MESSAGE_LIST_FAIL, payload: error.message });
    }
} 

export const sendMessageBD = (sender, receiver, message) => async (dispatch) => {
    dispatch({ type: MESSAGE_SEND_REQUEST });

    try{
        await Axios.post('/api/messages/send', { sender, receiver, message });
        dispatch({ type: MESSAGE_SEND_SUCCESS});
    }catch(error){
        dispatch({ type: MESSAGE_SEND_FAIL, payload: error.message });
    }
}

export const deleteMessage = (message) => {

}