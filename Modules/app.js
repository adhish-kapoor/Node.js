//console.log(module)
// var logger=require('./logger.js')//'require' returns object exported from target module and 
//is used to load a module

//console.log(logger)

// logger('hello')

const EventEmitter=require("events")

const Logger=require('./logger')
const logger=new Logger();
//Register a listener
logger.on("MessageLogged",(args)=>{
    console.log("Listener called",args) //output on running node app.js 
                                        //Message 
})                                      // Listener called { id: 1, name: 'Adhish' }
logger.log('Message')
