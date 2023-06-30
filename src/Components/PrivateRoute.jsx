import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({children}) {
  
  const navi =   useNavigate();
 let isLogin = true;
    if(isLogin){
  return (
  children
  )
    }
    else{
       return   <Navigate to="/login"/>
    }
}

export default PrivateRoute




