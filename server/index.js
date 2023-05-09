const express =require("express")
const cors=require("cors")
const mysql=require("mysql")
const bodyParser=require('body-parser')
const app=express()
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 8080;

app.use(cors({origin: "https://utwsdapp1.azurewebsites.net:8080"}));
app.use(express.json())

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//connection to the db
const connection=mysql.createConnection({
    host:'uwtsdb.mysql.database.azure.com',
    user:'remoteuser',
    password:'Skeptic7301?',
    database:'UWTSD',
    ssl: {
      cert: fs.readFileSync(path.join(__dirname, 'DigiCertGlobalRootCA.crt.pem'))
    }
})

connection.connect((error)=>{

    if(error){
        console.log(`Error connecting to mysql server ${error}`)
        return
    }
    console.log("Connected to mysql server")
})


app.get("/",(req,res)=>{

     res.send("Hello")
})

app.get("/api/hostel",(req,res)=>{


    connection.query("SELECT *FROM Hostel WHERE booked=?",["false"],(error,result)=>{

        if(error){
            console.log("Error fetching Data from db")
            return
        }

        res.send(result)
    })
})

app.get("/api/library", (req,res)=>{

    connection.query("SELECT *FROM Library", (error,result)=>{
        if(error){
            console.log("Error Fetching Library")
            return
        }

        res.send(result)
    })
})

app.get("/api/library/assign", (req,res)=>{

    connection.query("SELECT *FROM Library WHERE borrowed=?",["false"], (error,result)=>{
        if(error){
            console.log("Error Fetching Library")
            return
        }

        res.send(result)
    })
})

app.put("/api/library/assign/:id",(req,res)=>{
    const data=req.body
    const id=req.params.id
    connection.query("UPDATE Library SET ? WHERE id=?",[data,id],(error,result)=>{
        if(error){
            console.log("Error assigning book")
            return
        }
        res.send("success")
    })
})

app.put("/api/hostel/assign/:id",(req,res)=>{

    const data=req.body
    const id=req.params.id

    connection.query("UPDATE Hostel SET ? WHERE id=?",[data,id],(error,result)=>{

         if(error){
            console.log("Error updating hostel data")
            return
         }

         res.send("success")
    })
})

app.post("/api/login",(req,res)=>{

    const username=req.body.username
    const password=req.body.password
    connection.query("SELECT * FROM SuperUser WHERE userName=? AND Password=?",[username,password],(error,result)=>{

        if(error){
            console.log("Login failed",error.message)
            return
        }

        res.send(result)
    })
})


app.get("/api/students",(req,res)=>{


     connection.query("SELECT *FROM Student",(error,results)=>{

        if(error){
            console.log("Error fetching from database")
            return
        }
        res.send(results)
     })
})


app.post('/api/students',(req,res)=>{

   const id=  req.body.id
   const firstName=req.body.firstName
   const lastName=req.body.lastName
   const course=req.body.course
   const password=req.body.password

   connection.query("INSERT INTO Student(id,firstName,lastName,course,password) VALUES(?,?,?,?,?)",[id,firstName,lastName,course,password],(error,value)=>{

     if(error){
        console.log("Error! inserting values to db")
        return
     }
     res.send("success")
   })

})



app.listen(PORT,()=>{

    console.log(`Node server Started on port ${PORT}`)
})
