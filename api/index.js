import express from "express";
import mongoose from 'mongoose'
import "dotenv/config.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import cors from "cors";
import path from 'path'


const app = express();
mongoose.connect(
  process.env.MONGO
).then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err);
});

const __dirname = path.resolve();

app.use(cookieParser());
app.use(cors())
app.listen(3000,()=>{
    console.log('server running on port 3000 !');
})
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use("/api/listing", listingRouter);
app.use(express.static(path.join(__dirname,"/client/dist")))


app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});