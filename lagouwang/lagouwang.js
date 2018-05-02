var express = require("express")
var expressStatic = require("express-static")
var fs = require("fs")
var mysql = require("mysql")

var db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"!cc695216069",
	database:"lagouwang"
})

db.connect()

server = express()

server.get("/",function(request,response){
	var data = String(fs.readFileSync("./index.html"))
	response.send(data)
})

server.get("/getData",function(requset,response){
	db.query("SELECT * FROM lagouData",(error,data)=>{
		if (error) {
			console.log(error)
		}
		else{
			console.log(data)
			response.send(data)
		}
	})
})


server.use(expressStatic("./views"))
server.listen(666)