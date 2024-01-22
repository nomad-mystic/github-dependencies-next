'use client';

// Community
import React from 'react';
import { useSelector } from 'react-redux';

// Types
import { AuthState } from '@/app/lib/redux/slices/auth/auth-types';

// Components
import DashboardPage from '@/app/dashboard/page';
import AuthPage from '@/app/auth/page';
import Header from '@/app/components/header/header';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
export default function Home(): React.JSX.Element {
    // @todo Make sure the auth works and then update our app
    const isAuthorized = useSelector((state: AuthState) => state.auth);

    return (
        <>


            {
                isAuthorized &&  (<DashboardPage/>)
            }

            {
                !isAuthorized && (<AuthPage />)
            }
        </>
    )
};
