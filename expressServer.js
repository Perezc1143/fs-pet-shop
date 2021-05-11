const express = require('express')
const app = express()
const port = 8000
const fs= require('fs')
const functionFromPets = require("./pets.js")
// console.log(functionFromPets);




//handle request with routes
app.get("/pets/:index", function(req,res){
    fs.readFile("./pets.json", "utf8", (err,data) =>{
        if(err){
            res.status(404).send("Not Found");
        }else{
            const index = (req.params.index) 
            const parsedData = JSON.parse(data)
            // console.log(parsedData)
            res.send(parsedData[index])
        }
  
    })
})
            
app.get("/pets", function(req,res){
    fs.readFile("./pets.json", "utf8", (err,data) =>{
        if(err){
            res.status(404).send("Not Found");
        }else{
            res.send(data);
        }
    })
});
   

            

    


   
    
//listen on a port
app.listen(port, function(){
    console.log('server is running')
})
module.exports = app;



    
    


