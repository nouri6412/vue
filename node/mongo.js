var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});