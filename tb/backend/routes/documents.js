import express from 'express';
const router = express.Router();

//just a test 
let data = ["cat", "dog", "fish", "bird"];
const getDocumnets = (req, res) => {
    try{
        const email = req.user;
        console.log(email);
        
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

router.get('/', getDocumnets);
export default router;