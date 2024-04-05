import express from 'express';
import tasks from './routers/tasks.js'
import proyect from './routers/proyects.js'
import rutaJuanes from './routers/rutaJuanes.js'
const app = express();

app.use('/tasks',tasks);
app.use('/proyect', proyect);
app.use('/juanes', rutaJuanes);

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
