const validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        // console.log("hi12");
        next();
    } catch (err) {
        // cout<<"hi";
        // console.log(err);
        const message = err.errors[0].message;
        const extraDetails = err.errors[0].message;
        console.log(err);
        // res.status(400).send({msg: message});
        const status = 422;
        const error = {
            status,
            message,
            extraDetails,
        }
        // console.log(error);
        next(error);
    }
}

module.exports = validate;