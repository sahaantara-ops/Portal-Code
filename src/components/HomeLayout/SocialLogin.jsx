import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
                <h3 className='font-bold mb-5'>Login With Social Account</h3>
                <div className="space-y-3">
                    <button className="btn btn-dash btn-info w-full mb-3"><FcGoogle />Login With Google</button>
                    <button className="btn btn-dash w-full mb-3"><RxGithubLogo />Login With Github</button>
                    <button className="btn btn-dash btn-primary w-full mb-3"><FaFacebook />Login With Facebook</button>
                </div>
        </div>
    );
};

export default SocialLogin;