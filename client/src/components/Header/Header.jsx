import style from "./Header.module.css";
import Head from '../Head/Head';
import NavBar from "../NavBar/NavBar";
import Chat from '../Chat/Chat';
import { useState } from "react";



const Header = (props) =>{
    const [chatStatus,setChatStatus] =useState(false);
    return(
        <div id={style.Header} ref={props.headerRef}>
            <Head isAdmin={props.isAdmin}/>
            <NavBar/>
            <div id={style.ChatSectionContainer}>
                {chatStatus?(<div id={style.chatContainer}>
                    <p onClick={()=>setChatStatus(false)}>x</p>
                    <div>
                        <Chat/>
                    </div>
                </div>):(<div id={style.openChat} onClick={()=>setChatStatus(true)}><p>Chat</p></div>)}
                
                
            </div>
        </div>
    )
};

export default Header;