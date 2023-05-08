import { useState } from "react"


function Contact(){
   
    const [email,setEmail]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [phone,setPhone]=useState("")


    const sendInfo=()=>{
        setEmail("")
        setFirstName("")
        setLastName("")
        setPhone("")
        alert("Data successfully sent!")
    }
    return <div className="d-flex flex-column container-fluid">
    <div className='login-form col  rounded  align-self-center' style={{width:"50%"}}>
            <h1 className='fw-bold text-white text-center '>CONTACT US!</h1>
            
             <div className='d-flex flex-column align-items-center'>
              <input type={"text"} placeholder="first name" onChange={(event)=>{setFirstName(event.target.value)}} 
              className='m-3 rounded border border-transparent w-75' value={firstName}></input>
               <input type={"text"} placeholder="last name" onChange={(event)=>{setLastName(event.target.value)}} 
              className='m-3 rounded border border-transparent w-75' value={lastName}></input>
               <input type={"text"} placeholder="email"  onChange={(event)=>{setEmail(event.target.value)}} 
              className='m-3 rounded border border-transparent w-75' value={email}></input>
              <input type={"text"} placeholder="phone" onChange={(event)=>{setPhone(event.target.value)}}
               className='m-3 rounded border border-transparent w-75' value={phone}></input>
     
              <input type={"button"} value="Send" className='w-25 m-3 default-background rounded rounded-3 text-white'
              onClick={()=>{sendInfo()}}></input>
             </div>
              
            </div>
   
   </div>
}


export default Contact

