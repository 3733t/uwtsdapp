import axios from "axios";
import { useEffect, useState } from "react";

function BookCollection(){


    const [bookList, setBookList]=useState([])
    useEffect(()=>{

         axios.get('http://localhost:8080/api/library')
         .then(response=>{

             setBookList(response.data)
         }).catch(error=>{
            alert(error.message)
         })
    },[])
    return <>
    <div className="container-fluid d-flex flex-column">
    <div className="row container-sm bg-light align-self-center m-2 rounded">

    <div class=" row">
    <div class="col-sm-3 border fw-bold">Book ID</div>
    <div class="col-sm-3 border fw-bold">Book Name</div>
    <div class="col-sm-3 border fw-bold">Book Type</div>
</div>

{

    bookList.map(value=>{
        return (
   <div class="row">
    <div class="col-sm-3 border fs-5">{value.id}</div>
    <div class="col-sm-3 border fs-5">{value.bookName}</div>
    <div class="col-sm-3 border fs-5">{value.bookType}</div>
    </div>
        )
    })
}

</div>
    </div>
    </>
}

export default BookCollection;
