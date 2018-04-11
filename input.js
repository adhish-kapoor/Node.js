//input in node
var stdin = process.openStdin();
var arr=[],c=[]
var flag=true
stdin.addListener("data", function(d) {
    
    var input = d.toString();
    //console.log(input)
    var inputArray=input.split("\n")
    var t=inputArray.shift()
