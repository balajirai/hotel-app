// Login.jsx
import React from 'react';
import firebase from 'firebase/compat/app'; // Import the firebase module
import 'firebase/auth';
import { auth } from '../../Firebase';

function Login() {
    const handleLogin = async () => {

        console.log("login");
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
        } 
        catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className="flex items-center justify-center bg-inherit py-12 px-4 sm:px-6 lg:px-8 min-h-full">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <p className="mt-6 text-center text-lg font-bold text-white">
                        Sign in with Google
                    </p>
                    {/* <p className="mt-2 text-center text-sm text-gray-600">
                        Or continue with Google
                    </p> */}
                </div>
                <div className="mt-8 flex justify-center">

                    <button onClick={handleLogin}
                        className="px-4 py-2 border flex gap-2 bg-white border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow ease-out hover:ease-in transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" ></img>
                        <span>Login with Google</span>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Login;

