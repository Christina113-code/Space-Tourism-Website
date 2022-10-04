import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import "../reset.css";
import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DestinationsPage from "../Pages/DestinationsPage";
import CrewPage from "../Pages/CrewPage";
import TechnologyPage from "../Pages/TechnologyPage";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState("navbar__list__link--moon");
  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  // let navlink = document.querySelector(".navbar__list__link");

  return (
    <Router>
      <nav className="bg-black items-center flex md:items-stretch md:p-0 justify-between w-screen py-4 px-7 ">
        <NavLink exact to="/" className="md:p-4">
          
          <img src={logo} alt="logo" className="w-10 " />
        </NavLink>
        <ul className="md:bg-gray hidden md:flex md:w-3/5  md:justify-center">
          <li className={`text-white px-8  font-condensed tracking-widest flex items-center uppercase`}>
            <NavLink exact to="/" className={"w-full"}>
              <span className="hidden lg:inline-block px-3 font-condensed font-semibold">00</span>Home
            </NavLink>
          </li>
          <li className={`text-white px-8  font-condensed tracking-widest flex items-center uppercase`}>
            <NavLink to="/destinations">
              <span className="hidden  lg:inline-block px-3 font-condensed font-semibold">01</span>Destinations
            </NavLink>
          </li>
          <li className={`text-white px-8  font-condensed tracking-widest flex items-center uppercase`}>
            <NavLink to="/crew">
              <span className="hidden  lg:inline-block px-3 font-condensed font-semibold">02</span>Crew
            </NavLink>
          </li>
          <li className={`text-white px-8  font-condensed tracking-widest flex items-center uppercase`}>
            <NavLink to="/technology">
              <span className="hidden  lg:inline-block px-3 font-condensed font-semibold">03</span>Technology
            </NavLink>
          </li>
        </ul>
        {sidebar ? (
          <div className="sidenav-container | ease-in-out">
            <ul className=" bg-white/5 backdrop-blur-2xl  h-screen absolute inset-y-0 right-0 w-56">
              <img
                src={close}
                alt="close icon"
                className="cursor-pointer absolute top-0 right-0 w-5 mt-9 mr-7 "
                onClick={toggleSideBar}
              />
              <li
                className="px-8 pt-[7rem] py-8 font-condensed uppercase text-white text-base tracking-5 tracking-widest"
                onClick={toggleSideBar}
              >
                <NavLink to="/">
                  <span className="text-white font-semibold px-2.5 ">00</span>Home
                </NavLink>
              </li>
              <li
                className="py-8 px-8 font-condensed uppercase text-white text-base tracking-5 tracking-widest"
                onClick={toggleSideBar}
              >
                <NavLink to="/destinations">
                  <span className="text-white font-semibold px-2.5">01</span>
                  Destinations
                </NavLink>
              </li>
              <li
                className="py-8 px-8 font-condensed uppercase text-white text-base tracking-5 tracking-widest"
                onClick={toggleSideBar}
              >
                <NavLink to="/crew">
                  <span className="text-white font-semibold px-2.5">02</span>Crew
                </NavLink>
              </li>
              <li
                className="py-8 px-8 font-condensed uppercase text-white text-base tracking-5 tracking-widest"
                onClick={toggleSideBar}
              >
                <NavLink to="/technology">
                  <span className="text-white font-semibold px-2.5">03</span>
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <img
            src={hamburger}
            alt="hamburger"
            className="w-7 h-5 cursor-pointer md:hidden lg:hidden"
            onClick={toggleSideBar}
          />
        )}
      </nav>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
