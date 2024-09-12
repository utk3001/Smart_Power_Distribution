
import React, { useEffect, useState } from 'react'
import Sources from '../Sources/Sources';
import Sourcesidebar from '../sidebar/Sourcesidebar';
import './AllSources.css'; // Import the CSS file
import imag1 from '../../Images/ff6fb1d0-b303-4fc1-99d1-7611bd0f9ff3.jpg'
import imag2 from '../../Images/istockphoto-876551148-612x612.jpg'
import imag3 from '../../Images/elctricPole.png'
import image1 from '../../Images/istockphoto-1317320827-170667a.webp'
import ima5 from '../../Images/istockphoto-1310384629-612x612.jpg'
import ima6 from '../../Images/istockphoto-1317320827-170667a.webp'
import ima7 from '../../Images/istockphoto-876551148-612x612.jpg'
import ima8 from '../../Images/generator_background.jpeg'
import Line from '../Lines/Line'

const AllSources = () => {
  const category = [
    { cat: 1 },
    { cat: 2 },
    { cat: 3 },
  ];

  const [sumGE,setsumGE] = useState(0);
  const [sumC,setsumC] = useState(0);
  const [sumNC,setsumNC] = useState(0);
  const handleGE = (result) => {
    setsumGE(result);
  };
  const handleC = (result) => {
    setsumC(result);
  };
  const handleNC = (result) => {
    setsumNC(result);
  };
  
  return (
    <div className='AllSources-main'>
      <div className="AllSources">
        <div className='leftsource'>
          <div className='src'>
            <img src={ima5} alt="Images" style={{ width: '250px', height: '250px' }} />
            <h4 className="imgsh">Solar power</h4>
          </div>
          <div className="line1">
              <p>solarKW</p>
              <Line />
          </div>
        </div>
        <div className='leftsource'>
          <div className='src'>
            <img src={ima6} alt="Images" style={{ width: '250px', height: '250px' }} />
            <h4 className="imgsh">Grid power</h4>
          </div>
          <div className="line1">
              <p>gridKW</p>
              <Line />
          </div>
        </div>
        <div className='leftsource'>
          <div className='src'>
            <img src={ima7} alt="Images" style={{ width: '250px', height: '250px' }} />
            <h4 className="imgsh"> Diesel Genreator</h4>
          </div>
          <div className="line1">
              <p>generatorKW</p>
              <Line />
          </div>
        </div>
        <div className='leftsource'>
          <div className='src'>
            <img src={ima8} alt="Images" style={{ width: '250px', height: '250px' }} />
            <h4 className="imgsh">Battery power</h4>
          </div>
          <div className="line1">
              <p>batteryKW</p>
              <Line />
          </div>
        </div>
      </div>
      <div className='verticle-line'></div>
      <div className="AllSources2">
        <div className="source-container">
        <Sources cat={category[0].cat} sour="Critical" imag={imag1} sumhandle={handleC}  />
            <div className="line">
              <p>{sumC} W</p>
              <Line />
            </div>
          
        </div>
        <div className="source-container">
        <Sources cat={category[1].cat} sour="Non-Critical" imag={imag2} sumhandle={handleNC} />
          <div className="line">
              <p>{sumNC} W</p>
              <Line />
          </div>
          
        </div>
        <div className="source-container">
          <Sources cat={category[2].cat} sour="General" imag={imag3} sumhandle={handleGE} />
          <div className="line">
              <p>{sumGE} W</p>
              <Line />
          </div>
          
          
        </div>
      </div>

    </div>
  );
};

export default AllSources;
