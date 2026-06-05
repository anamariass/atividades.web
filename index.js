
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


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

app.get('/buscar', (req, res) => {
  console.log(req.query.nome);
  res.send('Buscando por: ' + req.query.nome);
});

app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;
  const pagina = req.query.pagina;

  res.send(`Categoria: ${categoria} | Página: ${pagina}`);
});

app.get('/usuarios', (req, res) => {
  const idade= req.query.idade;

  res.send(`Filtrando usuarios com a idade: ${idade} `);
});

app.get('/usuarios', (req, res) => {
  const idade= req.query.idade;

  res.send(`Filtrando usuarios com a idade: ${idade} `);
});

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/perfil', (req, res) => {
    res.render('perfil',{
      nome: 'Ana Maria',
      idade: 16 
    })
})

app.get('/filmes', (req, res) => {
    res.render('filmes',{
      filmes: [
      'Vingadores: Ultimato',
      'O Poderoso Chefão',
      'Cidade de Deus',
      'Avatar']
    })
})

app.get('/mensagens', (req, res) => {
    res.render('mensagens', {
        logado: true,
        admin: false,
    })
})
 
app.get('/filmess', (req, res) => {
    res.render('filmess', {
    filmess:[ 
    { nome: 'Vingadores: Ultimato', ano: 2019 },
    { nome: 'Cidade de Deus', ano: 2002 },
    { nome: 'Avatar', ano: 2009 },
    { nome: 'O Poderoso Chefão', ano: 1972 }
   ]
  })
})

const videos = [
  {
    titulo: 'Aprendendo Express',
    criador: 'Ana Maria e Eduarda',
    descricao: 'Curso básico de Express.js',
    visualizacoes: 1200,
    curtidas: 350,
    hashtag: '#nodejs',
    videoUrl: 'https://youtube.com',
    thumbnailUrl: 'https://via.placeholder.com/300x180'
  }
];

app.get('/videos', (req, res) => {
  res.render('videos', { videos });
});

app.get('/videos/cadastrar', (req, res) => {
  res.render('cadastrar');
});

app.post('/videos', (req, res) => {
  const novoVideo = {
    titulo: req.body.titulo,
    criador: req.body.criador,
    descricao: req.body.descricao,
    visualizacoes: req.body.visualizacoes,
    curtidas: req.body.curtidas,
    hashtag: req.body.hashtag,
    videoUrl: req.body.videoUrl,
    thumbnailUrl: req.body.thumbnailUrl
  };

  videos.push(novoVideo);

  res.redirect('/videos');
});

 
app.listen(
  3000,
  () => console.log('Servidor em execução')
);

