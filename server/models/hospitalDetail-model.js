const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    place_id: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    hospitalName:{
        type: String,
        required: true,
    },
    distance:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        require:true,
    }
});


const Hospital = new mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;