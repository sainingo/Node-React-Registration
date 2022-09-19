import express from 'express';
import userModel from '../model.js';


const router = express.Router();

router.get('/', async (req, res) => {
    const users = await userModel.find({});
    try {
        res.send(users)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.post('/', async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save();
        response.send(user);
        
    } catch (error) {
        res.status(401).send(error)
    }
})

export default router;