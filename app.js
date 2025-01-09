const express = require('express')
const app = express()
const port = 3000
//mongodb
const mongoose = require('mongoose');
//to send data
app.use(express.urlencoded({ extended: true }));
//ejs
app.set('view engine', 'ejs')
//static files (css html js files)
app.use(express.static('Public'))

// app.get('/', (req, res) => {
//   res.sendFile('./Views/Home.ejs',{root:__dirname})
// })


//post required 
const modelDataPerson = require("./Model/personTable")
app.post ("/",(req , res)=>{
  const x = new modelDataPerson(req.body)
  x.save() 
  .then(() => {
    res.redirect("/");
  })
  .catch( err => {
    console.log(err);
  });
})

// read data

app.get('/', (req, res) => {
  modelDataPerson.find()
    .then((result) => { 
      console.log(result);
        res.render('Home' , {title:'heloo',arr:result})
    })
    .catch((err) => { 
      console.log(err)
    })
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

