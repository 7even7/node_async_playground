var http = require("http");
var number;
var chunks=1;
const as = require("async");

function getContentLenght(){
    http.get("http://www.google.fi/", (response)=>{
        response.setEncoding('utf8')
        response.on('data',(chunk)=>{
            number = chunk.length;
        });
    })
}

function getURLContentsLength(URL){
    getContentLenght();
    sharedEvents.on("pageReceived", ()=>{
        console.log("Length of "+ chunks+". chunk of data is "+number);
        chunks+=1;
    })
    
}
module.exports = getURLContentsLength;