import  express  from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('estas en proyectos')
})
router.get('/saludo',(req,res)=>{
    res.send('proyectos y  saludo')
})

export default router;