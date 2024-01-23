import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const PrivatRouter = ({children}) => {

    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <progress className='progress w-56'></progress>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivatRouter;