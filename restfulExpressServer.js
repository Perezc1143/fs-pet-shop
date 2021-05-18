const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8000
const {Pool} = require('pg');

const { Server } = require('http')
const morgan = require('morgan')
const pool = new Pool({
    database: 'petshop',
    port: 5432
});

app.use(bodyParser.json());
app.use(morgan('tiny'));

//handle request with routes
//post
app.post("/pets", (req,res) =>{
    const {pet} = req.params;
    pool.query('INSERT INTO pets WHERE $1, $2, $3', ['name','kind',age], (err,data)=>{
        console.log()
    }
    
});

//get request 
app.get("/pets/:petId", (req,res) => {
    const {petId} = req.params;
    pool.query('SELECT * FROM pets where id = $1', [petId], (err, data) => {
        if(err){
            res.status(404)
        }else{
        // console.log(data)
        res.json(data.rows)
        }
    })
});
    

//patch

app.patch("/pets/3:pets_name", (req,res) => {
    db('pets').update({"name":"Fido"});
    res.status(200);
    res.append("Content-Type", 'application/json');
    res.send(req.body);
});

//get
app.get('/pets/3', (req,res) => {
    res.status(200);
    res.append('Contnent-Type', 'application/json');
    res.send(req.body);
});

//delete
app.delete('/pets/3', (req,res) => {
    res.status(200);
    res.append('Contnent-Type', 'application/json');
    res.send(req.body);
});

//get 
app.get('/pets/3', (req,res) => {
    res.status(404);
    res.append("Contect-Type", "text/plain");

})
            

   

//listen on a port
app.listen(port, function(){
    console.log('server is running')
})
module.exports = app;

