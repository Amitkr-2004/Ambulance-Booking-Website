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
        console.log(req.body);
        res.status(200).send({message: req.body});
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