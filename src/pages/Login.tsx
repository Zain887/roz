import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


interface Props {
    // Define your component props here
}

const Login: React.FC<Props> = (props) => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className='relative h-[90vh] flex items-center justify-center'>
            <p className='font-bold text-3xl'>
                Please <span onClick={() => loginWithRedirect()} className='text-blue-500 cursor-pointer'>Login</span> to see the items
            </p>
        </div>
    );
};

export default Login;