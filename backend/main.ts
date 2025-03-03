import express from "express"
import connectDB from "./config/connectDB"
import dotenv from "dotenv"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})