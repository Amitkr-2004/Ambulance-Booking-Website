const Hospital = require("../models/hospitalDetail-model")

//*-----------------------------
// hospital data storing Logic
//*-----------------------------

const hospitalForm = async(req, res) =>{
    try{
        const response = req.body;
        await Hospital.create(response);
        // console.log("hi");
        return res.status(201).send({msg: "hospital detail stored successfully"});
    }catch(error){
        return res.status(500).send({msg: "error in storing the details in database"});
    }
}

//*-----------------------------
// hospital data fetcing Logic
//*-----------------------------

const hospitalInfo = async(req, res) =>{
    try{
        const city = "patna";
        // console.log("hi1");
        const hospitalData = await Hospital.find({city});
        return res.status(200).send(hospitalData);
    }catch(error){
        return res.status(500).send({msg: "error in fetching data"});
    }
}

module.exports = {hospitalForm, hospitalInfo};