const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

/*const meu_middleware = function(req, res, next){
    console.log("Executando o Middleware")
    next();
}

const meu_middleware_2 = function(req, res, next){
    console.log("Executando outro Middleware")
    next();
}

app.use(meu_middleware);
app.use(meu_middleware_2);

let get_request_time = function(req, res, next){
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
}

app.use(get_request_time);

app.get('/', (req, res) => {
    res.send("Olá Você acessou em " + req.request_time);
});*/

/*app.use('/tempo', function(req, res, next) {
    console.log("Middleware de tempo chamado.");
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();    
});

app.get('/tempo', (req, res) => {
    res.send("Olá Você acessou em " + req.request_time);
});

app.get('/', (req, res) => {
    res.send("Estou no endereço raiz.");
});*/

app.use(function(req, res, next) {
    console.log("Inicio!");
    next(); 

app.listen(port, () => console.log(`Escutando na porta ${port}`));