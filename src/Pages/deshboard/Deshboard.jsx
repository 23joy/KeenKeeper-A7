import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../TimeLine/FriendContext';

const Deshboard = () => {
    const {callFriend,textFriend,videoFriend}=useContext(FriendContext)
    

    const data = [
        { name: 'Audio', value:90, fill: '#0088FE' },
        { name: 'Text', value: 300, fill: '#00C49F' },
        { name: 'Video', value: 300, fill: '#FFBB28' },
        ];

    return (
        <div className='container mx-auto m-10'>
            <h2 className='font-bold text-2xl'>Friendship Analytics</h2>
            <div className='bg-amber-50 p-4'>
                <h2 className=''>By Interaction Type</h2>
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