import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import call from "../../assets/call.png"
import Text from "../../assets/text.png"
import video from "../../assets/video.png"
import { MdDeleteOutline } from 'react-icons/md';
import { IoArchiveOutline } from 'react-icons/io5';


const FriendsDetails = () => {
    const {id}=useParams();
    console.log(id,'id')
    const friends=useLoaderData()
    // console.log(friends)
    const friend=friends.find(friend=>friend.id==id)
    console.log(friend)
    return (
        <div className='flex m-10 container mx-auto '>
            <div className='left w-90 mr-10 '>
                <div className='bg-amber-50 p-2 p-5 mb-5 space-y-5'>
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
                <div className='flex flex-col gap-4'>
                    <h2 className='flex items-center bg-cyan-50 p-3 font-bold'><MdDeleteOutline />Snooze 2 Weeks</h2>
                    <h2 className='flex items-center bg-cyan-50 p-3 font-bold'><IoArchiveOutline />Archive</h2>
                    <h2 className='flex items-center bg-cyan-50 p-3 text-red-600'><MdDeleteOutline/>Delete</h2>
                </div>
                
            </div>


            <div className='right'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-mauve-50 p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='bg-mauve-50 p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.goal}</h2>
                        <p>Goal(Days)</p>
                    </div>
                    <div className='bg-mauve-50 p-15 h-10 text-center flex
                    flex-col items-center justify-center'>
                        <h2>{friend.next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div>
                <div className='bg-gray-50 mt-10 p-5'>
                    <h2>Relationship Goal</h2>
                    <p>Connect every <span className='font-bold'>{friend.goal} Days</span></p>
                </div>
                <div className='bg-gray-50 mt-5  p-5'>
                    <h2>Quick Check-In</h2>
                    <div className='flex gap-4'>
                        <div className='w-20 bg-mauve-100 p-3 font-bold'>
                            <img src={call} alt="" />
                            <p>Call</p>
                        </div>
                        <div className='w-20 bg-mauve-100 p-3 font-bold'>
                            <img src={Text} alt="" />
                            <p>Text</p>
                        </div>
                        <div className='w-20 bg-mauve-100 p-3 font-bold '>
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