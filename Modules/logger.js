var url="http://mylogger.io"

function log(message){
//send an http request
console.log(message)

}
module.exports.log=log //exports used to make log public,logger is an object

module.exports=log    //logger is a function and not an object
