const Promise = require("bluebird");
//var readFile = Promise.denodeify(require('fs').readFile);
const getLength = require("./Promise2.js");
const fs = Promise.promisifyAll(require("fs"));


fs.readFileAsync("url.txt","UTF-8").then(notifyReadSuccessAndStartGetLength).catch((error)=>{console.log(error)});


function notifyReadSuccessAndStartGetLength(URL){
    console.log("File url.txt read. Following URL parsed"+"\n" + URL);
    getLength(URL);
}

