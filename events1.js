var file2 = require("./events2.js")
var sharedEvents = require("./events_shared.js");

sharedEvents.on("pageReceived", ()=>{
    console.log("Another event from calling file")
})

file2("kissa");
//muutos

