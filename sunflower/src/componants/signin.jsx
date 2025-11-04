import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Email Sign-in
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // ✅ Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-[90%] max-w-4xl overflow-hidden h-full">

        
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-purple-600 to-pink-500 text-white p-10">
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
          <p className="text-center mt-3 text-sm text-purple-100">
            Login to continue learning
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full py-2 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition"
            >
              Sign in with Google
            </button>
          </div>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-500 font-semibold hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
