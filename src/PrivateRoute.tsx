import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


interface Props {
    // Define your component props here
}

const PrivateRoute: React.FC<Props> = (props) => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    );
};

export default PrivateRoute;