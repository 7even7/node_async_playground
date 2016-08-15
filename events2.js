var sharedEvents = require("./events_shared.js");
var http = require("http");
var number;
var chunks=1;

function getContentLenght(URL){
    http.get(URL, (response)=>{
        response.setEncoding('utf8')
        response.on('data',(chunk)=>{
            number = chunk.length;
            sharedEvents.emit('pageReceived');    
        });
    })
}

function getURLContentsLength(URL){
    getContentLenght(URL);
    sharedEvents.on("pageReceived", ()=>{
        console.log("Length of "+ chunks+". chunk of data is "+number);
        chunks+=1;
    })
    
}
module.exports = getURLContentsLength;