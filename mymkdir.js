#!/usr/bin/env node
let fs = require("fs");

// fs.writeFileSync(path,content)

// fs.mkdirSync(path) //create folder
// fs.rmdirSync(path) //delete
//console.log(process.argv);

(function() {

let n= process.argv[2];
let name = process.argv[3];
if(!Number.isInteger(+n) || typeof name != "string" || n<=0) //here + forces to become n -> number if n is number
{
    console.log("invalid input");
    return
}

try {
    if(fs.existsSync(`${name}-0`))
{
    for(let i=0; i<n; i++)
{
    fs.rmdirSync(`${name}-${i}`);
}
    
}
else{

for(let i=0; i<n; i++)
{
    fs.mkdirSync(`${name}-${i}`);
}
}
}
catch(err)
{
    console.log("some error occured due to n is grater than folder exists");
}

})();
