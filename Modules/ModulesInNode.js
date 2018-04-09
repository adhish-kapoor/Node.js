//Operating System module os
var os=require("os")

var totalmemory=os.totalmem() //method for total memory
var freememory=os.freemem()   //method for free memory

console.log(totalmemory)
console.log(freememory)

//File System module fs
const fs=require("fs")
//Synchronous method
const files=fs.readdirSync('./') 
console.log(files)//list of files in current folder

//Async method
fs.readdir('./',function(err,files){
    if(err)
    throw err;
    else
    console.log(`Result ${files}`) //list of files in current folder
})
