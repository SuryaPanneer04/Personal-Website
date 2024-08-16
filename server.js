// const express = require('express');
// const app =express();
// const port =7000;
// const {Pool,Client} =require('pg');
// const bodyParser = require('body-parser');

// const client= new Client({
//     user: "postgres",
//     host: "localhost",
//     database: "portfolio",  
//     password: "surya",
//     port: 5432,
// });
// app.use(express.static(__dirname));

// app.get("/",(req, res)=>{
//     res.sendFile(__dirname + "/index.html");
// });

// app.use(bodyParser.urlencoded({extended:false}))
// app.get('/submit',function(req,res){
//     console.log("data saved");
// })

// app.post("/",(req,res)=>{
//       const{txtName,txtEmail,txtPhone,txtMsg}=req.body
//       client.connect()
//       client.query('insert into contact values($1,$2,$3,$4)',[txtName,txtEmail,txtPhone,txtMsg],(err,res)=>{
//       console.log(err,res);  
//       client.end()  
//       })       
//       res.sendFile(__dirname+ "/index.html");
// })

// app.listen(port,() =>{
//     console.log(`example app listening on port ${port}!`);
// })