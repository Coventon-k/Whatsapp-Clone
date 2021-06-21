import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import { messageListReducer } from './reducers/messageReducers';
import { userReducer, userListReducer } from './reducers/userReducers';

const initialState = {
   userSignin: {
        user: (localStorage.getItem('userWhatsAppClone')) 
            ? JSON.parse(localStorage.getItem('userWhatsAppClone'))
            : null
    },
};

const reducer = combineReducers({
    messageList: messageListReducer,
    
    userSignin: userReducer,
    userList: userListReducer,
});

// Add it to the store to make it visible in the reduxDevTool
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;