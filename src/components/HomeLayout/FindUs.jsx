import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
const FindUs = () => {
    return (
        <div>
            <h3 className='font-bold text-xl text-pink-400'>Find Us On</h3>
            <div>
                <div className="join join-vertical w-full mt-4">
            <button className="btn btn-outline btn-info bg-base-100"><IoLogoFacebook />Facebook</button>
            <button className="btn btn-soft btn-secondary bg-base-100"><IoLogoTwitter />Twitter</button>
            <button className="btn btn-soft btn-error bg-base-100"><IoLogoInstagram />Instagram</button>
            </div>
            </div>

        </div>
    );
};

export default FindUs;