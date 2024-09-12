import React from 'react'
import './Add_Edit.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../state/applianceSlice'
import Navbar from '../Navbar/Navbar'
import '../Navbar/Navbar.css'

const Add = () => {
  const [name, setName] = useState("")
  const [powerRating, setPowerRating] = useState("")
  const [numberOfAppliances, setNumberOfAppliances] = useState("")
  const [typeOfAppliance, setTypeOfAppliance] = useState("")
  const [iconName, setIconName] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setName(e.target.value);
    const x = e.target.value.replace(/ /g,'_');
    console.log(x);
    setIconName(x);
  }
  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3001/appliance/add`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ name, powerRating, numberOfAppliances, typeOfAppliance ,iconName})
      })

      const data = await res.json()
      console.log(data)
      dispatch(add(data))
      if (data.error) {
        throw data.error
      }
      navigate("/")
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  return (
    <div className="add">
      <Navbar />
      <div>
        <form onSubmit={handleAdd} className="frm">
          <h2 className="add-appliances">Add Appliance</h2>
          <div>
            {/* <label for="appl">Name</label> */}
            <select name="appliance" id="appl" value={name} onChange={handleChange}>
            <option value="" disabled selected>Name</option>
              <option value="Air Conditioner">Air Conditioner</option>
              <option value="Air Cooler">Air Cooler</option>
              <option value="Voltage Stabeliizer">Voltage Stabeliizer</option>
              <option value="Radiator">Radiator</option>
              <option value="Computer">Computer</option>
              <option value="Electric Rod">Electric Rod</option>
              <option value="Electric Scooter">Electric Scooter</option>
              <option value="Aquarium">Aquarium</option>
              <option value="Guitar">Guitar</option>
              <option value="Dehumidifier">Dehumidifier</option>
              <option value="Drill">Drill</option>
              <option value="Fan">Fan</option>
              <option value="Fountain">Fountain</option>
              <option value="Hair Dryer">Hair Dryer</option>
              <option value="Induction_stove">Induction_stove</option>
              <option value="Oven">Oven</option>
              <option value="PlayStation">PlayStation</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Treadmill">Treadmill</option>
              <option value="Vacuum Cleaner">Vacuum Cleaner</option>
              <option value="Water Heater">Water Heater</option>
              <option value="Electric Kettle">Electric Kettle</option>
              {/* <option value="Electric Kettle">Electric Kettle</option> */}
              {/* <option value="Air Conditioner">Air Conditioner</option> */}
              {/* <option value="Air Cooler">Air Cooler</option> */}
              {/* <option value="Electric Kettle">Electric Kettle</option> */}
              
            </select>
          </div>
          <div>
            <input type="number" name="powerRating" id="powerRating" placeholder="Power Rating" required autoComplete="off" onChange={(e) => setPowerRating(e.target.value)} />
          </div>
          <div>
            <input type="number" name="numberOfAppliances" id="numberOfAppliances" placeholder="Number of appliances" onChange={(e) => setNumberOfAppliances(e.target.value)} />
          </div>

          <div className='radio-tile-group'>

            <div className="input-container">
              <input type="radio" name="typeOfAppliance" value="1" id="radio1" checked={typeOfAppliance === "1"} required onChange={(e) => setTypeOfAppliance(e.target.value)} />
              <div className="radio-tile">
                <label for="1" >Critical</label>
              </div>
            </div>

            <div className="input-container">
              <input type="radio" name="typeOfAppliance" value="2" id="radio2" className='radio' checked={typeOfAppliance === "2"} onChange={(e) => setTypeOfAppliance(e.target.value)} />

              <div className="radio-tile">
                <label for="2" className='label label-2'> Non Critical</label>
              </div>
            </div>


            <div className="input-container">
              <input type="radio" name="typeOfAppliance" value="3" id="radio3" className='radio' checked={typeOfAppliance === "3"} onChange={(e) => setTypeOfAppliance(e.target.value)} />
              <div className="radio-tile">
                <label for="3" className='label label-3'>General</label>
              </div>
            </div>
          </div>

          <button className='add-btn'>Add</button>
        </form>
        <div className='error'>
          {
            error && <div>{`${error}`}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Add