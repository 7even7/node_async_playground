const Promise = require("promise");
var http = require("http");
var chunks=1;

function getURLContentsLength(URL){
    http.get(URL, (response)=>{
        response.setEncoding('utf8');
        response.on('data',(chunk)=>{
            console.log("Length of "+ chunks+". chunk of data is "+chunk.length);
            chunks+=1;
        });
    });
}

module.exports = getURLContentsLength;
