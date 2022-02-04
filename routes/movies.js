
import express, { request, response } from 'express'
import { getMovies, createMovies, 
    getMoviesById ,deleteMoviesById} from '../getMovies.js'
import { auth } from '../middleware/auth.js'

const router =express.Router()

router.route('/')
.get( auth,async(request,response)=>{

    // const {language,rating} =request.query

    const filter =request.query
    if(filter.rating){
      filter.rating=+filter.rating
    }


   const movies = await getMovies(filter);
console.log(movies)
   response.send(movies);
  //  let filteredmovies =movies

  //  if(language){
  //   filteredmovies=filteredmovies.filter((mv)=>mv.language===language)

  //  }
  //  if(rating){
  //   filteredmovies=filteredmovies.filter((mv)=>mv.rating=== +rating)
 
  //  }
  
  //  if(filteredmovies.length>0){
  //  response.send(filteredmovies)
  //  }
  //  else {
  //    response.send("No Movies list is Found for the Filter")
  //  }
   
 })
.post(
//  express.json()
//  , This we are not using now because this  
 async (request,response)=>{

  const data =request.body;
 const result= await createMovies(data)
  
  response.send(result)
 })

 router.route("/:id")
 .get( async (request,response)=>{

    const {id}=request.params;
    console.log(id)
   const movie = await getMoviesById(id)
    // const [result] =movies.filter((mv)=>mv.id ===id)
    console.log(movie)
console.log(movie)
movie ? response.send(movie) : response.status(404).send({msg:"No Movies Found"})
 })
 .delete( async (request,response)=>{

    const {id}=request.params;
    console.log(id)
    const updatedmovie =request.body;
   const movie = await updateMoviesById(id,updatedmovie)
    // const [result] =movies.filter((mv)=>mv.id ===id)

movie ? response.send(movie) : response.status(404).send({msg:"No Movies Found"})
 })
 .put( async(request,response)=>{
     const {id}=request.params;
     const movie=await updateMoviesById(id);
     movie ? response.send(movie) : response.status(404).send({msg:"No Movies Found"})
 })

 export const moviesRouter= router