// var url="http://mylogger.io"

// function log(message){
// //send an http request
// console.log(message)

// }
// module.exports.log=log //exports used to make log public,logger is an object

// module.exports=log    //logger is a function and not an object

//making a class to raise event
const EventEmitter=require("events")
var url="http://mylogger.io"

class Logger extends EventEmitter{
     log(message) { //method in class
        console.log(message)

        //Raise an event
        this.emit('MessageLogged',{id:1,name:"Adhish"})
    }
}
module.exports=Logger;
