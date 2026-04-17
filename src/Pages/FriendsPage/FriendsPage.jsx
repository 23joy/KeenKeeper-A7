import React, { useContext } from 'react';
import { FriendContext } from '../../TimeLine/FriendContext';
import { FaHandshakeSimple, FaVideo } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { LuMessageCircleMore } from 'react-icons/lu';
import call from "../../assets/call.png"
import Text from "../../assets/text.png"
import video from "../../assets/video.png"



const FriendsPage = () => {

const {callFriend,textFriend,videoFriend}=useContext(FriendContext)
// console.log(callFriend,textFriend,videoFriend)
const all=[
    ...(callFriend).map(f => ({ ...f, type: 'call',types:'Call'})),
     ...(textFriend).map(f => ({ ...f, type: 'text',types:'Text' })),
     ...(videoFriend).map(f => ({ ...f, type: 'video', types:'Video' })),
    ]
console.log(all)

    return (
        <div className='container mx-auto m-10'>
            <h2 className='font-bold'>TimeLine</h2>
            <div className='p-3 flex flex-col gap-4 rounded-2xl mt-5'>
                {
                    
                    all.map(item=>
                        <div className='bg-[#FFFFFF] rounded-2xl p-3'>
                            <div className=' flex items-center gap-2'>
                             
                                <div>
                                    {item.type==='call' && <img src={call} className='w-5 h-5' /> }
                                    {item.type==='text' && <img src={Text} className='w-5 h-5' />}
                                    {item.type==='video' && <img src={video} className='w-5 h-5' />}
                                </div>

                                <div>
                                    <h2 className='flex gap-1'>
                                    <div>
                                        {item.types==='Call' && <h2 className='text-green-900 font-semibold'>Call</h2>}
                                    {item.types==='Text' && <h2 className='text-green-900 font-semibold'>Text</h2>}
                                    {item.types==='Video' && <h2 className='text-green-900 font-semibold'>Video</h2>}
                                    </div>
                                    with{item.name}</h2>
                                </div>
                            </div>
                            <p className=''>{item.next_due_date}</p>
                        </div>
                        
                    )
                }
            </div>
        </div>
    );
};

export default FriendsPage;