var express = require('express');

var dbo = require('../db');
dbo.connectToServer(function(){});


var router = express.Router({ mergeParams: true });
var middleware = require("../middleware");

router.get("/", function (req, res) {

    const dbConnect = dbo.getDb();
    dbConnect.collection("posts").find({}).limit(50).toArray(function (err, result) {
        if (err) {
            res.status(400).send("Error fetching listings!");
        } else {
            res.json(result);
        }
    });
});

//NEW ROUTE
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Hello new<h1>');
    console.log('hello new');
});

module.exports = router;
