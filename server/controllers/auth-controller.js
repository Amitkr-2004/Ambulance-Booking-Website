const User = require("../models/user-model");

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
        res.status(500).send({msg: "internal server error"});
    }
}

//*-----------------------------
// login Logic
//*-----------------------------
const login = async (req, res) =>{
    try{
        res.status(200).send("hello from login page");
    }
    catch{
        res.status(400).send("hello form login page");
    }
}

module.exports = { home, register, login };