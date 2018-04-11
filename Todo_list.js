//Adhish Kapoor
//Todo list using express and node.js

const express=require("express")
const server=express()
var todos=[]      //empty array

server.get('/todo/add',function(req,res){
    let task=req.query.task
    
    if(typeof task=='undefined'||task.length==0){
        res.send("invalid request")
        return
    }

    todos.push(task)  //adds requested task

    var str='<ul>'
    for(var i=0;i<todos.length;i++){
    str+=`<li> ${todos[i]}</li>`
    }
    str+='</ul>'
    res.send(str)

})

server.get('/todo/delete',function(req,res){

    var id=req.query.id  
    if(typeof id=="undefined"||id.length==0||id<0||id>=todos.length){
        res.send("Invalid request")
        return
    }
    todos.splice(id,1) //deletes requested id
    if(todos.length==0){
        res.send("No remaining elements")
        return
    }
    var str='<ul>'
    for(var i=0;i<todos.length;i++){
        str+=`<li> ${todos[i]}</li>`
    }
    str+='</ul>'
    res.send(str)
})

server.get('/todo/update',function(req,res){ 
    var id=req.query.id
    var newtask=req.query.newtask
    if(typeof id=="undefined"||id.length==0||id<0||id>=todos.length){
    res.send("Invalid request")
    return
}
    if(typeof newtask=="undefined"||newtask.length==0){
    res.send("Invalid request")
    return
 }
todos.splice(id,1,newtask) //updates id with newtask
    var str='<ul>'
    for(var i=0;i<todos.length;i++){
    str+=`<li> ${todos[i]}</li>`
    }
    str+='</ul>'
res.send(str)
})
server.listen(3000) //listens on port 3000
