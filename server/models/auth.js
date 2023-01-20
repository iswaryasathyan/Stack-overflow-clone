 import mongoose from "mongoose"

// const Schema=mongoose.Schema;
const userSchema= new mongoose.Schema({
    name:{type:String,required :true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    about:{type:String},
    tags:{type:[String]},
    joinedOn:{type:Date,default:Date.now}
})

 export default mongoose.model("User",userSchema)
 
// const User=mongoose.model('User',userSchema);
// module.exports=User;
// exports.create =(users)=>User.create(User)