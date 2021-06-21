import { 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNOUT, 
    USER_SIGNIN_SUCCESS,
    SET_USER_GMAIL_AUTH ,


    //User List
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
} from '../constants/userConstants';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER_GMAIL_AUTH:
            return { loading: false, ...state, user: action.payload };
        //Backend AJAX Request
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {}; //auto remove        
        default:
            return state;
    }
};


export const userListReducer = ( 
    state = { loading: true,  users: [] }, 
    action
    ) => {
    switch(action.type){
        case USER_LIST_REQUEST:
            return { loading: true };
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}