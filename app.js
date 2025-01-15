const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose'); //mongodb
app.use(express.urlencoded({ extended: true })); //to send data
app.set('view engine', 'ejs'); //ejs
app.use(express.static('Public')); //static files (css html js files)

var methodOverride = require('method-override') //for delete 
app.use(methodOverride('_method'))//for delete



//allRoutes.js file connect
const allRoutes = require('./Routes/allRoutes')
app.use(allRoutes)





//connection of mongoDB
mongoose
.connect("mongodb+srv://passantabutalib:pwPwdohiI12ZQ8GA@cluster0.odavh.mongodb.net/MyData?retryWrites=true&w=majority&appName=Cluster0") 
.then(()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })
})
.catch((error)=>{console.log(error);});

