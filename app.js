const express = require('express')
const app = express()
const port = 3000
//mongodb
const mongoose = require('mongoose');
//to send data
app.use(express.urlencoded({ extended: true }));

//display page
app.get('/', (req, res) => {
  res.sendFile('./View/Home.html',{root:__dirname})
})


//post required 
const modelData = require("./Model/personTable")
app.post ("/",(req , res)=>{
  const x = new modelData(req.body)
  x.save() 
  .then(() => {
    res.redirect("/");
  })
  .catch( err => {
    console.log(err);
  });
})



//connect mongoDB
mongoose
.connect("mongodb+srv://passantabutalib:pwPwdohiI12ZQ8GA@cluster0.odavh.mongodb.net/MyData?retryWrites=true&w=majority&appName=Cluster0") 
.then(()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })
})
.catch((error)=>{console.log(error);});

