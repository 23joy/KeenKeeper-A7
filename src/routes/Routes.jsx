import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FriendsPage from "../Pages/FriendsPage/FriendsPage";
import ErrorPage from "../Pages/HomePage/ErrorPage";
import FriendsDetails from "../Pages/friendsDetails/FriendsDetails";


export const router=createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
      {
       index:true,
       Component:HomePage
      },
      {
       path:'/friends',
       Component:FriendsPage
      },
      {
        path:'/friendsDetails/:id',
        Component:FriendsDetails,
        loader:()=>fetch('/AllFriends.json')
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
  
])
