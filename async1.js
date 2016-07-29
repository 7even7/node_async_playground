var async = require("async");
var fs = require("fs");

async.map(['events1.js','events2.js'], fs.stat, function(err, results){
    // results is now an array of stats for each file
    console.log(results);
});
