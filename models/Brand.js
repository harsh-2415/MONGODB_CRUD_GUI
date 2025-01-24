const mon=require('mongoose')


//Define schema for Brand
const brandSchema=new mon.Schema({
    name:{
        type:String,
        required:true
    },
    description:String
});

module.exports=mon.model('Brand',brandSchema);