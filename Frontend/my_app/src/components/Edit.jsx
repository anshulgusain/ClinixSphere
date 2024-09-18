import {  useEffect, useState } from "react"
import "../css/create.css"
import axios from "axios"
import {useLocation, useNavigate} from "react-router-dom"

const Edit=()=> {
  const location = useLocation();

  
  if(location.state){
  var nam=location.state.name
  var dat=location.state.date
  var bp=location.state.bloodPressure
  var hr=location.state.heartRate
  var id=location.state._id
 
  }

    

const navigate=useNavigate()

  const [error, setError] = useState(false)
  const [name, setName] = useState(nam)
  const [date, setDate] = useState(dat)
  const [bloodPressure, setbloodPressure] = useState(bp)
  const [heartRate, setHeartRate] = useState(hr)






      const config = {
        headers: {
          'Content-Type': 'application/json',
         
        }
        
      };
  

  const handleSubmit = async() => {
    const obj = {
      name,
      date,
      bloodPressure,
      heartRate
      
    }
    const dat=JSON.stringify(obj)
   
    try{
     
      const response=await axios.put(`https://clinixsphere.onrender.com/health-records/${id}`,dat,config)
    
      if(response.msg=="Not Authorized"){
        setError(true)
      }
      // console.log(response)
      //  const res=dat
      // localStorage.setItem("res",res)
      
      // if(response.data==="Edited Succesfully"){
      //   navigate("/home")
      //  }
      // navigate("/", { state: { _id: id,
      //   author:auth,title:titl,image:image,blog:blog
       
      //   } });
      
    }catch(err){
      console.log(err)
      alert(err)
      setError(true)
    }
   
  }
  

 


if(error) return<div><h1>Error in Editing Record</h1></div>

return (
    <div className="Parent">
      <div id="typepad">
        <form >
          <label>User name</label>
          <input placeholder={nam} onChange={((e) => {
          
            setName(e.target.value)
          })}></input>
          <label>Date</label>
          <input placeholder={dat} type="date" onChange={((e) => {
            setDate(e.target.value)
          })}
          ></input>
          <label>Blood Pressure</label>
          <input placeholder={bp} onChange={((e) => {
            setbloodPressure(e.target.value)
          })}></input>
          <label>HaertRate</label>
          <textarea placeholder={hr}  onChange={((e) => {
            setHeartRate(e.target.value)
          })}></textarea>
          <button type="submit" className="submit" onClick={handleSubmit}>Edit</button>

        </form>
      </div>

    

    </div>

  )
}

export default Edit
