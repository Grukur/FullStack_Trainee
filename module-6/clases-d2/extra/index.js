
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

const PORT = 3000;

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);

let usuarios = [
    {
        id: 1,
        name: 'Juan',
        lastname: 'Perez'
    },
    {
        id: 2,
        name: 'Mario',
        lastname: 'Soto'
    }
];

//RUTAS
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

//MIDDLEWARE
app.use(express.json());


//ENDPONTS
app.get('/users', (req, res) => {
    res.send({ usuarios })
});

app.post('/users', (req, res) => {
    console.log(req.body)
    let {name, lastname} = req.body;
    let newUser = {
        id: uuidv4().slice(0,6),
        name,
        lastname
    }
    usuarios.push(newUser)
    res.send({message: 'User created'})

})