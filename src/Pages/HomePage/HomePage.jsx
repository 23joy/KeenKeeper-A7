import React, { Suspense} from 'react';
import Banner from '../../Components/Banner/Banner';
import CardCount from '../../Components/CardCount/CardCount';
import AllFriends from './AllFriends';
import Footer from '../../Components/Footer/Footer';
import { RingLoader } from 'react-spinners';

const friendsPromise=fetch('/AllFriends.json').then((res)=>res.json())
const HomePage = () => {
    
    // console.log(friends)
    return (
        <div>
            <Banner></Banner>
            <CardCount friendsPromise={friendsPromise}></CardCount>
           <Suspense fallback={<h2 className='flex items-center justify-center'><RingLoader /></h2>}>
             <AllFriends friendsPromise={friendsPromise}></AllFriends>
           </Suspense>
            
        </div>
    );
};

export default HomePage;