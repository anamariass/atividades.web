
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Bem vindo ao sistema');
});

app.get('/sobre', (req, res) => {
  res.send('sobre a aplicação');
});

app.get('/contato', (req, res) => {
  res.json({
  "email": "contato@email.com",
  "telefone": "(81) 99999-9999"
});
});

app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
});


app.get('/inicio', (req, res) => {
  res.redirect('/');
});

app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Usuario: ${id}`);
});


app.get('/produtos/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`produto: ${nome}`);
});

app.get('/filmes/:id/:nome', (req, res) => {
  const id = req.params.id;
  const nome = req.params.nome;

  res.send(`Id do filme: ${id}<br>Nome do filme: ${nome}`);
});

app.listen( 
    3000, 
    () => console.log(`Servidor em execução`)
);