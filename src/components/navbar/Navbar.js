import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  console.log(show); // Log the value of 'show' for checking

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className='nav_content'>
        <Link to="/" >
        <img className='nav_logo'  src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt='logo'/>
      </Link>
      </div>
      <Link to="/profile">
      
      <FaRegUserCircle className='nav_avatar' /> {/* Added FaRegUserCircle icon */}
   </Link> 
   </div>
  );
};

export default Navbar;
