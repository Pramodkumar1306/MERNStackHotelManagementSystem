import express from 'express'
import { addFood , listFood,removeFood} from '../controllers/foodController.js' 
import multer from 'multer'  // used image storage system 

const foodRouter = express.Router(); // main file to makeing the route in the backend 
// Image Storage Engine
    const storage = multer.diskStorage({
        destination:"uploads",
        filename:(req,file,cb) => {
            return cb(null,`${Date.now()}${file.originalname}`)
        }   
    });

    const upload = multer({storage:storage})

foodRouter.post('/add',upload.single("image"),addFood);
foodRouter.get('/list',listFood);
foodRouter.post('/remove',removeFood);

export default foodRouter;