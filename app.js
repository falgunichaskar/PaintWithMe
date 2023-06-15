const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const User = require("./user");
const mongoose =require("mongoose");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://falgunichaskar:mSZCmucm7lZ4j7V5@cluster0.g0gju8q.mongodb.net/UserData')
.then(()=>{
  console.log("Database Connection done")
}).catch(()=>{
  console.log("error in setting database connection")
})



app.get("/gallery", function(req,res){
  res.sendFile(__dirname + "/gallery.html");
});

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/register", function(req,res){
  res.sendFile(__dirname + "/register.html");
});



app.post("/register", async(req,res)=>{
 const data = new User(req.body)
 await data.save()
 .then(()=>{
  console.log("Database saved")
  res.sendFile(__dirname + "/success.html")
}).catch(()=>{
  console.log("error in saving data")
  res.sendFile(__dirname + "/failure.html")

})

});

// const request=https.request(url, option, function(response){
//   if response.statusCode === 200){
//     res.send("Successfully Registered!");
//   }else{
//     res.send("Error!");
//   }
// response.on("data", function(data){
//   console.log(JSON.parse(data));
// });
//
// });







app.listen(3000, function(){
console.log("Server is running on port 3000")
})

//fd8b8f1e5c39f5ffbe49992a2e5f3974-us21
// api ke y
