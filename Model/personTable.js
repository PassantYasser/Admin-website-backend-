const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//stucture schema
const schemaData = new Schema({
  userName:String,
  age:Number,
})

//create model
const modelData = mongoose.model("student",schemaData);
module.exports=modelData;