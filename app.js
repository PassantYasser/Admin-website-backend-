const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose'); //mongodb
app.use(express.urlencoded({ extended: true })); //to send data
app.set('view engine', 'ejs'); //ejs
app.use(express.static('Public')); //static files (css html js files)
const Customermodel = require('./Model/CustomerSchema')//model
var moment = require('moment'); // moment
var methodOverride = require('method-override') //for delete 
app.use(methodOverride('_method'))//for delete







            //!!!!get request\\
//home page
app.get("/", (req, res) => {
  Customermodel.find()
    .then((result) => {
      console.log(result); 
      res.render("index", {arr: result , moment:moment});
    })
    .catch((err) => {
      console.log(err);
    });
});

//add page      
app.get('/user/add.html', (req, res) => {
  res.render('user/add' , { })
})

//edit page      
app.get('/edit/:id', (req, res) => {
  Customermodel.findById(req.params.id)
  .then((result) => {
    console.log(result);  
    res.render("user/edit", { costArr: result , moment:moment});  
  })
  .catch((err) => {
    console.log(err);  
  });
})


//view page      
app.get('/view/:id', (req, res) => {
  Customermodel.findById(req.params.id)
    .then((result) => {
      console.log(result);  
      res.render("user/view", { costArr: result , moment:moment});  
    })
    .catch((err) => {
      console.log(err);  
    });
}); 

    
        //!!!!post request\\
app.post('/' , (req,res)=>{
  const customer= new Customermodel(req.body)
        customer.save()
  .then(()=>{
    res.redirect("/")
  })
  .catch((error)=>{
    console.log(error);
  })
})
        //!!!!!delete request\\ 
app.delete('/delete/:id',(req,res)=>{
  Customermodel.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
  .catch((error)=>{
    console.log(error);
  })
})


//connection of mongoDB
mongoose
.connect("mongodb+srv://passantabutalib:pwPwdohiI12ZQ8GA@cluster0.odavh.mongodb.net/MyData?retryWrites=true&w=majority&appName=Cluster0") 
.then(()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })
})
.catch((error)=>{console.log(error);});

