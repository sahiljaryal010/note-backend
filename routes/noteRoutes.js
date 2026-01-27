const express=require("express");
const router=express.Router();
const Note=require("../models/Note");

// add note
router.post('/',async(req,res)=>{
    const note=new Note(req.body);
    await note.save();
    res.send(note);

});

// Get notes
router.get('/',async(req,res)=>{
    const notes=await Note.find();
    res.send(notes);

});

// delete note
router.delete('/:id',async(req,res)=>{
    await 
    Note.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});
module.exports=router;