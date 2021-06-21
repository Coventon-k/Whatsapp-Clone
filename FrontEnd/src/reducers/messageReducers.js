import { 
    MESSAGE_LIST_REQUEST, 
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL
   } 
from '../constants/MessageConstants';

export const messageListReducer = ( 
    state = { loading: true, messages: [] }, 
    action
    ) => {
    switch(action.type){
        case MESSAGE_LIST_REQUEST:
            return { loading: true };
        case MESSAGE_LIST_SUCCESS:
            return { loading: false, messages: action.payload };
        case MESSAGE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}