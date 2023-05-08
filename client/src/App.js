import logo from './phoenix-36-logo.png';
import './App.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import StudentRegistration from './StudentRegistration';
import StudentList from './StudentList';
import BookHostel from './BookHostel';
import AssignBooks from './AssignBook';
import BookCollection from './BookCollection';
import Contact from './Contact';
import axios from 'axios';

function App() {


  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const [user,setUser]=useState(null)


  const authenticate=()=>{

    const data={
      username:username,
      password:password
    }

    console.log(data)
    axios.post('http://localhost:8080/api/login',data)
    .then(response=>{

      console.log(response)
      setUsername("")
      setPassword("")
      setUser(response.data)
      alert("Logged In successFully!")
    }).catch(error=>{
        alert(error.message)
    })
  }

  function Login(){

    return
  }
  return (<>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid p-2">
    <a class="navbar-brand" href="#">
         <img src={logo} style={{width:"70px"}} className={"rounded-circle bg-warning p-1"}/>
         </a>

    <button className={"navbar-toggler"} type={"button"} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className={"navbar-toggler-icon"}></span>
    </button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" disabled={user==null}>Admission</a>
      <ul className="dropdown-menu border">
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/studentRegistration")} }disabled={user==null}>Register Student</a></li>
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/studentList")}} disabled={user==null}>View Students</a></li>

      </ul>
    </li>
    <li class="nav-item dropdown" disabled={user==null}>
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" disabled={user==null}>Student Services</a>
      <ul className="dropdown-menu border">
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/bookHostel")}} >Book Hostel</a></li>

      </ul>
    </li>
    <li class="nav-item dropdown" >
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" disabled={user==null}>Library Services</a>
      <ul className="dropdown-menu border">
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/assignBook")}}>Assign Book</a></li>
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/bookCollection")}}>Collection</a></li>

      </ul>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >Marketing</a>
      <ul className="dropdown-menu border">
        <li><a className="dropdown-item " onClick={()=>{navigate("/homepage/Contact")}}>Contact Us</a></li>

      </ul>
    </li>
  </ul>
</div>
    </div>
  </nav>

    <Routes>
      <Route exact path='/' element={(<>

     <div className="App container-fluid ">

     <div className='d-flex flex-column  full-height'>
     <div className='row  align-items-center '>


            <div className='logo-container   col '>
            <div className=' d-flex flex-column align-items-center'>
             <img src={logo}></img>

               <h1 className='fw-bold'>UWTSD LONDON</h1>
               <h2>Powered by Microsoft Azure</h2>
            </div>
            </div>


            <div className='login-form col  rounded '>
            <h1 className='fw-bold text-white text-center '>LOGIN</h1>

             <div className='d-flex flex-column'>
              <input type={"text"} placeholder="username" value={username} onChange={(event)=>{setUsername(event.target.value) }}
              className='m-3 rounded border border-transparent'></input>
              <input type={"password"} placeholder="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}
               className='m-3 rounded border border-transparent'></input>

              <input type={"button"} value="Login" className='w-25 m-3 default-background rounded rounded-3 text-white'
              onClick={()=>{
               //navigate("/homepage")
               authenticate()
               }}></input>
             </div>

            </div>

            </div>

     </div>


         </div>
   </>)}></Route>
      <Route exact path='/homepage' element={<HomePage/>}></Route>
      <Route exact path='/homepage/studentRegistration' element={<StudentRegistration/>}></Route>
      <Route exact path='/homepage/studentList' element={<StudentList/>}></Route>
      <Route exact path='/homepage/bookHostel' element={<BookHostel/>}></Route>
      <Route exact path='/homepage/assignBook' element={<AssignBooks/>}></Route>
      <Route exact path='/homepage/bookCollection' element={<BookCollection/>}></Route>
      <Route exact path='/homepage/Contact' element={<Contact/>}></Route>
    </Routes>


  </>);
}




export default App;
