const mongoose = require("mongoose")

mongoose.set("strictQuery",true);

const mongocloudURL="mongodb+srv://ayushmanware19:Ayush@2001@tourism-cluster.nxfb2tc.mongodb.net/?retryWrites=true&w=majority"

const Connection=async ()=>{
    try{
        await mongoose.connect(mongocloudURL);
        console.log("Connected Successfully");
    }
    catch(err){
        console.log("something wrong in connection process:",err)
    }
}
module.exports={Connection}