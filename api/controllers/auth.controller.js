import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
// import "dotenv/config.js";
export const signup = async (req,res) => {
    const { username, email, password, mobile } = req.body;
    const hashed_password = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashed_password,
      mobile,
    });
    
    
    try {
        await newUser.save();
        res.status(201).json("creation successful");
    } catch (error) {
        res.status(500).json(error.message)
    }
    
    
}