import React, {createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext=createContext();

const FriendProvider = ({children}) => {

    const [callFriend,setCallFriend]=useState([]);
    const [textFriend,setTextFriend]=useState([]);
    const [videoFriend,setVideoFriend]=useState([]);
    
    const handleAudio=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistBook=callFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistBook){
            toast.error("The friends is already exist");
        }
        else{
            setCallFriend([...callFriend,currenFriend])
            toast.success("The friends added time line") 
        }
        
    }
    const handleText=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistBook=textFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistBook){
            toast.error("The friends is already exist");
        }
        else{
            setTextFriend([...textFriend,currenFriend])
            toast.success("The friends added time line") 
        }
        
    }
    const handleVideo=(currenFriend)=>{
        // console.log (currenFriend);

        const isExistBook=videoFriend.find(friend=>friend.id===currenFriend.id)

        if(isExistBook){
            toast.error("The friends is already exist");
        }
        else{
            setVideoFriend([...videoFriend,currenFriend])
            toast.success("The friends added time line") 
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