const User = require("../models/user-model");
const Driver = require("../models/driver-model");
const bcrypt = require("bcrypt");

//*-----------------------------
// Home Logic
//*-----------------------------

const home = async (req, res) =>{
    try{
        res.status(200).send("hello form home page");
    } catch(error){
        console.log(error);
    }
}


//*-----------------------------
// Registration Logic for Users
//*-----------------------------
const registerUser = async (req, res) => {
    try{
        const {username, email, phone, password, city} = req.body;
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({message: "email already exists"});
        }
        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
            city,
        });
        // console.log(userCreated);
        res.status(201).send({
            // message: userCreated,
            message: "Registration Completed",
            token: await userCreated.generateToken(),//this is cookie may store krne ka data
            userId: userCreated._id.toString(),
        });
    }
    catch(error){
        // res.status(500).send({msg: "internal server error"});
        next(error);
    }
}


//*-----------------------------
// Registration Logic for Drivers
//*-----------------------------
const registerDriver = async (req, res) => {
    try{
        const {username, email, phone, password, city, vehicleNo} = req.body;
        const userExist = await Driver.findOne({email: email});
        if(userExist){
            return res.status(400).json({message: "email already exists"});
        }
        const userCreated = await Driver.create({
            username,
            email,
            phone,
            password,
            city,
            vehicleNo,
        });
        // console.log(userCreated);
        res.status(201).send({
            // message: userCreated,
            message: "Registration Completed",
            token: await userCreated.generateToken(),//this is cookie may store krne ka data
            userId: userCreated._id.toString(),
        });
    }
    catch(error){
        // res.status(500).send({msg: "internal server error"});
        next(error);
    }
}

//*-----------------------------
// login Logic for Users
//*-----------------------------
const loginUser = async (req, res) =>{
    try{
        // res.status(200).send("hello from login page");
        const {email, password} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).send({message: "Invalid Credientials"});
        }
        
        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);   //* true/false
        // console.log(user);
        console.log("hi1");
        if(user){
            res.status(200).send({
                message: "Login Successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        }
        else{
            res.status(401).send({message: "Invalid email or Password"});
        }
    }
    catch{
        res.status(500).send({message: "internal Server Error"});
    }
}


//*-----------------------------
// login Logic for Driver
//*-----------------------------
const loginDriver = async (req, res) =>{
    try{
        // res.status(200).send("hello from login page");
        const {email, password} = req.body;
        const userExists = await Driver.findOne({email});
        if(!userExists){
            return res.status(400).send({message: "Invalid Credientials"});
        }
        
        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);   //* true/false
        // console.log(user);
        console.log("hi1");
        if(user){
            res.status(200).send({
                message: "Login Successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        }
        else{
            res.status(401).send({message: "Invalid email or Password"});
        }
    }
    catch{
        res.status(500).send({message:"internal Server Error"});
    }
}

//*---------------------------------
// to send user data - User Logic
//*---------------------------------

const user = async (req, res) =>{
    try {
        const userData = req.user;
        // console.log(userData);
        // res.status(200).json({msg : "hi user"});
        res.status(200).json({msg: userData});

    } catch (error) {
        console.log(`error from the user route  ${error}`);
    }
}

module.exports = { home, registerUser, loginUser, registerDriver, loginDriver, user};