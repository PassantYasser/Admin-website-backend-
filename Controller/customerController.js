const Customermodel = require('../Model/CustomerSchema')//model
var moment = require('moment'); // moment


const customer_get = (req, res) => {
  Customermodel.find()
    .then((result) => {
      res.render("index", {arr: result , moment:moment});
    })
    .catch((err) => { 
      console.log(err);
    });
}

const customer_add_get =(req, res) => {
  res.render('user/add' , { })
}

const customer_edit_get =  (req, res) => {
  Customermodel.findById(req.params.id)
  .then((result) => {
    console.log(result);  
    res.render("user/edit", { costArr: result , moment:moment});  
  })
  .catch((err) => {
    console.log(err);  
  });
}

const customer_view_get = (req, res) => {
  Customermodel.findById(req.params.id)
    .then((result) => {
      res.render("user/view", { costArr: result , moment:moment});  
    })
    .catch((err) => {
      console.log(err);  
    });
}

const customer_post =(req,res)=>{
  Customermodel.create(req.body)
  .then(()=>{
    res.redirect("/")
  })
  .catch((error)=>{
    console.log(error);
  })
}

const customer_search_post =(req,res)=>{
  const searchTextData = req.body.searchText.trim()
  Customermodel.find({$or:[ {firstName:searchTextData} , {lastName:searchTextData}]})
  .then((result)=>{
    res.render('user/search',{SearchArr:result , moment:moment})
  })
  .catch((error)=>{
    console.log(error);
  })
}


const customer_delete_delete = (req,res)=>{
  Customermodel.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
  .catch((error)=>{
    console.log(error);
  })
}

const customer_edit_put = (req,res)=>{
  Customermodel.findByIdAndUpdate(req.params.id , req.body)
  .then(()=>{
    res.redirect('/')
  })
  .catch((error)=>{
    console.log(error);
  })
}


module.exports = {
  customer_get,
  customer_add_get,
  customer_edit_get,
  customer_view_get,
  customer_post,
  customer_search_post,
  customer_delete_delete,
  customer_edit_put
}