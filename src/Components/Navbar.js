import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg';
import '../reset.css';
import '../App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DestinationsPage from '../Pages/DestinationsPage';
import CrewPage from "../Pages/CrewPage";
import TechnologyPage from "../Pages/TechnologyPage";
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState('navbar__list__link--moon');
  const toggleSideBar = () =>{
    setSidebar(!sidebar);
  }

  // let navlink = document.querySelector(".navbar__list__link");
  

  return (
    <Router>
      
        
      <nav className='navbar'>
        
      <NavLink exact to="/" > <img src={logo} alt="logo" className='header__img' /></NavLink>
       <ul className="navbar__list">
         <li className={`navbar__list__link`}><NavLink exact to="/" ><span>00</span>Home</NavLink></li>
         <li className={`navbar__list__link`}><NavLink to="/destinations"  ><span>01</span>Destinations</NavLink></li>
         <li className={`navbar__list__link`}><NavLink to="/crew" ><span>02</span>Crew</NavLink></li>
         <li className={`navbar__list__link`}><NavLink to="/technology"  ><span>03</span>Technology</NavLink></li>

       </ul>
       {sidebar? 
       <div className='sidenav-container'>
        
<ul className="navbar__list--side">
<img src={close}alt="close icon" className='close-icon' onClick={toggleSideBar}/>
         <li className='navbar__list__item--side navbar__list__item--side--padding-top' onClick={toggleSideBar}><NavLink to="/"><span>00</span>Home</NavLink></li>
         <li className=' navbar__list__item--side'onClick={toggleSideBar}><NavLink to="/destinations"><span>01</span>Destinations</NavLink></li>
         <li className=' navbar__list__item--side'onClick={toggleSideBar}><NavLink to="/crew"><span>02</span>Crew</NavLink></li>
         <li className=' navbar__list__item--side'onClick={toggleSideBar}><NavLink to="/technology"><span>03</span>Technology</NavLink></li>

       </ul>
       </div>
       
      :         <img src={hamburger} alt="hamburger" className ="hamburger" onClick={toggleSideBar}/>

      }
       </nav>
       
       <Routes>
       <Route exact path="/" element={<HomePage/>} />
  <Route path="/destinations" element={<DestinationsPage/>} />
  <Route path="/crew" element={<CrewPage/>} />
  <Route path="/technology" element={<TechnologyPage/>} />

        </Routes>
     

    </Router>  
  )
}

export default Navbar