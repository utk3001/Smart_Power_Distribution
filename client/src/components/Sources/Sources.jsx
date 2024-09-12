import React, { useEffect, useState } from 'react'
import Item from '../Item/Item.jsx';
import './Sources.css'


const Sources = (props) => {
  
  const [all, setAll] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    const tsum = calculateSum();
    if (props.sumhandle) {
      props.sumhandle(tsum);
    }
  }, [all]);

  const getAll = async () => {
    try {
      const res = await fetch(`http://localhost:3001/appliance/all`);
      const body = await res.json();
      console.log(body.data);
      setAll(body.data)
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  const calculateSum = () => {
    let sum = 0;
    if (all !== null) {
      all.forEach((data) => {
        if (data.typeOfAppliance === props.cat) {
          sum += data.powerRating * data.numberOfAppliances;
        }
      });
    }
    return sum;
  };

  
  let containerClass = 'Sources';
  if (props.cat === 1) {
    containerClass += ' background-image-1';
  } else if (props.cat === 2) {
    containerClass += ' background-image-2';
  } else if (props.cat === 3) {
    containerClass += ' background-image-3';
  }
  return (
    <div className={containerClass}>
      <div className="source-box">
        <img src={props.imag} alt="source-photo" style={{ width: '80px', height: '60px' }} />
        <h1>{props.sour}</h1>

        <div className="source-items">
          {all === null ? "" :
            all.map(data => {
              if (data.typeOfAppliance === props.cat) {
                console.log(data.name);
                return (
                  <Item
                    key={data._id}
                    image={data.iconName}
                    name={data.name}
                    power={data.powerRating}
                    number={data.numberOfAppliances}
                  />
                );
                
              }
              return null;
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Sources;

