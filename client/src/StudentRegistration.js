import { useState } from "react"
import axios from 'axios'


function StudentRegistration(){

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [course,setCourse]=useState("")


    const register=()=>{

       const data={
        id:username,
        firstName:firstName,
        lastName:lastName,
        course:course,
        password:password
       }

        axios.post('https://utwsdapp1.azurewebsites.net/api/students',
        data)
         .then(response=>{
           alert(response.data)
           //reset fields
           setFirstName("")
           setLastName("")
           setUsername("")
           setCourse("")
           setPassword("")
        }).catch(error=>{

            alert(error.message)
        })


    }
    return <div className="d-flex flex-column container-fluid">
     <div className='login-form col  rounded  align-self-center' style={{width:"50%"}}>
             <h1 className='fw-bold text-white text-center '>Student Registration</h1>

              <div className='d-flex flex-column align-items-center'>
               <input type={"text"} placeholder="id" onChange={(event)=>{setUsername(event.target.value)}}
               className='m-3 rounded border border-transparent w-75' value={username}></input>
               <input type={"text"} placeholder="first name" onChange={(event)=>{setFirstName(event.target.value)}}
               className='m-3 rounded border border-transparent w-75' value={firstName}></input>
                <input type={"text"} placeholder="last name" onChange={(event)=>{setLastName(event.target.value)}}
               className='m-3 rounded border border-transparent w-75' value={lastName}></input>
                <input type={"text"} placeholder="course" onChange={(event)=>{setCourse(event.target.value)}}
               className='m-3 rounded border border-transparent w-75' value={course}></input>
               <input type={"password"} placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}
                className='m-3 rounded border border-transparent w-75' value={password}></input>

               <input type={"button"} value="Register" className='w-25 m-3 default-background rounded rounded-3 text-white'
               onClick={()=>{register()}}></input>
              </div>

             </div>

    </div>
}

export default StudentRegistration;
