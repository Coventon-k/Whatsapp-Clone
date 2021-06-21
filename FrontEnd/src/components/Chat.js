import React, {  } from 'react';
import { useParams } from "react-router-dom";
//Components
import HeaderChat from './HeaderChat';
import ChatBody from './ChatBody';
//CSS
import '../Css/Chat.css';


function Chat({ user }) {

    const { receiverName } = useParams();
    const userPseudo = (user.pseudo) ? user.pseudo : user.email

    return (
        <div className="chat">
            <HeaderChat 
                receiverName={receiverName}
            />   

            <ChatBody 
                userPseudo={userPseudo}
                receiverName = {receiverName}
            />            
        </div>    
    );
}

export default Chat;