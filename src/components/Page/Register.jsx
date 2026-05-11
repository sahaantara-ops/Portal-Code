import React from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import  AuthContext  from "../../Provider/authContext";
import { useContext } from "react";

const Register = () => {
    const {createUser,setUser, googleSignIn} = useContext(AuthContext);
     const [nameError, setNameError] = useState("");
    const handleRegister = (e) => {
     
        e.preventDefault();
        console.log("e.target");
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5) {
            setNameError("Name must be at least 5 characters long");
            return;
        } else {
            setNameError("");
        }
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        

        console.log({name,photo,email,password});
        createUser(email,password).then(result =>{
            const user = result.user;
            // console.log(user);
            setUser(user);
        })
        .catch(error =>{
            console.error(error);
            alert(error.message);
        });

    }
    const handleGoogleSignIn = () => {

    googleSignIn()
        .then(result => {

            const user = result.user;
            console.log(user);

        })
        .catch(error => {
            console.log(error);
        });

}
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>

              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>

          

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <span className="text-sm">
                I agree to the Terms & Conditions
              </span>
            </div>

            {/* Register Button */}
            <button  onClick={handleGoogleSignIn} type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Register */}
          <button className="btn btn-outline w-full">
            <FaGoogle />Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-shadow-blue-950 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;