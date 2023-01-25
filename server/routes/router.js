import * as express  from "express";
import controller from "../controller/controller.js";
import deleteController from "../controller/deleteController.js";
import editController from "../controller/editController.js";
import homeController from "../controller/homeController.js";
import loginController from "../controller/loginController.js";
import updateController from "../controller/updateController.js";

const router = express.Router();

router.post('/add', controller);
router.post('/login', loginController)
router.get('/home',homeController)
router.get('/edit/:id',editController)
router.post('/update/:id',updateController)
router.delete('/delete/:id',deleteController)

export default router;