// console.log("Weclome to Clinic");

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end("Welcome to Clinic Management System");
// });
// server.listen(3005, () => {
//     console.log("Server is Started");
// });



// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send("Welcome Clinic Management is working");
// });
// app.listen(3005, () => {
//     console.log("Server is Started");
// })


// const express = require('express');
// const app = express();
// //app.use(express.json());
// const hospitals = [{
//         DrID: "101",
//         PasentName: "Sinky"
//     },
//     {
//         DrID: "202",
//         PasentName: "Sandy"
//     },
//     {
//         DrID: "303",
//         PasentName: "Sonu"
//     },
// ];
// app.get("/hospitals", (req, res) => {
//     // res.setHeader("Contant-Type", "application/json");
//     //res.setHeader("My-Header", "ABC");
//     // res.status(500).json({message:"Something went wrong"});
//     const data = JSON.stringify({
//         success: true,
//         result: hospitals
//     });
//     res.send(data);
// });
// app.get("/", (req, res) => {
//     console.log(req);
//     console.log(req.query);
//     res.send('data');
// });
// // app.get("/api/hospitals",(req,res)=>{
// //     req.setHeader("Content-type","application/json");
// //     res.json({
// //         success:true,
// //         result: hospitals
// //     })
// // })
// // app.get("/api/hospital", (req, res) => {
// //         console.log(req.query);
// //         res.status(200).json({ message: "Scussfully", data: req.query })
// //     })
// // app.post('/api/add-patient', (req, res)=> {
// //     console.log(req.body);
// //     res.status(200).json({message: 'Sucessful'});
// //     res.status(200).json({message:"Successful",data:req.body});
// //     });
// // app.post("/jeneralword/hospital", (req, res) => {
// //     res.send("Yes i am in post method");
// // })
// app.listen(3005, () => {
//     console.log("Server is Started");
// });


const express = require("express");
const clinic = require("./routes/clinic");
const app = express();

app.use(express.json());

app.use('/api', clinic);

app.listen(3005, () => {
    console.log("Server is started");
});