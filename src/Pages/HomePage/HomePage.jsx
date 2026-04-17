import React, { use } from 'react';
import Banner from '../../Components/Banner/Banner';
import CardCount from '../../Components/CardCount/CardCount';
import AllFriends from './AllFriends';
import Footer from '../../Components/Footer/Footer';

const friendsPromise=fetch('/AllFriends.json').then((res)=>res.json())
const HomePage = () => {
    const friends=use(friendsPromise);
    // console.log(friends)
    return (
        <div>
            <Banner></Banner>
            <CardCount friends={friends}></CardCount>
            <AllFriends friends={friends}></AllFriends>
            
        </div>
    );
};

export default HomePage;