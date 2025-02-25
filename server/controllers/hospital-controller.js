const Hospital = require("../models/hospitalDetail-model")

//*-----------------------------
// hospital Logic
//*-----------------------------

const hospitalForm = async(req, res) =>{
    try{
        const response = req.body;
        await Hospital.create(response);
        // console.log("hi");
        return res.status(200).send({msg: "hospital detail stored successfully"});
    }catch(error){
        return res.status(500).send({msg: "error in storing the details in database"});
    }
}

module.exports = hospitalForm;