const express = require("express");
const app = express();
const router = require("./router/auth-router");


// app.get("/", (req, res)=>{
//     res.status(200).send("hello i am yash");
// })

// app.get("/register", (req, res) =>{
//     res.status(200).send("hello from register page");
// })

app.use(express.json());

app.use("/api/auth", router);


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running at port: ${PORT}`);
});