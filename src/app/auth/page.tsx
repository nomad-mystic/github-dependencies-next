import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AuthState } from '@/app/lib/redux/slices/auth/auth-types';
import LoginPage from '@/app/auth/login/page';

const AuthPage = () => {
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
