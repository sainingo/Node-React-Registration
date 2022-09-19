import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Register endpoints')
})


export default router;