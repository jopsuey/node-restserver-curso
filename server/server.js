require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//---Middlewares, funciones que se disparan en cada peticion---
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//-------------------------------------------------------------
 
app.get('/', function (req, res) {
  res.json('Hello World')
})

app.get('/usuarios', function (req, res) {
  res.json('Get usuarios')
})

app.get('/usuario', function (req, res) {
  res.json('Get usuario')
})

app.post('/usuario', function (req, res) {
  let body = req.body;

  if(body.nombre === undefined)
  {
    res.status(400).json({
      ok: false, 
      mensaje: 'Nombre es necesario'
    });     
  }else{
    res.json({
      persona: body
    })
  }
})

//:parametro
app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  })
})

app.delete('/usuario', function (req, res) {
  res.json('Delete usuario')
})

app.listen(process.env.PORT, () =>{
    console.log('Escuchando puerto', process.env.PORT);
})