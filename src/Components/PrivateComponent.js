import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { toastError } from '../utils/toastMessage';

const PrivateComponent = () => {
    const auth=localStorage.getItem('user');
    if(!auth){
        toastError("Login to Continue")
    }
  return auth?<Outlet/>:<Navigate to=''/>
}

export default PrivateComponent