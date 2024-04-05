import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('estas en get')
})
router.post('/',(req,res)=>{
    res.send('estas en post')
})
router.delete('/',(req,res)=>{
    res.send('estas en delete')
})

export default router;