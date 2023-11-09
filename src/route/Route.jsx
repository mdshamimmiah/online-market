import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../Firebase/Login";
import Register from "../Firebase/Register";
import ErrorPage from "../Firebase/ErrorPage";
import MyPostedJob from "../pages/myPostedJob/MyPostedJob";
import AddJob from "../component/AddJob";
import Digital from "../component/digital/Digital";
import Graphics from "../component/graphics/Graphics";
import JobDetails from "../pages/home/jobCart/JobDetails";
import MyBits from "../pages/MyBits";
import Update from "../pages/home/jobCart/Update";
import Request from "../pages/request/Request";
import PrivateRoute from "../Firebase/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://online-market-server.vercel.app/online'),


            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },


            {
                path: '/myPostedJob',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
                loader: () => fetch('https://online-market-server.vercel.app/online'),
            },

            {
                path: '/myBits',
                element: <PrivateRoute><MyBits></MyBits></PrivateRoute>,
                loader: () => fetch('https://online-market-server.vercel.app/bit'),
            },
            {
                path: '/bitRequest',
                element: <PrivateRoute> <Request></Request></PrivateRoute>,
                loader: () => fetch('https://online-market-server.vercel.app/bit'),
            },

            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },


            {
                path: '/digital',
                element: <Digital></Digital>
            },
            {
                path: '/graphics',
                element: <Graphics></Graphics>,
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://online-market-server.vercel.app/online/${params.id}`)
            },
            {
                path: '/updateDetails/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://online-market-server.vercel.app/online/${params.id}`),
            },

        ]
    },
]);

export default router;