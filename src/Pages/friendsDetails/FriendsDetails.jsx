import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import call from "../../assets/call.png"
import Text from "../../assets/text.png"
import video from "../../assets/video.png"
import { MdDeleteOutline } from 'react-icons/md';
import { IoArchiveOutline } from 'react-icons/io5';
import { FriendContext } from '../../TimeLine/FriendContext';


const FriendsDetails = () => {
    const {id}=useParams();

    const friends=useLoaderData()
    const friend=friends.find(friend=>friend.id==id)
    
        
    const {handleAudio,handleText,handleVideo}=useContext(FriendContext)
    console.log(handleAudio,handleText,handleVideo);
    
    
    return (
        <div className='flex m-10 container mx-auto '>
            <div className='left w-90 mr-10 '>
                <div className='bg-[#FFFFFF] rounded-2xl p-2 p-5 mb-5 space-y-5
                flex flex-col justify-center items-center'>
                    <img className=' w-30 h-30 rounded-full' src={friend.picture} alt="" />
                    <div className={`badge text-white p-3 ${friend.status==='overdue' && 'bg-red-500'}
                    ${friend.status==='almost due' && 'bg-amber-600'}
                    ${friend.status==='on-track' && 'bg-green-950'}
                    `}>{friend.status}</div>
                    <div className='flex items-center gap-3 rounded-2xl'>
                        {
                            friend.tags.map((tag)=>(
                                <div className='badge badge-success p-2'>{tag}</div>
                            )
                        )}
                    </div>
                        <p className='font-thin'>"{friend.bio}"</p>
                        <p>{friend.email}</p>
                </div>
                <div className='flex flex-col gap-4  '>
                    <h2 className='flex items-center justify-center bg-[#FFFFFF] rounded-2xl p-3 font-bold'><MdDeleteOutline />Snooze 2 Weeks</h2>
                    <h2 className='flex items-center justify-center bg-[#FFFFFF] rounded-2xl p-3 font-bold'><IoArchiveOutline />Archive</h2>
                    <h2 className='flex items-center justify-center bg-[#FFFFFF] rounded-2xl p-3 text-red-600'><MdDeleteOutline/>Delete</h2>
                </div>
                
            </div>


            <div className='right'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-[#FFFFFF] rounded-2xl p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.goal}</h2>
                        <p>Goal(Days)</p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] rounded-2xl mt-10 p-5'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-green-900'>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every <span className='font-bold'>{friend.goal} Days</span></p>
                </div>
                <div className='bg-[#FFFFFF] rounded-2xl mt-5 flex flex-col gap-2 p-5'>
                    <h2>Quick Check-In</h2>
                    <div className='flex gap-4'>
                        <div className='w-20 bg-[#F8FAFC] rounded-xl p-3 font-bold' onClick={()=>handleAudio(friend)}>
                            <img src={call} alt="" />
                            <p>Call</p>
                        </div>
                        <div className='w-20 bg-[#F8FAFC] rounded-xl p-3 font-bold'onClick={()=>handleText(friend)}>
                            <img src={Text} alt="" />
                            <p>Text</p>
                        </div>
                        <div className='w-20 bg-[#F8FAFC] rounded-xl p-3 font-bold'onClick={()=>handleVideo(friend)}>
                            <img src={video} alt="" />
                            <p>Video</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;