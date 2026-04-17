import React, {createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext=createContext();

const FriendProvider = ({children}) => {

    const [callFriend,setCallFriend]=useState([]);
    const [textFriend,setTextFriend]=useState([]);
    const [videoFriend,setVideoFriend]=useState([]);
    
    const handleAudio=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistCall=callFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistCall){
            toast.error("The friends is already exist");
        }
        else{
            setCallFriend([...callFriend,currenFriend])
            toast.success(`${currenFriend.name} added timeline`) 
        }
        
    }
    const handleText=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistText=textFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistText){
            toast.error("The friends is already exist");
        }
        else{
            setTextFriend([...textFriend,currenFriend])
            toast.success(`${currenFriend.name}added timeline`) 
        }
        
    }
    const handleVideo=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistVideo=videoFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistVideo){
            toast.error("The friends is already exist");
        }
        else{
            setVideoFriend([...videoFriend,currenFriend])
            toast.success(`${currenFriend.name} added timeline`) 
        }
        
    }
    const data={
        callFriend,
        textFriend,
        videoFriend,
        
        handleAudio,
        handleText,
        handleVideo
    };
    
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;