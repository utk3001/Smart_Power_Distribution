import React from 'react';
import './Item.css'; // Import the CSS file

const Item = (props) => {
  return (
    <div className="item-container"> {/* Apply the container class */}
      <div>
        <div className='item-image'> <img  src={require(`../../icons/${props.image}.png`)} alt="Image from URL" style={{ width: '40px', height: '40px' }} /></div> {/* Apply image class */}
        <h3 className="item-title">{props.name}</h3> {/* Apply title class */}
        <span className="item-rating">{props.power}</span> {/* Apply rating class */}
        <span className="item-power-usage">{props.number}</span> {/* Apply power-usage class */}
      </div>
    </div>
  );
};

export default Item;

