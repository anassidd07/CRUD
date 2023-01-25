import User from "../database/model.js";
const updateController =  (req, res, next) => {
    var _id = req.params.id;
    User.findByIdAndUpdate(_id,{ $set : {
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
 }, (err, docs) => {if (err) {
    res.send({ message: "Update Failed" })
} else {
    res.send({ message: "Update Sucessfully" })
}});}
       
    //const { name, email, password } = req.body
    //  const name = req.body.name
    //  const email = req.body.email
    //  const password = await bcrypt.hash(req.body.password, 10)
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User already registerd" })
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
// }



export default updateController;


