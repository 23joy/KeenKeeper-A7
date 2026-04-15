import React from 'react';



const AllFriends = ({Friends}) => {
    console.log(Friends)
    
    return (
        <div className='my-12 max-w-[80%] container mx-auto'>
            <h2 className='font-bold text-3xl '>Your Friends</h2>
            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                Friends.map((friend)=>
                    <div className="card bg-base-100 w-60 shadow-sm flex justify-center items-center mt-10">
                        <img className='rounded-full w-20 h-20' src={friend.picture}
                        />
                        <div className="card-body">
                            <h2 className="card-title">{friend.name}</h2>
                            <p>62d ago</p>
                            <div className='flex items-center gap-3 rounded-2xl'>
                                {
                                    friend.tags.map((tag)=>(
                                        <div className='badge badge-success p-2'>{tag}</div>
                                    )
                                )}
                            </div>
                            <div className={`badge text-white p-3 ${friend.status==='overdue' && 'bg-red-500'}
                            ${friend.status==='almost due' && 'bg-amber-600'}
                            ${friend.status==='on-track' && 'bg-green-950'}
                            `}>{friend.status}</div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default AllFriends;