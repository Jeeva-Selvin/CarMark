import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import useAuthStore from "./store/store";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const { isAuthenticated } = useAuthStore();
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={isAuthenticated?<Home/>:<Navigate to="/login"/>}/>
            <Route path="/product" element={isAuthenticated?<Product/>:<Navigate to="/login"/>}/>
            <Route path="/contact" element={isAuthenticated?<Contact/>:<Navigate to="/login"/>}/>
            <Route path="/login" element={isAuthenticated?<Navigate to="/"/>:<Login/>}/>
            <Route path="/signup" element={isAuthenticated?<Navigate to="/"/>:<Signup/>}/>
          </Routes>
        </main>
    </>
  );
}

export default App;
