const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

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

app.use(bodyparser.urlencoded({ extended: false}));
app.use('/', express.static(__dirname + '/src'));

app.use((req, res, next) => {
  console.log("Início."); 
  next();
});

// Middleware é todo o tipo de função que está entre um pedido HTTP 
// e a resposta final que o servidor envia de volta para o cliente.

const DataTime = (req, res, next) => {
  console.log("Data Time.");  

  let tempo_atual = Date.now();
  let hoje = new Date(tempo_atual);
  req.request_time = hoje.toUTCString();    
  next();
}

// post = O método HTTP para o qual a função de middleware é aplicada.
// '/' = Caminho (rota) para o qual a função de middleware é aplicada.
// A função de middleware.
// next = Argumento de retorno de chamada para a função de middleware, chamado de "next" por convenção.

app.post('/', DataTime, (req, res) => {
  console.log("Data: " + req.request_time);
  console.log("Nome: " + req.body.nome);
  console.log("E-mail: " + req.body.email);
  console.log("Comentário: " + req.body.comentario);

  res.redirect('/');
});

app.get('*', (req, res) => {
  res.send("Página Inválido: 404");
}); 

app.listen(port, () => console.log(`Escutando na porta ${port}`));