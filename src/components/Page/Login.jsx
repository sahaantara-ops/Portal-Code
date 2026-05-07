import React from 'react';
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Login Now
          </h1>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm link link-hover text-primary"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <span className="text-sm">Remember me</span>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline w-full">
          <FaGoogle />  Continue with Google
          </button>

          {/* Register */}
          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Login;