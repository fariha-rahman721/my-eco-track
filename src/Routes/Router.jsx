import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Challenges from "../Pages/Challenges/Challenges";
import MyActivities from "../Pages/MyActivities/MyActivities";
import PublicLayout from "../Layouts/PublicLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout></PublicLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,

            },
        ]
    },

    {
        path: "/challenges",
        element: <Challenges />,
    },
    {
        path: "/myActivities",
        element: <MyActivities />,
    }
])