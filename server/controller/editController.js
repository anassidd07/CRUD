import User from "../database/model.js";

const editController = (req,res)=>{
   
    User.find({_id: req.params.id}, (err, docs) => { 
        if(err) res.json(err); 
        else { console.log (req.params.id); 
           res.send({data: docs[0]});
    } 
      });
}
export default editController;




