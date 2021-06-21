import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";

import '../Css/SidebarChat.css';
import { Link } from 'react-router-dom';

;

function SidebarChat({ receiverName, addNewChat }) {
    const [seed, setSeed] = useState(""); //random picture    


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);



    const createChat = () => {
        const roomName = prompt("Please enter Name for chat");

        if (roomName) {
            //Do something in the database...
            
        }
    };

    return (!addNewChat) ? (
        <Link to={`/rooms/${receiverName}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{ receiverName }</h2>
                    <p>{  }</p>
                </div>
            </div>
        </Link>
    ): (
        <div className="sidebarChat"
            onClick={createChat} >
            <h2>Add New Chat</h2>
        </div>

    );
}

export default SidebarChat;
