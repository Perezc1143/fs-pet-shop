const http = require('http');
const port = process.env.PORT || 8000;
const fs= require('fs')



const server = http.createServer(function(req, res) {
    if(req.method === "GET" && req.url === "/pets\1"){
        fs.readFile('./pets.json', "utf8", (err,data) => {
            if(err){
                console.log(err);
                // res.statusCode = 404;
                // res.setHeader('Content-Type', 'text/plain');
                // return res.end("server error");
            }   
            const str = JSON.stringify(data)
            const obj = JSON.parse(str);
            console.log(obj)
            res.setHeader('Content-Type', 'application/json');
            res.end(obj);
            
        });
        
        
    }else if(req.method === "GET" && req.url === "/pets/1"){
        fs.readFile('./pets.json', "utf8", (err,data) => {
            if(err){
                console.log(err);
                // res.statusCode = 404;
                // res.setHeader('Content-Type', 'text/plain');
                // return res.end("server error");
            }   
            const str = JSON.stringify(data[1])
            const obj = JSON.parse(str);
            console.log(obj[1])
            res.setHeader('Content-Type', 'application/json');
            res.end(obj[1]);
            
        });
    }
});
   

server.listen(port, function() {
    console.log('Listening on port', port);
});
