import User from "../database/model.js";

const homeController = (req,res)=>{
    User.find((err, docs) => {
        if (!err) {
            // res.render("list", {
            //     data: docs
            // });
            res.send({data: docs})
            // console.log('Failed to retrieve the Course List: ');
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}
export default homeController;