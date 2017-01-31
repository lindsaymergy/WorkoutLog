var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("./db.js");


var User = sequelize.import("./models/user");
//a user model in sequelize
User.sync();
//DANGER THIS DROPS THE TABLE COMPLETELY
//User.sync({force: true}); //drops the table completely 

app.use(bodyParser.json());
app.use(require("./middleware/headers"));
app.use("/api/user", require("./routes/user"));
// app.post("/api/user", function(req, res){
// 	//when we post to api user, it will want a user object in the body
// 	var username = req.body.user.username;
// 	var pass = req.body.user.password; //TODO: hash this password
// 	//need to create a user object and use sequelize to put that user into our database


// 	User.create({
// 		username: username,
// 		passwordhash: ""

// }).then(
// 	//sequelize is going to return the object it created from db
// 			//sequelize is going to return the object it created from db
// 			function createSuccess(user){
// 				//successful gets this:
// 				res.json({
// 					user: user,
// 					message: "create"
// 				});
// 			},

// 			function createError(err){
// 				res.send(500, err.message);
// 			}

// 	);

// });


app.use("/api/test", function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on 3000");
});

//creates the table in postgres
//matches the model we defined
//doesnt drop the db













