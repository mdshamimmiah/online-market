import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './route/Route.jsx'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from './Firebase/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
