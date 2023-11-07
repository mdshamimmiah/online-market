/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}



    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;


PrivateRoute.PropTypes = {
    children: PropTypes.node
}

// git commit -m "first commit"

// apiKey:import.meta.env. VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.  VITE_projectId,
//   storageBucket:import.meta.env. VITE_storageBucket,
//   messagingSenderId:import.meta.env. VITE_messagingSenderId,
//   appId:import.meta.env. VITE_appId




// apiKey: "AIzaSyA9sLlV5_Ja7_TjqCZKPndJKasyD8xouiY",
// authDomain: "asignment-11-58fa8.firebaseapp.com",
// projectId: "asignment-11-58fa8",
// storageBucket: "asignment-11-58fa8.appspot.com",
// messagingSenderId: "959282798474",
// appId: "1:959282798474:web:9fbdc86c2e2106f1bcf273"