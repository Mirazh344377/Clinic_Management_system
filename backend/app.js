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