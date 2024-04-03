import  express  from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('estas en tareas')
})
router.get('/saludo',(req,res)=>{
    res.send('estas en tareas y en saludo')
})

export default router;