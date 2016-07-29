var sharedEvents = require("./events_shared.js");
var http = require("http");
var number;

function getAsyncNumber(){
    http.get("http://www.google.fi/", (response)=>{
        response.setEncoding('utf8')
        response.once('data',(chunk)=>{
            number = chunk.length;
            sharedEvents.emit('pageReceived');    
        });
    })
}

function returnAsyncContent(topic){
    getAsyncNumber();
    sharedEvents.on("pageReceived", ()=>{
        console.log("Length of first chunk of data is "+number+"\n Function was called with parameter: "+topic);
    })
    
}
module.exports = returnAsyncContent;