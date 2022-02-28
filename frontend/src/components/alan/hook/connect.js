var express = require("express");  
var path = require("path");  
var mongo = require("mongoose");   
var bodyParser = require('body-parser');   
var morgan = require("morgan");  
var mongoose = require('mongoose');  
var Schema = mongoose.Schema;  


app.get("", (req,res)=>{
	console.log("I am here")
	res.sendStatus(200)
})




//https://www.c-sharpcorner.com/article/crud-operation-using-reactnodejsexpress/#:~:text=%20CRUD%20Operation%20Using%20React%2C%20Nodejs%2C%20Express%2C%20MongoDb,run%20these%20commands%20one%20by%20one.%20More%20