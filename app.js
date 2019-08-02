var express = require('express');
var app = express();
var pg = require('pg');
var client = new pg.Client({
    user: "nxhpszyhgfyvvv",
    password: "8079e4e740ce77cff55cf0bc01cc5d4f2a4721cc2c6459cd0b56fcf3c78d9915",
    database: "d2piajn4a3m8pv",
    port: 5432,
    host: "ec2-54-227-251-33.compute-1.amazonaws.com",
    ssl: true
}); 
client.connect();
client.query("insert into index values ('moustafa','5646464646','15')",function(err,res){
    console.log(res);
    console.log(err);
})
app.get('/login',function(req,res){
    res.render('login.ejs');
    
    
})

app.get('/forget',function(req,res){
    res.render('forget.ejs')
})


app.get('/notes',function(req,res){
    res.render('notes.ejs')
})

app.get('/reg',function(req,res){
    res.render('reg.ejs')
})

app.listen(5000,function(){console.log('server started')})