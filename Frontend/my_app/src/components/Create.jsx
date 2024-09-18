

import {  useState } from "react"
import "../css/create.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"




const Create=()=>{

const navigate=useNavigate()

  const [error, setError] = useState(false)
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [bloodPressure, setbloodPressure] = useState("")
  const [heartRate, setHeartRate] = useState("")

  const config={
    headers:{
      "Content-Type": "application/json",
     
    }
  }
  const handleSubmit = async(e) => {
e.preventDefault()
console.log(date)
    const obj = {
      name,
      date,
      bloodPressure,
      heartRate
    }
    const dat=JSON.stringify(obj)
    console.log(dat)

    try{
      const response=await axios.post(`http://localhost:8080/health-records`,dat,config)
      // console.log(response.data)
      alert(response.data)
      if(response.data==="Records Successfully added"){
       navigate("/")
      }
      
    }catch(err){
      console.log(err)
      alert(err)
      setError(true)
    }
   
  }


if(error) return<div><h1>Error in Creating Blog</h1></div>

  return (
    <div className="Parent">
      <div id="typepad">
        <form >
          <label>User name</label>
          <input placeholder="Type Here" onChange={((e) => {
          
            setName(e.target.value)
          })}></input>
          <label>Date</label>
          <input placeholder="Type Here" type="date" onChange={((e) => {
            setDate(e.target.value)
          })}
          ></input>
          <label>Blood Pressure</label>
          <input placeholder="Type Here" onChange={((e) => {
            setbloodPressure(e.target.value)
          })}></input>
          <label>HaertRate</label>
          <textarea placeholder="Type Your Content here"  onChange={((e) => {
            setHeartRate(e.target.value)
          })}></textarea>
          <button type="submit" className="submit" onClick={handleSubmit}>Create</button>

        </form>
      </div>

    

    </div>

  )
}

export default Create