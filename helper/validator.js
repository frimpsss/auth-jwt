import Joi from "joi";
// const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/;

export function validateSignUp(data){
    const schema = Joi.object({
        name: Joi.string().max(25).required(), 
        password: Joi.string().min(4).required(),
        email: Joi.string().email().required()
    })

    return schema.validate(data)
}

export function validateLogIn(data){
    const schema = Joi.object({
        password: Joi.string().min(4).required(),
        email: Joi.string().email().required()
    })
    return schema.validate(data)
}