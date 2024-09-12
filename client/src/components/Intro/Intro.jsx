// Component code

// Component code

import React from "react";
import img from '../../Images/smartHome_nav.jpeg'
import "./Intro.css";
import Navbar from '../Navbar/Navbar.jsx';
// import '../Navbar/Navbar.css';

const SavvyHomeAutomationExpert = () => {
  return (
    <section className="intro-section">
      <Navbar />
      <div className="savvy-home-automation-expert">
        <h2>Home Automation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi nisi omnis accusantium at quae consequuntur deleniti. Numquam, obcaecati odit ullam ipsam ipsum veritatis ea repellendus doloremque repudiandae sunt eos!
        </p>
        {/* <button className="intro-button">
      <a href="/contact">Becom</a>
      </button> */}
      </div>

    </section>
  );
};


export default SavvyHomeAutomationExpert;
