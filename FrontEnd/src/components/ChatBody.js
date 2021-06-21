import React, { useState, useEffect } from 'react';
import Message from './Message';

//Icons
import { IconButton } from '@material-ui/core';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import ReactEmojiPicker from '@bit/personal-dev.emoji-picker.react-emoji-picker';


import { useSelector, useDispatch } from 'react-redux';
import { sendMessageBD, listMessages } from '../actions/messageActions';


export default function ChatBody({receiverName, userPseudo}) {
   
    const dispatch = useDispatch();
    const messageList = useSelector(state => state.messageList);
    const { messages } = messageList;

    const [messageInput, setMessageInput] = useState("");

    const [showEmojiIcons, setShowEmojiIcons] = useState(false);

    
    const sendMessage = (e) => {
        e.preventDefault();  
        //only char
        if(messageInput.trim().length) {
            dispatch(sendMessageBD(userPseudo ,receiverName, messageInput));

        }
           
        setMessageInput("");
    };
    
    const showEmoji = () =>{
        setShowEmojiIcons(!showEmojiIcons);
    }
    
    useEffect(() =>{
        dispatch(listMessages(userPseudo ,receiverName));   
    }, [dispatch,receiverName, userPseudo, messageInput == ""]);


    return (
        <>
            <div className="chat_body">
                {    
                (messages ) ?
                messages
                    .map((message) => (   
                        <div>
                            <Message 
                                key={message._id}
                                message={message}
                                userPseudo={userPseudo}
                            />                                
                        </div>
                                        
                    ))
                    : ''
                }
            </div>

            <div className="chat_footer">
                <IconButton><InsertEmoticonIcon onClick={showEmoji}/></IconButton>
                {
                    (showEmojiIcons) ?(
                        <div className="emoji_popUp">
                            <ReactEmojiPicker onSelected={currentEmoji => {
                                    setMessageInput(currentEmoji); 
                            }} 
                            />
                        </div>
                    ) :''
                }
                <form >
                    <input            
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)} 
                        placeholder="Type a message"
                        type="text" />
                    <button onClick={sendMessage}
                        type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>

        </>
    )
}
