// console.log("Hi world '😍");
 
// const sum= (a,b)=>a+b;

// console.log(sum(4,5))



// const double= (num)=>num*2


// console.log(double(40))

// //Process

// console.log(process.argv)

// const [ , ,num1]=process.argv;
// console.log(num1)
// console.log(double(process.argv[2]))

// const [,,a1,b1] =process.argv

// console.log(sum(parseInt(a1),parseInt(b1)));
// console.log(a1,b1)


// // console.log(global)



 // we are going to see Express

//  const express =require("express");
//  const {MongoClient}=require("mongodb")

 //latest way to import 
 import express from 'express'
 import {MongoClient} from 'mongodb'
 import dotenv from 'dotenv'
 dotenv.config()

 console.log(process.env)

 const app =express();


const movies =[
    {
        id:100,
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
      language:"Tegulu"
    },
    {
        id:101,
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
      language:"English"
    },
    {
        id:102,
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
      language:"English"
    },
    {
        id:103,
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
      language:"Tamil"
    },
    {
        id:104,
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
      language:"English"
    },
    {
        id:105,
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      language:"English"
    },
    {
        id:106,
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
      language:"Tegulu"
    },
    {
        id:107,
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
      language:"English"
    }
  ];

  app.use(express.json()) // here this will help you whenever the request  we have provide the data in Json
  
  // mongodb+srv://magendiranmendy1995:<password>@cluster0.eexdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  // const  MONGO_URL ="mongodb://localhost"
  const  MONGO_URL =process.env.MONGO_URL
  // "mongodb+srv://magendiranmendy1995:magendiran1995@cluster0.eexdx.mongodb.net"

async function createConnection(){
const client = new MongoClient(MONGO_URL)
await client.connect();
console.log("mongodb is Connected")
return client
}

const client = await createConnection();

//  const PORT =9000
const PORT =process.env.PORT ;

  app.get('/',(request,response)=>{

    response.send("hello world 💕😍🤳😍")
 })


 app.get('/movies', async(request,response)=>{

    // const {language,rating} =request.query

    const filter =request.query
    if(filter.rating){
      filter.rating=+filter.rating
    }


   const movies = await client.db("b251we").collection("movies").find(filter).toArray();
console.log(movies)
   response.send(movies)
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

 app.post("/movies",
//  express.json()
//  , This we are not using now because this  
 async (request,response)=>{

  const data =request.body;
 const result= await client
  .db("b251we")
  .collection("movies")
  .insertMany(data)
  
  response.send(result)
 })

app.get("/movies/:id", async (request,response)=>{

    const {id}=request.params;
    console.log(id)
   const movie = await client.db("b251we").collection("movies").findOne({id:id})
    // const [result] =movies.filter((mv)=>mv.id ===id)
    console.log(movie)
console.log(movie)
movie ? response.send(movie) : response.status(404).send({msg:"No Movies Found"})
 })

 app.listen(PORT,()=>{console.log("The server Started Successfully")})