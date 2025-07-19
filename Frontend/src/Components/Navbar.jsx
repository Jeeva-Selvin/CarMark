import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/store";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };
  const menuoptions = () => {
    if (isAuthenticated) {
      return (
        <>
          <div className="flex justify-between w-[90vw] h-[5wh]">
            <div className="md:flex">
              <li className="pl-4">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="pl-4">
                <Link to={"/product"}>Products</Link>
              </li>
              <li className="pl-4">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </div>
            <li className="pl-4 hidden md:flex">
              <button className=" text-2xl" onClick={logout}>LOGOUT</button>
            </li>
          </div>
        </>
      );
    }
  };
  const displayMenu = () => {
    const menu = document.getElementById("menu");
    const logo = document.getElementById("logo");
    const logout = document.getElementById("123");
    const qwe = document.getElementById("qwe")
    logout.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    qwe.classList.toggle("hidden")
  };
  return (
    <>
      <nav className="bg-gray-800 text-white flex justify-between md:justify-normal 2xl:p-3 p-4 m-0 shadow-xl items-center">
        <div id="logo" className="content-center md:flex">
          <Link to={"/"}>
            <img
              src="https://yt3.googleusercontent.com/eZeGk9sKITbVupzLYTa7_wvZrwehG393MfWzw9d3UUx2rbPGAkUZealBXH-F9lRpfGCoRb6svno=s160-c-k-c0x00ffffff-no-rj"
              className=" w-10 rounded-md "
            />
          </Link>
        </div>
        <div id="qwe" className="md:hidden hidden">
          <p className="pl-4">
            <button onClick={logout}>LOGOUT</button>
          </p>
        </div>

        <div
          id="123"
          className="hidden md:hidden items-center justify-center h-full"
        >
          <Link className="2xl:text-6xl text font-bold" to={"/login"}></Link>
        </div>

        <div>
          <ul className="hidden md:flex justify-between items-center pl-4 h-full text-2xl font-bold ">
            {menuoptions()}
          </ul>

          <div
            onClick={displayMenu}
            className={`flex md:hidden items-center justify-center left-0 h-full text-2xl font-bold`}
          >
            <p className={`${isAuthenticated ? "" : "hidden"}`}>☰</p>
          </div>
        </div>
      </nav>
      <ul
        id="menu"
        className={`bg-gray-200 hidden m-0 content-center md:hidden rounded-2xl h-32 text-xl ${isAuthenticated ? "" : "hidden"}`}
      >
        {menuoptions()}
      </ul>
    </>
  );
};

export default Navbar;
