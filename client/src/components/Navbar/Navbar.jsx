import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        {/* <a href="#" className="logo">Our Smart Home Ecosystem</a>  */}
        <a href="/" className="nav-item">HOME</a>
        <a href="#" className="nav-item">ABOUT</a>
        <a href="#" className="nav-item">SERVICES</a>
        <a href="#" className="nav-item">BLOG</a>
        <a href="#" className="nav-item">CONTACT</a>
        <a href="/add" className="nav-item">Add Appliance</a>
        <a href="/edit" className="nav-item">Edit Appliance</a>
        <span className="contact">+123-456-7890</span>
      </nav>
    </div>
  );
}

export default Navbar;
