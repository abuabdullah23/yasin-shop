"use client"

import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    // const { googleLogin, setLoading } = useAuth();

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(res => {
    //             toast.success('Login with Google Successful');
    //             setLoading(false);
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => {
    //             toast.error(error.message);
    //             setLoading(false);
    //         })
    // }

    return (
        <div>
            <div className='p-2 rounded-full w-full border-2 border-cyan-400 hover:bg-cyan-200 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;