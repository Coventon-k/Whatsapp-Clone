import React from 'react'


function Message({message, userPseudo}) {

    const date = new Date(message.createdAt);
    const hours = date.getHours();
    const minutes= date.getMinutes() ;
    

    return (
        <div>                   
            <p 
                className={`chat_message ${
                    message.sender === userPseudo && "chat_reciever"}`}
            >            
                <span className="chat_name">
                    {
                //we know who we are so message.name
                    }
                </span>
                {message.message}
                <span className="chat_timestamp">
                    { hours } : {minutes} 
                </span>
            </p>      
        </div>
    )
}

export default  Message;
