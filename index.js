const express = require("express") 
const data = require("./Data")

const app = express()

app.get("/",(req, res)=>{
    res.send(data)
})

app.get("/Indian-Tourism",(req, res)=>{
    res.send("Indian Tourism Page")
})

app.get("/Places-To-Visit",(req, res)=>{
    res.send("Places To Visit Route")
})

app.get("/Tour-Packages",(req, res)=>{
    res.send("Tour Packages Routes")
})

app.get("/Tour-Offers",(req, res)=>{
    res.send("Tour Offers Route")
})

app.get("/Contact-Us",(req, res)=>{
    res.send("Contact us Route")
})

app.listen(1100,()=>{
    console.log("Server Started")
})