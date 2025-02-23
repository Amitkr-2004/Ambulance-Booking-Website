const User = require("../models/user-model");
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
// Registration Logic
//*-----------------------------
const register = async (req, res) => {
    try{
        const {username, email, phone, password, city} = req.body;
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(400).json({msg: "email already exists"});
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
// login Logic
//*-----------------------------
const login = async (req, res) =>{
    try{
        // res.status(200).send("hello from login page");
        const {email, password} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
            res.status(400).send("Invalid Credientials");
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
            res.status(401).send({msg: "Invalid email or Password"});
        }
    }
    catch{
        res.status(500).send("internal Server Error");
    }
}


module.exports = { home, register, login };