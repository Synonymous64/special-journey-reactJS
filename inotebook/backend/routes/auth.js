const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    let obj = {
        name : "Prajwal",
        age: 20,
    }
    res.json(obj);
})
module.exports = router;