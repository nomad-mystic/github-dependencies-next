// Community
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '@/app/lib/redux/slices/auth/auth-types';

// Components
import LoginPage from '@/app/auth/login/page';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const AuthPage = (): React.JSX.Element => {
    const isAuthorized = useSelector((state: AuthState) => state.auth);

    return (
        <main className="flex flex-col items-center min-h-screen justify-center w-full">
            {
                !isAuthorized && <LoginPage />
            }
        </main>
    );
};

export default AuthPage;
