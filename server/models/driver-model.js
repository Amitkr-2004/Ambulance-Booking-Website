const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const driverSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        require:true,
    },
    city:{
        type: String,
        required: true,
        default: "",
    },
    vehicleNo:{
        type: String,
        required: true,
        default: "",
    },
    isDriver:{
        type:Boolean,
        default:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});


//Encryption of password before storing in db
driverSchema.pre("save", async function(){
    const user = this;
    // console.log("preSave", user);
    if(!user.isModified("password")){
        next();//now it will go to create the user in db
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})

//for comapare password-->global
driverSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

//JWT web token
driverSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,//!all three are payload
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
    }catch(error){
        console.error(error);
    }
}
const Driver = new mongoose.model("Driver", driverSchema);
module.exports = Driver;