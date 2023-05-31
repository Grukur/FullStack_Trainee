/* 'strict mode'

const moment = require('moment');

let time = moment().format('DD/MM/YYYY');
console.log(time); */

 const http = require('http');

 const server = http.createServer((req, res)=>{
    if (req.url == '/' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            JSON.stringify({
                data: 'Ruta principal'
            })
        )
        }else if (req.url == '/personas' && req.method == 'GET'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(
                JSON.stringify({
                    data: personas.json
                })
            )            
    } else if (req.url == '/productos' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            JSON.stringify({
                data: [
                    {
                        nombre: 'producto 1'
                    },
                    {
                        nombre: 'producto 2'
                    },
                    {
                        nombre: 'producto 3'
                    },
                ]
            })
        )
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(
            JSON.stringify({
                code: 404,
                message: 'Ruta no encontrada'
            })
        )
    }
 });

 server.listen(3000, ()=> console.log('Servidor escuchando por el pueto 3000'))