import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



//ICONS
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from "@material-ui/icons";

import '../Css/Sidebar.css';
import SidebarChat from "./SidebarChat";  


//Update 
import { listUsers, signOut } from '../actions/userActions';



function Sidebar({ user }) {
    const [searchUser, setSearchUser] = useState("");
;

    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const { users } = userList;


    useEffect(() =>{
        const userPseudo = (user.pseudo) ? user.pseudo : user.email

        dispatch(listUsers(userPseudo));        
    }, [dispatch]);


    const signoutHandler = () =>{
        dispatch(signOut());
    }

    
   
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Link to="#signout" onClick={signoutHandler}>
                    <Avatar src={user?.photoURL} title="Sign Out"/>
                </Link>
                <div className="sidebar_headerRight">
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>
        
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input
                        value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)} 
                        placeholder="Rechercher une discussion"
                        type="text"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {  
                
                (users) ? (
                    users.map((receiver) => (
                        <SidebarChat 
                                key= {receiver._id} 
                                id= {receiver._id} 
                                receiverName={receiver.pseudo}
                        />
                        )
                    )
                )
                : ''
                }
            </div>

        </div>
    )
}

export default Sidebar;