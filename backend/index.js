import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000
dotenv.config();
const app = express()
import allRouter from "./routes/route.js"
await mongoose.connect(process.env.MONGO_URL).then(console.log('Connection to Server Succeeded!')).catch((err) => console.log("Connection to Server Failed!", err))
app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use('/', allRouter);

app.listen(PORT, () => {
    console.log(`Server started at port No. ${PORT}`)
})    