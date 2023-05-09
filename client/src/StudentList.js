import { useEffect, useState } from "react";
import axios from "axios";

function StudentList(){

    const [studentList,setStudentList]=useState([])
    useEffect(()=>{

        axios.get('https://utwsdapp1.azurewebsites.net:8080/api/students').then(response=>{

        console.log(response.data)
        setStudentList(response.data)
        }).catch(error=>{
            console.log("Error fetching student data!")
        })

    },[])

    return <div className="container-fluid d-flex flex-column">
    <div className="row container-sm bg-light align-self-center m-2 rounded p-2">

    <div class=" row ">
    <div class="col-sm-3 border fw-bold ">Student ID</div>
    <div class="col-sm-3 border fw-bold">First Name</div>
    <div class="col-sm-3 border fw-bold">Last Name</div>
    <div class="col-sm-3 border fw-bold">Course</div>
</div>

{
    Array.isArray(studentList) && studentList.map(value=>{
    return (<div class="row">
        <div class="col-sm-3 border">{value.id}</div>
        <div class="col-sm-3 border">{value.firstName}</div>
        <div class="col-sm-3 border">{value.lastName}</div>
        <div class="col-sm-3 border">{value.course}</div>
    </div>)
    })
}

</div>
    </div>
}


export default StudentList;
