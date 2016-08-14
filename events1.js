var getChunkLength = require("./events2.js")
var sharedEvents = require("./events_shared.js");
var fs = require("fs");
var url ="";

readURLSfromFile();
sharedEvents.on("fileRead", ()=>{getChunkLength(url)});

sharedEvents.on("pageReceived", ()=>{
    console.log("Requested page (" +url+ ") received");
})


function readURLSfromFile(){
    fs.readFile('url.txt', (err, data) =>{
        if(err) console.log(err);
        url=data.toString();
        sharedEvents.emit("fileRead");
    }) 
}

