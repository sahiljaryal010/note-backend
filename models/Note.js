const mongoose=require("mongoose");

const noteSchema=new
mongoose.Schema({
    title:String,
    description:String
});
module.exports=
mongoose.model("note",noteSchema);


// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model("Note", noteSchema);
