import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors"
import { corsOptions } from './config/config.js'
import cookieParser from 'cookie-parser'
import { PORT, dbConfig } from './config/config.js'
import { router } from './routes/authRoutes.js'

// dotenv config
config()


// connect to db
dbConfig()



export const app = express()
app.set("trust proxy", 1)
app.use(cors({
    origin: "*",
    
}))

// set up cookie parser
app.use(cookieParser())
// allow json from req body
app.use(express.json())

// index route
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Auth server up"
    })
    // res.redirect("https://checkout.paystack.com/hv17g35ujtlhfil")
})

app.use('/auth', router)



mongoose.connection.once('open', () => {
    console.log("DB connected sucessfully");
    app.listen(PORT, () => {
        console.log(`Server up and running on port ${PORT}`);
    })
})