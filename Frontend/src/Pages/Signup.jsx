import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import instance from "../axios";
import useAuthStore from "../store/store.js"

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setIsAuthenticated } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/signup", {
        name,
        password,
      },{withCredentials: true});
      if (response.data.token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
      }
      console.log(response)
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center h-[93.3vh] bg-gray-200">
      <div className="flex flex-col h-110 w-110 justify-center items-center bg-white shadow-md rounded-2xl">
        <p className="text-3xl mb-2 mt-3 font-bold">Signup</p>
        <div className="flex flex-col">
          <label className="mt-8 ml-3 text-lg">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="ml-3 pl-5 mb-2 w-90 h-9 rounded mt-2 bg-blue-50 focus:outline-none"
            type="text"
            required={true}
          />

          <label className="mt-2 ml-3 text-lg">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="ml-3 pl-5 w-90 h-9 rounded mt-2 bg-blue-50 focus:outline-none"
            type="password"
            required={true}
          />
          <button
            className="bg-blue-500 text-white text-lg rounded p-1 m-3 mt-6"
            type="submit"
          >
            Create Account
          </button>
          <p className="ml-4 mt-4 ">
            Have a account?
            <Link
              className="text-purple-600 hover:underline ml-2"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Signup;
