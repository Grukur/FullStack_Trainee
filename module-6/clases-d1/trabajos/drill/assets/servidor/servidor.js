const http = require("http");
const url = require("url");
const queryString = require("querystring");
const usuariosJSON = require("./usuarios.json");

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("Página principal.");
    } else if (req.url == "/usuarios" && req.method == "GET") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(usuariosJSON));
    } else if (req.url.startsWith("/usuarios") && req.method == "GET") {
        let queryUrl = url.parse(req.url);
        let params = queryString.parse(queryUrl.query);
        let { nombre, apellido } = params;

        let filtroUsuarios = usuariosJSON.usuarios.filter(
            (usuario) =>
                usuario.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase()
        );
        res.setHeader("Content-Type", "application/json; charset=utf-8");

        if (filtroUsuarios.length > 0) {
            res.end(JSON.stringify(filtroUsuarios));
        } else {
            res.statusCode = 404;
            let respuesta = {
                code: 404,
                message: "Usuario no encontrado.",
            };
            res.end(JSON.stringify(respuesta));
        }
    } else {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.statusCode = 404;
        res.end("Recurso no encontrado");
    }
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log("servidor escuchando en http://localhost:" + PORT);
});
