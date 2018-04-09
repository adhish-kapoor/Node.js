//---Operating System module os
var os=require("os")

var totalmemory=os.totalmem() //method for total memory
var freememory=os.freemem()   //method for free memory

console.log(totalmemory)
console.log(freememory)

//---File System module fs
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

//---Events module
const EventEmitter=require("events") 
const emitter=new EventEmitter(); //emitter is an object of class EventEmitter
//Register a listener
emitter.on('MessageLogged',function(){
    console.log("Listener called")
})
//Raise an event
emitter.emit('MessageLogged'); 

emitter.on('MessageLogged',function(EventArgs){
    console.log("Listener called",EventArgs)
})
//Raise an event
emitter.emit('MessageLogged',{id:1,name:"Adhish"}); //second argument as object
//1.---http module
const http=require("http")
const server=http.createServer();
//Register listener or handler
server.on('connection',(Socket)=>{
    console.log("New Connection")
})
server.listen(3000)

console.log("Listening on port 3000")

//2.
const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("Hello world")
        res.end()
    }
});
//Register listener or handler
server.on('connection',(Socket)=>{
    console.log("New Connection")
})
server.listen(3000)

console.log("Listening on port 3000")

