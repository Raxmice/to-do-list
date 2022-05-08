const express = require('express');
const bodyparser = require('body-parser');

const app = express();

var note=[];
var task=[];
box=["mark1"]; 
val=["val1"];
lab=["lab1"];
fun=["1"];

app.set("view engine", "ejs");
//for body parser
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

//page req and res
app.get("/", function(req, res){
    res.render("index");
});
app.get("/imp", function(req, res){
    res.render("imp",{note:note});
});
//for form printing
app.post("/imp", function(req, res){
    var notes=req.body.impnote;
    note.push(notes);
    res.redirect("imp");
});

app.get("/task", function(req, res){
    res.render("task",{task:task});
});
//for form printing
app.post("/task", function(req, res){
    var tasks=req.body.task;
    task.push(tasks);
    res.redirect("task");
});
//404
app.get('*', function(req, res){
    res.status(404).send("<h1>404</h1><br><h3><a href='/'>Go back to home page</a></h3>");
  });
//calling a server
app.listen(3000, function(){
    console.log('server is started on port 3000');
});