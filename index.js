// const {Client} =require('pg')

// const client= new Client({
//     user: "postgres",
//     host: "localhost",
//     database: "portfolio",
//     password: "surya",
//     port: 5432,
// })

// client.connect();

// client.query(`select * from contact`, (err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end;
// })

// const qr ="insert into contact values(3,'Hari','hari@gmail.com',9874561230,'good')";

// client.query(qr,(err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end;
// })


