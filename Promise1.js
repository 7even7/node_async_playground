const Promise = require("promise");
var readFile = Promise.denodeify(require('fs').readFile);
const getLength = require("./Promise2.js");



readFile("url.txt","UTF-8").then(notifyReadSuccessAndStartGetLength);


function notifyReadSuccessAndStartGetLength(URL){
    console.log("File url.txt read. Following URL parsed"+"\n" + URL);
    getLength(URL);
}

