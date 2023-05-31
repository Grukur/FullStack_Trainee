const express = require('express');
const cors = require('cors');
const digimones = require('./digimones.json');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

const PORT = 3000;
//Metodo que permite escuchar peticiones a traves del puerto 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Rutas
app.get(['/', '/home'], (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});


//EndPoints
app.get('/api/digimones', (req, res) => {
    res.send(digimones)
});


//Ruta filtro digimones por nombre
app.get('/api/digimones/nombre/:nombre', (req, res) => {
    let { nombre } = req.params;
    
    let digimonFiltrado = digimones.find(
        digimon => digimon.name.toLowerCase() == nombre.toLowerCase()
    );
    if (!digimonFiltrado) {
        res
            .status(404)
            .send({ message: `No hay digimones con el nombre ${nombre}` })
    }
    res.send(digimonFiltrado);
});

//Add enpoint filter by lvl
app.get('/api/digimones/nivel/:level', (req, res) => {
    let { level } = req.params;
    let digimonFiltrado = digimones.filter(
        digimon => digimon.level.toLowerCase() == level.toLowerCase()
    );
    if (digimonFiltrado.length == 0) {
        res
            .status(404)
            .send({ message: `No hay digimones con el nivel ${level}` })
    }
    res.send(digimonFiltrado);
});

//add enpoint for user digimon
app.post('/api/digimones', (req, res) => {
    let { img, name, level } = req.body;
    let newDigimon = { img, name, level };
    digimones.push(newDigimon);
    res.status(201).send(newDigimon)
    });

//add enpoint for delete the new entrys
