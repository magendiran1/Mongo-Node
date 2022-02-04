
import express from 'express'
//import { getMovies, createMovies, getMoviesById ,deleteMoviesById, createUsers}
// from '../getMovies.js'
 import bcrypt from 'bcrypt'
 import jwt from 'jsonwebtoken'
 import { createUsers, genPassword ,getUserByName} from '../getMovies.js'
const router =express.Router()



router.route("/signup")
.post(
 async (request,response)=>{

  const {userName,password} =request.body;

 

  const isUserExist =await getUserByName(userName)
  if(isUserExist){
      response.status(400).send({message:"user already Existed"})
      return;
  }

  const isValidPassword = await getUserByPassword(password)

  if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password))
  {
response.status(400).send({message:"password pattern did not match"})
  }
 

  //?= look at search
  
  const hashedPassword= await genPassword(password);
  console.log(isUserExist)

  const result= await createUsers({userName:userName,password :hashedPassword })
  response.send(result)
 })



 router.route("/signin")
 .post(
  async (request,response)=>{
 
   const {userName,password} =request.body;
   const userFromDB =await getUserByName(userName)
   console.log(userFromDB)
   if(!userFromDB){
       response.status(400).send({message:"Invalid Credentail"})
       return;
   }
 
const storedPassword =userFromDB.password
const isPasswordMatch =await bcrypt.compare(password,storedPassword)

if(isPasswordMatch){
// To issuing the token we need to Install JWT=JSOn web Token

const token =jwt.sign({id:userFromDB._id},process.env.SECRET_KEY)
response.send({message:"successfully log" ,token:token})
}
else{
  
  response.status(400).send({message:"Invalid password"})
  return;

}

console.log(storedPassword)
 

  
 
   //?= look at search
   

  })
 

 export const userRouter= router


 // Before issusing token we need to check the below point
 // 1. userName is valid one
 // 2. Password is valid  one

