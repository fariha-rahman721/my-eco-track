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
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";
import MyChallenges from "../Pages/MyChallenges/MyChallenges";
import UpdateChallenge from "../Pages/UpdateChallenge/UpdateChallenge";
import Error from "../Pages/Error/Error";
import TotalParticipants from "../Dashboard/Admin/TotalParticipants";
import About from "../Components/About";
import Privacy from "../Components/Privacy";
import AdminStatistics from "../Dashboard/Admin/AdminStatistics";
import UsersPage from "../Dashboard/Admin/UsersPage";


export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <PublicLayout></PublicLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
                loader: async () => {
                    const res = await fetch('https://eco-track-server-two.vercel.app/cards');
                    return res.json()
                }
            },
        ]
    },

    {
        path: "/challenges",
        element: <Challenges />,
        loader: async () => {
            const res = await fetch('https://eco-track-server-two.vercel.app/cards');
            return res.json()
        },


    },
    {
        path: "/challengeDetails/:id",
        element:
            <ChallengeDetails></ChallengeDetails>,
        loader: async () => {
            const res = await fetch('https://eco-track-server-two.vercel.app/cards');
            return res.json()
        },
    },
    {
        path: "/updateChallenge/:id",
        element: <PrivateRoute>
            <UpdateChallenge></UpdateChallenge>
        </PrivateRoute>,
        loader: async () => {
            const res = await fetch('https://eco-track-server-two.vercel.app/cards');
            return res.json()
        },

    }
    ,
    {
        path: "/myActivities",
        element: <PrivateRoute>
            <MyActivities />
        </PrivateRoute>,
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/privacy',
        element: <Privacy></Privacy>
    },

    {
        path: '/loading',
        element: <Loading></Loading>
    },
    {
        path: '/addNewChallenge',
        element: <PrivateRoute>
            <AddNewChallenge></AddNewChallenge>
        </PrivateRoute>,
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardlayout></DashBoardlayout></PrivateRoute>,
        children: [
        {
            path: "totalParticipants",
            element: <TotalParticipants></TotalParticipants>
        },
        {
        path: 'myChallenges',
        element: <MyChallenges></MyChallenges>
        
    },
        {
        path: 'adminStatistics',
        element: <AdminStatistics></AdminStatistics>
        
    },
        {
        path: 'usersPage',
        element: <UsersPage></UsersPage>
        
    },
    {
        path: "myActivities",
        element: 
            <MyActivities />
        
    },

        ]

    },
],
    

)