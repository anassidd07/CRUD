import User from "../database/model.js";
const deleteController =  (req, res, next) => {
    var _id = req.params.id;
    User.findByIdAndDelete(_id, (err, docs) => {if (err) {
    res.send({ message: "Failed! Try again" })
} else {
    res.send({ message: "Delete Sucessfully" })
}});}

export default deleteController;