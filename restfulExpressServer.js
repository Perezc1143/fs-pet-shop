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
    const pet = req.body;
    pool.query('INSERT INTO pets (name, kind, age) VALUES($1, $2, $3);', [pet.name, pet.kind, pet.age], (err,data) => {
        if(err){
            res.status(404);
            }else{
            res.json(pet);
            }
        })
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

app.put("/pets/:petId", (req,res) => {
    const { petId } = req.params;
    const pet = req.body;
    pool.query('UPDATE pets SET name=$1, kind=$2, age=$3 WHERE id=$4', [pet.name, pet.kind, pet.age, petId], (err,data) => {
        if(err){
            console.log('err',err)
            res.status(404);
        }else{
            res.json(data.rows)
        }
    })
});

//get


//delete
app.delete('/pets/:petId', (req,res) => {
    const { petId } = req.params;
   pool.query('DELETE FROM pets WHERE id=$1', [petId], (err,data) =>{
       if(err){
           res.status(404);
       }else{
            res.json(data.rows);
       }
   })
});

     

   

//listen on a port
app.listen(port, function(){
    console.log('server is running')
})
module.exports = app;

