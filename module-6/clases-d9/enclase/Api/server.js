const express = require('express');
const express = require('cors');
import { v4 as uuidv4 } from 'uuid';
const app = express();

app.use = (cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


let usuarios = {
    nombre: 'Carlos',
    id: 1,
    email: 'carlos@mail.com'
}

app.listen(3000, ()=>
console.log('Servidor escuchando en http://lcoalhost:3000')
);

app.get('/usuarios', (req, res)=>{
    res.status(200).send({status:200, usuarios});
})

app.get('/usuarios/:id', (req, res)=>{
    let {id} = req.params;
    let found = usuarios.find(usuario => usuario.id == id)
    if(found){
        res.status(200).send({status:200, usuario: found});
    }else{
        res.status(200).send({status:200, message: 'not found'});
    }
})

app.post('/usuarios', (req, res)=>{
    let {nombre, email} = req.body;
    let nuevoUsuario = {
        id: uuidv4.slice(0,6),
        nombre,
        email,
    }
    usurarios.push(nuevoUsuario);
    res.status(201).send({status:201, usuario: nuevoUsuario});
})