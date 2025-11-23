import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Challenges from "../Pages/Challenges/Challenges";
import MyActivities from "../Pages/MyActivities/MyActivities";
import PublicLayout from "../Layouts/PublicLayout";
import ChallengeDetails from "../Pages/Challenges/ChallengeDetails";
import AddNewChallenge from "../Pages/AddNewChallenge/AddNewChallenge";
import DashBoardlayout from "../Layouts/DashBoardlayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgetPassword from "../Pages/Auth/ForgetPassword";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout></PublicLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
                loader: async () => {
                    const res = await fetch('http://localhost:3000/cards');
                    return res.json()}
            },
        ]
    },

    {
        path: "/challenges",
        element: <Challenges />,
         loader: async () => {
                    const res = await fetch('http://localhost:3000/cards');
                    return res.json()},
                    
        
    },
    {
      path: "/challengeDetails/:id",
      element: <ChallengeDetails></ChallengeDetails>,
       loader: async () => {
                    const res = await fetch('http://localhost:3000/cards');
                    return res.json()},
    },
    {
        path: "/myActivities",
        element: <MyActivities />,
         loader: async ({params}) => {
                    const res = await fetch(`http://localhost:3000/cards/${params.id}`);
                    return res.json()},
    },
    {
        path: '/addNewChallenge',
        element: <AddNewChallenge></AddNewChallenge>
    },
    {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
                 {
                    path: '/auth/register',
                    element: <Register></Register>,
                },
                
                 {
                    path: '/auth/forget-password',
                    element: <ForgetPassword></ForgetPassword>
                 }
],
     {
            path: '/dashboard',
            element: <DashBoardlayout></DashBoardlayout>,
            children: [
                
                
                
               
            ]

        },
)