import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../TimeLine/FriendContext';

const Deshboard = () => {
    const {callFriend,textFriend,videoFriend}=useContext(FriendContext)
    

    const data = [
        { name: 'Audio', value:callFriend.length, fill: '#0088FE' },
        { name: 'Text', value: textFriend.length, fill: '#00C49F' },
        { name: 'Video', value: videoFriend.length, fill: '#FFBB28' },
    ];
    const total=callFriend.length + textFriend.length + videoFriend.length;

    return (
        <div className='container mx-auto m-10'>
            <h2 className='font-bold text-2xl'>Friendship Analytics</h2>
            <div className='bg-[#FFFFFF] rounded-2xl mt-5 p-4'>
                <h2 className=''>By Interaction Type</h2>
                {
                    total===0 && <h3 className='flex justify-center items-center p-10'>No data found</h3>
                }
                <div className='flex  justify-center'>
                    <PieChart className='w-80 h-60' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;