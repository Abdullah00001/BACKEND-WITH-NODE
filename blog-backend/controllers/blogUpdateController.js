const BlogModel = require("../models/blogModel")

const blogUpdateController=async(req,res)=>{
    const updatedDoc=req.body
    const result=await BlogModel.findByIdAndUpdate(updatedDoc._id,updatedDoc,{new:true})
    res.send(result)
}

module.exports=blogUpdateController

