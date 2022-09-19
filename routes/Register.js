import express from 'express';
import usersModel from '../model.js';


const router = express.Router();

router.get('/', async (req, res) => {
    const users = await usersModel.find({});
    try {
        res.send(users)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.post('/', async (req, res) => {
    const user = new usersModel(req.body);

    try {
        await user.save();
        res.send(user);
        // if (user.save()) {
        //     res.send("User saved successfully")
        // }
        
    } catch (error) {
        res.status(401).send(error)
    }
})

export default router;