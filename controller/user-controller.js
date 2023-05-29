import User from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';
dotenv.config() 
export const signupUser = async(request, response)=>{
try {
    // const salt = await bcrypt.gensalt();
      const hashPassword = await bcrypt.hash(request.body.password, 10)

    const user = {username: request.body.username, name: request.body.name, password: hashPassword}
   
     if(request.body.username==="" || request.body.name==="" || request.body.password===""){
    
     return response.status(500).json({msg: 'all fields are required'})
     }
const newUser = new User(user);

await newUser.save();

return response.status(200).json({msg: 'Signed up successfully'})
} catch (error) {
  
    return response.status(500).json({msg: error})
}
}

export const loginUser = async(request,response) => {
let user = await User.findOne({username: request.body.username});
if(!user){
  return response.status(400).json({msg: 'Username Does Not Match'});
}
try {
  const match = 
      await bcrypt.compare(request.body.password, user.password);
      console.log ("line37",match)
      if(match){
        const accessToken=  jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn: '15m'});
        const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY,);

const newToken=new Token ({token: refreshToken})
await newToken.save();
return response.status(200).json({msg: 'All fields mandatory'})
      }else{
         return response.status(400).json({accessToken: accessToken, refreshToken: refreshToken, name: user.name, username: user.name});
      }
} catch (error) {
  return response.status(500).json({msg: 'Error While Login User Does not Exist'})
}
}

