const mongoose = require("mongoose")

const connectToMongo = ()=>{mongoose.connect("mongodb://0.0.0.0:27017/hackathon",{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => console.log("connected"))
.catch((err) => console.log(err))}




module.exports = connectToMongo;