import express from "express";
import mongoose, { Mongoose } from 'mongoose'
import "dotenv/config.js";
import userRouter from "./routes/user.route.js";


const app = express();
mongoose.connect(
  process.env.MONGO
).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err);
});



app.listen(3000,()=>{
    console.log('server running on port 3000 !');
})

app.use('/api/user',userRouter)

