const express = require("express");
const router = express.Router();
//! Route 1 -> Get All the notes using POST: "/api/auth/getuser". Login Required
router.post('/', (req, res)=>{
    res.json([
        
    ]);
})
module.exports = router;