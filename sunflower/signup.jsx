import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Signup Successful!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-[90%] max-w-4xl overflow-hidden">
        
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-purple-600 to-pink-500 text-white p-10">
          <h1 className="text-3xl font-bold text-center">
            Enjoy Our Learning World 
          </h1>
          <p className="text-center mt-3 text-sm text-purple-100">
            Join our platform and start your learning journey today!
          </p>
        </div>

        <div className="md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
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
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-500 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
