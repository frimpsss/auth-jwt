import { validateSignUp } from "../helper/validator.js";
import userModel from "../models/userModel.js";
import { genUID } from "../helper/generateUID.js";
import { createHash } from "../helper/encryption.js";




export async function registerController(req, res){
    const {email, password, name} = req.body
    try {
        const { error } = validateSignUp({email, password, name})
        if(error) {
            return res.send({
                status: true,
                message: error.details[0].message
            })
        }

        // check if email exists
        const foundUser = await userModel.findOne({email: email})

        if (foundUser){
            return res.status(409).send({
                status: true, 
                message:  "user exists"
            })
        }

        const newUser = new userModel({
            email, 
            password: createHash(password),
            name, 
            createdOn:  new Date(),
            uid: genUID()
        })

        const _ = await newUser.save()

        res.status(201).send({
            status: true, 
            message: "Sign up successful."
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false, 
            error: error
        })
    }
}