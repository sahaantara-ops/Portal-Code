import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>

              <input
                type="text"
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
                placeholder="Enter password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Confirm Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
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
            <button className="btn btn-primary w-full mt-2">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Register */}
          <button className="btn btn-outline w-full">
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;