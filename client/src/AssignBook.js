import axios from "axios"
import { useEffect, useState } from "react"
import { Placeholder } from "react-bootstrap"

function AssignBooks(){
    const [bookList, setBookList]=useState([])
    const [update,setUpdate]=useState(false)
    useEffect(()=>{
         axios.get('http://localhost:4001/api/library/assign')
         .then(response=>{
             setBookList(response.data)
         }).catch(error=>{
            alert(error.message)
         })
    },[update])


    const assignBook=(obj)=>{

        const data={
            borrowed:"true",
           StudentID:obj.StudentID
        }
        axios.put(`http://localhost:8080/api/library/assign/${obj.id}`,data).
        then(response=>{
            alert(response.data)
            setUpdate(true)
        }).catch(error=>{
            alert(error.message)
        })
    }
    return <>
    <div className="container-fluid d-flex flex-column">
    <div className="row container-sm bg-light align-self-center m-2 rounded">

    <div class=" row">
    <div class="col-sm-2 border fw-bold">Book ID</div>
    <div class="col-sm-2 border fw-bold">Book Name</div>
    <div class="col-sm-2 border fw-bold">Book Type</div>
    <div class="col-sm-2 border fw-bold">Borrowed</div>
    <div class="col-sm-2 border fw-bold">Assign</div>
</div>


{
    bookList.map((value )=>{
        return (
<div class="row">
    <div class="col-sm-2 border">{value.id}</div>
    <div class="col-sm-2 border">{value.bookName}</div>
    <div class="col-sm-2 border">{value.bookType}</div>
    <div class="col-sm-2 border">{value.borrowed}</div>
    <div className={"col-sm-2 border "}>

        <input  type={"text"} placeholder="Enter ID" className="rounded m-2 w-50" onChange={(event)=>{
            value.StudentID=event.target.value
        }}></input>
        <input type={"button"} value="assign" className="rounded " onClick={()=>{assignBook(value)}}></input>
    </div>
</div>
        )
    })
}

</div>
    </div>
    </>
}

export default AssignBooks;
