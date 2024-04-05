import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    const { nombre, profesion} = req.query
    console.log(nombre)
    res.send(`Estoy en get  query params  ${nombre}`)
})

router.get('/:nombre',(req,res)=>{
    const data = req.params.nombre
    res.send(`Estoy en get  params ${nombre}`)
})

router.post('/', (req, res) => {
    const { nombre, edad, correo}= req.body

    res.send(`Estoy en post body params ${nombre}`);
});

router.put('/', (req, res) => {
    res.send('Estoy en put');
});

router.patch('/', (req, res) => {
    res.send('Estoy en patch');
});

router.delete('/', (req, res) => {
    res.send('Estoy en delete');
});

export default router;

