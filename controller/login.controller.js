import { validateLogIn } from "../helper/validator.js"
import { compare } from "../helper/encryption.js"
import userModel from "../models/userModel.js"
import { createAccessToken, createRefreshToken } from "../helper/tokensGenerator.js"

export async function loginController(req, res){
    const {email, password} = req.body
    try {
        const {error} = validateLogIn({ email, password })
        if (error) {
            return res.send({
                status: true,
                message: error.details[0].message
            })
        }

        const foundUser = await userModel.findOne({email: email})

        if(!foundUser){
            return res.status(401).send({
                status: true,
                message: 'invalid email or password'
            })
        }
        const match = compare(password, foundUser?.password)

        if(!match){
            return res.status(401).send({
                status: true,
                message: 'invalid email or password'
            })
        }
        const refreshToken = createRefreshToken({uid: foundUser.uid})
        const accessToken = createAccessToken({uid: foundUser.uid})

        res.cookie("auth", refreshToken,{
            secure: true,
            // httpOnly: true,
            domain: 'example.com',
            sameSite: 'strict',
        })
        res.status(201).send({
            status: true, 
            message: "User logged in succesfully",
            accessToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false, 
            error: error
        })
    }
    
}