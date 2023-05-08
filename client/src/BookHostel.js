import axios from "axios";
import { useEffect, useState } from "react";


function BookHostel(){

    const [hostelList,setHostelList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4001/api/hostel').then(response=>{
            setHostelList(response.data)
       }).catch(error=>{
           console.log(error.message)
       })
    },[])


    const bookHostel=(value)=>{
         const data={
            booked:"true",
            studentId:value.studentId
         }

         axios.put(`http://localhost:4001/api/hostel/assign/${value.id}`,data)
         .then(response=>{
           alert(response.data)
         }).catch(error=>{
            alert(error.message)
         })
    }
    return <>
    <div className="container-fluid d-flex flex-column">
    <div className="row container-sm bg-light align-self-center m-2 rounded">

    <div class=" row">
    <div class="col-sm-3 border fw-bold">Hostel ID</div>
    <div class="col-sm-3 border fw-bold">Hostel Name</div>
    <div class="col-sm-3 border fw-bold">Hostel Number</div>
    <div class="col-sm-3 border fw-bold">Book</div>
</div>

{

    hostelList.map((value)=>{

        return (<div class="row">
        <div class="col-sm-3 border">{value.id}</div>
        <div class="col-sm-3 border">{value.hostelName}</div>
        <div class="col-sm-3 border">{value.hostelNumber}</div>
        <div class="col-sm-3 border">  
        <input  type={"text"} placeholder="Enter ID" className={"rounded m-2 w-50 " } onChange={(event)=>{
           value.studentId=event.target.value
        }} disabled={value.booked!="false"}></input>
        <input type={"button"} value="Book" className="rounded " onClick={()=>{
            if(value.booked==false)
            bookHostel(value)
            else
            alert("already Booked!")
            
            }}></input></div>
    </div>)
    })
}

</div>
    </div>
    </>
}

export default BookHostel;