const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//stucture schema
const CustomerSchemaData = new Schema({
  firstName:String,
  lastName:String,
  phoneNumber:Number,
  email:String,
  age:Number,
  country:String,
  gender:String,
})

//create model
const modelCustomer = mongoose.model("Customer",CustomerSchemaData);
module.exports=modelCustomer;