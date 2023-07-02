const mongoose = require('mongoose')

//connection
 mongoose.connect('mongodb+srv://rahulvmrdk:rahul@cluster0.tkapjnb.mongodb.net/cuisineManagement?retryWrites=true&w=majority')
 .then(()=>{
    console.log('Db connected')
 })
 .catch((err)=>console.log(err))

 //schema

 const Schema = mongoose.Schema;
const CusineSchema = new Schema({
    name:String,
    duration:String,
    noOfServing:Number,
    image:{
        type :String,
        required :false
    },
    cusineType: {
        type: String,
        enum: ['ITALIAN', 'INDIAN'],
        required: true
      },
    // mdirector:String,
    // mlang:String
});

//exporing
const CuisineModel = mongoose.model('Cuisines',CusineSchema);
module.exports = CuisineModel;