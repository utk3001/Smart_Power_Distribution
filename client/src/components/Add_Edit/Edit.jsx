import React from 'react'
import './Add_Edit.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { edit } from '../../state/applianceSlice'
import Navbar from '../Navbar/Navbar'
import '../Navbar/Navbar.css'


const Edit = () => {
  const [name, setName] = useState("")
  const [powerRating, setPowerRating] = useState("")
  const [numberOfAppliances, setNumberOfAppliances] = useState("")
  const [typeOfAppliance, setTypeOfAppliance] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3001/appliance/edit`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ name, powerRating, numberOfAppliances, typeOfAppliance })
      })
      const data = await res.json()
      console.log(data)
      dispatch(edit(data))
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

  const [all, setAll] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

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

  return (
    <div className='add'>
      <div>
        <Navbar />
      </div>
      <div>
        <form onSubmit={handleEdit} className="frm">
          <h2 className="add-appliances">Edit Appliance</h2>
          <div>
            <select name="appliance" id="appl" value={name} onChange={handleChange}>
              <option value="" disabled selected>Name</option>
              {all === null ? "" :
                all.map(data => {
                  {
                    return (
                      <option value={data.name}>{data.name}</option>
                    );
                  }
                  return null;
                })
              }
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
          <br />
          <button className='add-btn' type='submit'>Update</button>
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

export default Edit