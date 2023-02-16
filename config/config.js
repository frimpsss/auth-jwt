import mongoose from "mongoose";
export const PORT = process.env.PORT || 8080

export async function dbConfig() {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.log(error);
    }
}

const whitelist = ['http://localhost:8080', ""]

export const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}