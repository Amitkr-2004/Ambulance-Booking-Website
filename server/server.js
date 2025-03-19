require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const hospitalRoute = require("./router/hospital-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

const corsOption ={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOption)); //let's tackel cors //also a middleware


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/hospital", hospitalRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port: ${PORT}`);
    });
})
