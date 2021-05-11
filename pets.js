// console.log("[read | create | update | destroy]")
const args = process.argv.slice(2);
console.log(typeof args[1])
const fs= require('fs')


if(args[0] === "read"){
    readMyFile(args[1]);
}

function readMyFile(int){
    int = parseInt(int)
    fs.readFile('./pets.json', "utf8", (err,data) => {
        if(err){
            process.exit(1);
        }else{
            let obj= JSON.parse(data);
            // console.log(obj[0])
            for(let i = 0; i < obj.length; i++){
                    if(i === int){
                      console.log(obj[i]);
                    }
                    
                }
            }
            
        }
    )};
    module.exports = readMyFile;

    // function createMyFile(){
    //     const fs = require('fs')

    //     const content = 'Some content!'
        
    //     fs.writeFile('/Users/joe/test.txt', data, err) => {
    //       if (err) {
    //         console.error(err)
    //         return
    //       }
    //       //file written successfully
    //     }
                
            




                