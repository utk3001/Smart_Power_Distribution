// Sidebar.js
import React, { useState, useEffect } from 'react';
import './Sourcesidebar.css';
import imag1 from '../../Images/ff6fb1d0-b303-4fc1-99d1-7611bd0f9ff3.jpg'
import imag2 from '../../Images/istockphoto-876551148-612x612.jpg'
import imag3 from '../../Images/elctricPole.png'
import imag4 from '../../Images/generator_background.jpeg'


const Source = ({ source, toggleSource }) => {
  return (
    <div
      className={`source ${source.isOn ? 'on' : 'off'}`}
      onClick={() => toggleSource(source.id)}
    >
      <div className='sources'>
        <img src={source.image} alt="Images" />
        <h4 className="no-margin-padding-top">{source.name}</h4>
      </div>
    </div>
  );
};




const Sourcesidebar = () => {
  // Sample source data, you can replace it with data fetched from the backend
  const [sources, setSources] = useState([
    { id: 1, name: 'Solar', isOn: true, image: imag1 },
    { id: 2, name: 'Grid', isOn: false, image: imag3 },
    { id: 3, name: 'Battery', isOn: true, image: imag4 },
    { id: 4, name: 'Generator', isOn: false, image: imag2 },
  ]);

  // Function to toggle the source on/off
  const toggleSource = (id) => {
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.id === id ? { ...source, isOn: !source.isOn } : source
      )
    );
  };

  return (
    <div className="sidebar_1">
      {sources.map((source) => (
        <Source
          key={source.id}
          source={source}
          toggleSource={toggleSource}
        />
      ))}
    </div>
  );
};

export default Sourcesidebar;
