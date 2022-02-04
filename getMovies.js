import { client } from './index.js';

import bcrypt from 'bcrypt';

export async function getMovies(filter) {
  return await client.db("b251we").collection("movies").find(filter).toArray();
}
export async function createMovies(data) {
  return await client
    .db("b251we")
    .collection("movies")
    .insertMany(data);
}

export async function createUsers(data) {
  return await client
    .db("b251we")
    .collection("users")
    .insertOne(data);
}


export async function genPassword(password){
  const salt =await bcrypt.genSalt(10)
  console.log(salt);

  const hashedPassword =await bcrypt.hash(password,salt)
  console.log("salt",salt);
  return hashedPassword
  }

  genPassword("password123")
  //createUsers({"userName":"Mage",password :"Pass@123" })
export async function getMoviesById(id) {
  return await client.db("b251we").collection("movies").findOne({ id: id });
}

export async function deleteMoviesById(id) {
    return await client.db("b251we").collection("movies").deleteOne({ id: id });
  }
  
  export async function getUserByName(userName) {
    return await client.db("b251we").collection("users").findOne({ userName: userName });
  }
  

  export async function updateMoviesById(id,updatedmovie) {
    return await client.db("b251we").collection("movies").updateOne({ id: id },{$set:updatedmovie});
  }