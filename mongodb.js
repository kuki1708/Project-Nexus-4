/*const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true
    },


    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("LoginCollection",LoginSchema)

module.exports=collection*/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(() => {
    console.log("mongodb connected");
})
.catch((err) => {
    console.log("failed to connect:", err);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});

const collection = mongoose.model("LoginCollection", LoginSchema);

module.exports = collection;
