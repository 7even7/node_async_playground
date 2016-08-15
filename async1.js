var getChunkLength = require("./events2.js")
var fs = require("fs");
var url ="";
const as = require('async')

readURLSfromFile();




function readURLSfromFile(){
    fs.readFile('url.txt', (err, data) =>{
        if(err) console.log(err);
        url=data.toString();
    }) 
}

 