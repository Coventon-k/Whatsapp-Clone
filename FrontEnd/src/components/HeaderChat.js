import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';


export default function HeaderChat({receiverName}) {
    return (
        <div className="chat_header">
             <Avatar />
                
                <div className="chat_headerInfo">
                    <h3>{receiverName}</h3>
                   
                </div>

                <div className="chat_headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>       
        </div>
    )
}