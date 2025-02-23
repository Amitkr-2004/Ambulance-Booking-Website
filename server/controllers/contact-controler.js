
const Contact = require("../models/contact-model")

//*-----------------------------
// contact Logic
//*-----------------------------

const contactForm = async (req, res) =>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).send({msg : "message sent successfully"});
    } catch (error) {
        return res.status(500).send({msg : "can't send message"});
    }
}

module.exports = contactForm;
