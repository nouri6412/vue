var express=require('express');

const config = require('./config');

var dbo = require('./db');
dbo.connectToServer(function(){});

var app= express();

var blogRoutes = require("./routes/blogs");
var initRoutes = require("./init/init");

app.use("/blogs", blogRoutes);

app.use("/init", initRoutes);


app.get('/',function(req,res){
res.send('Hello express');
});

var server = app.listen(config.app.port, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });