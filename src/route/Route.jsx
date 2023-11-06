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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/online'),
             

            },
            {
                path: '/addJob',
                element:<AddJob></AddJob>
            },


            {
                path: '/myPostedJob',
                element:<MyPostedJob></MyPostedJob>,
                loader : () => fetch('http://localhost:5000/online'),
            },

            {
                path:'/myBits',
                element:<MyBits></MyBits>,
                loader : () => fetch('http://localhost:5000/bit'),
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
                element:<Digital></Digital>
            },
            {
                path: '/graphics',
                element:<Graphics></Graphics>,
            },
            {
               path: '/jobDetails/:id',
               element: <JobDetails></JobDetails>,
               loader: ({ params }) => fetch(`http://localhost:5000/online/${params.id}`)
            },
            {
                path:'/updateDetails/:id',
                element:<Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/online/${params.id}`),
            },

        ]
    },
]);

export default router;