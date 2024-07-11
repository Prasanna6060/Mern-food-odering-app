import express from 'express';
import MyUserController from '../controllers/MyUser.controller';


const router = express.Router();

router.post('/', MyUserController.createCurrentUser)


export default router;