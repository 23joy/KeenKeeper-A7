import React, { useContext } from 'react';
import { FriendContext } from '../../TimeLine/FriendContext';
import { FaHandshakeSimple } from 'react-icons/fa6';
const FriendsPage = () => {
const {callFriend,textFriend,videoFriend}=useContext(FriendContext)
console.log(callFriend,textFriend,videoFriend)
    const all=[callFriend,textFriend,videoFriend];
    return (
        <div className='container mx-auto m-10'>
            <h2 className='font-bold'>TimeLine</h2>
            <div className='bg-cyan-50 p-3'>
                {
                    all.map((item,ind)=>
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FriendsPage;