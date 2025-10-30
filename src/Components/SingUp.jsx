import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Account Created Successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-700 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <input
          id="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-300 outline-none rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-indigo-500 ${
            errors.username ? "border-red-400" : ""
          }`}
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mb-2">{errors.username}</p>
        )}
        <input
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-300 outline-none rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-indigo-500 ${
            errors.email ? "border-red-400" : ""
          }`}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}
        <input
          id="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-300 outline-none rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-indigo-500 ${
            errors.password ? "border-red-400" : ""
          }`}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-4">{errors.password}</p>
        )}
        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded-lg text-white font-medium shadow-md hover:shadow-lg"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
