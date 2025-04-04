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
// all hospital data fetcing Logic as per city
//*-----------------------------

const hospitalInfo = async(req, res) =>{
    try{
        const city = "bihta";
        // console.log("hi1");
        const hospitalData = await Hospital.find({city});
        return res.status(200).send(hospitalData);
    }catch(error){
        return res.status(500).send({msg: "error in fetching data"});
    }
}

//*-----------------------------
// Unique cities data fetcing Logic
//*-----------------------------


const getUniqueCities = async(req,res) =>{
    try {
        const cities = await Hospital.distinct('city');
        res.status(200).json({
            success: true,
            count: cities.length,
            data: cities.sort() // Sort alphabetically
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching cities'
        });
    }
};

module.exports = {hospitalForm, hospitalInfo, getUniqueCities};