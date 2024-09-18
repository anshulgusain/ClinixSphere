
import axios from "axios"
import { useEffect, useState } from "react"
import "../css/Home.css"
import {useNavigate} from "react-router-dom"
import { FaSearch } from "react-icons/fa";



function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filter,setFilter]=useState('')
  const navigate=useNavigate()


  // const handleEdit=()=>{

  // }

  const config = {
    headers: {
      "Content-Type": "application/json",
     
    }
  }

  const handleFilter=async ()=>{
    
    try {
     
      const response = await axios.get(`https://clinixsphere.onrender.com/health-records/${filter}`)
      var newData=[]
       newData=response.data
      
      if(newData.length!=0){
      setData(response.data)
      setLoading(false)
      }else{
      setError(true)
      }
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  useEffect(() => {
    
    const search = async () => {
      try {
     
        const response = await axios.get("https://clinixsphere.onrender.com/health-records")
        
        setData(response.data)
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }

    }
    search()
  },[])

  const deleteBlog=(async(id)=>{
    console.log(id)
    const response=await  axios.delete(`https://clinixsphere.onrender.com/health-records/${id}`,config)
    console.log(response)
    if(response.data.msg=="Not Authorised"){
      alert("Not Authorized")
    }
    else{
    alert("Blog Deleted Successfully")
    window.location.reload()
    }
   })
   



  if(loading) return <div>Loading ........</div>
  if(error) return <div className="error"><h1>Not Found</h1></div>

  return (
<>
<div className="search-bar">
              <input type="text" placeholder="Search by id" className="search" onChange={(e)=>{
                  setFilter(e.target.value)
              }} />
              <button className="search-button"  onClick={handleFilter}><FaSearch /></button>
              </div>

<div className="blogparent">
   
            
            
               {
      data.map((ele)=>(
         <div className="blogcontainer" key={ele._id}> 
           <div className="blogimage">
          <h1>{ele.name}</h1>
         </div>
         <div className="blogauthor">
         <b>ID- </b> {ele._id}
         </div>
         <div className="blogauthor">
         <b>Date- </b> {ele.date}
         </div>
         <div className="blogblog">
         <b>Heart Rate- </b>{ele.heartRate} Per minute
         </div>
         <div className="blogauthor">
            <b>  Blood Pressure-</b>{ele.bloodPressure}
         </div>

         <div className="buttons">
        <button onClick={(()=>{
         navigate("/edit", { state: { _id: ele._id,
         name:ele.name,date:ele.date,bloodPressure:ele.bloodPressure,heartRate:ele.heartRate
         } });
          

        })}>Edit</button>
        <button onClick={()=>{
          // console.log(ele)
          deleteBlog(ele._id)
        }
        }>Delete</button>
      </div>
         
       </div>
      ))
    }
    
    
    
    
      

    </div>
</>

    
  )
}

export default Home
