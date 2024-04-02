import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Bienvenidos a la Api de G-lab');
})

app.get('/tareas', (req, res) => {
	res.send('Hola soy la ruta tareas');
	console.log(req.query.tarea1);
})

app.get('/proyectos', (req, res) => {
	res.send('Hola soy la ruta proyectos');
})


const PORT = 3000;

app.listen(PORT, () => {
	console.log("Ya esta corriendo mi servidor");
})
