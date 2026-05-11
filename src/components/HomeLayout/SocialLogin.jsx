import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import AuthContext from '../../Provider/authContext';
import { useNavigate } from 'react-router';

const SocialLogin = () => {

    const { githubSignIn,googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGithubSignIn = () => {

        githubSignIn()
            .then(result => {
                console.log(result.user);
                alert("GitHub Login Successful");
            })
            .catch(error => {
                console.log(error);
            });

    }
     const handleGoogleSignIn = () => {

  googleSignIn()
    .then(result => {

      const user = result.user;
      console.log(user);

      navigate(location?.state ? location.state : "/");

    })
    .catch(error => {
      console.log(error);
    });

}

    return (
        <div>
            <h3 className='font-bold mb-5'>Login With Social Account</h3>

            <div className="space-y-3">

                <button 
                onClick={handleGoogleSignIn}
                className="btn btn-dash btn-info w-full mb-3">
                    <FcGoogle /> Login With Google
                </button>

                <button
                    onClick={handleGithubSignIn}
                    className="btn btn-dash w-full mb-3"
                >
                    <RxGithubLogo /> Login With Github
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;