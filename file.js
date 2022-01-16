const fs = require('fs') // File System

// fs.readFile('./msg.txt',"utf8",(err,data)=>{
//     if(err){
//         console.log("No data availble")
//     }
//     else{
//         console.log(data)
//     }
  
// })


//utf8 stand for UCS (Unicode) Transformation Format 


//write File 

// const apj_quotes ='"Failure will never overtake me if my determination to succeed is strong enough."'
// fs.writeFile('./qoutes.txt',apj_quotes,(error,data)=>{
//     console.log("is Completed")
// })

//append data in the Existing file

// const love="\nDeepa"
// fs.appendFile('./MAGE.TXT',love,(err,data)=>{
//     console.log("done")
// })


//task To create mutiple File in single Shot

const quote ="All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents."
const [,,NoofFile] =process.argv

console.log(NoofFile)

for(let i=1 ; i<=parseInt(NoofFile) ; i++){

    

    fs.writeFile(`./backup/test-${i}.txt`,quote,(err)=>{

        if(err){
            console.log(err)
            console.log("File Is Not created")
        }
        else {
        console.log("File Created Sucussfully" ,i)}
    })  
}

