/* eslint-disable linebreak-style */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
// importa manipulador de json
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// Importa manipulador de arquivos
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Desafio Semana 4'});
});

/* GET rota 1 */
router.get('/about', function(req, res, next) {
  fs.readFile('./public/about.txt', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.set({'content-Type': 'text/plain'}).send(data);
  });
});

// eslint-disable-next-line linebreak-style

/* POST rota 1 */
router.post('/about', function(req, res) {
  const {nome, dataNasc} = req.body;
  res.status(201).json({nome: nome, dataNasc: dataNasc});
});


/* PUT rota 1 */
router.put('/about', function(req, res) {
  const {nome, dataNasc} = req.body;
  res.status(201).json({nome: nome, dataNasc: dataNasc});
});


/* DELETE rota 1*/
router.delete('/about', function(req, res) {
  const {nome, dataNasc} = {nome: '', dataNasc: ''};
  res.status(201).json({nome: nome, dataNasc: dataNasc});
});


/* GET rota 2 */
router.get('/visitante', function(req, res, next) {
  fs.readFile('./public/visita.html', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.set({'content-Type': 'text/html'}).send(data);
  });
});

/* POST rota 2 */
router.post('/visitante', function(req, res) {
  const {fruta, idade} = req.body;
  res.status(201).json({fruta: fruta, idade: idade});
});


/* PUT rota 1 */
router.put('/visitante', function(req, res) {
  const {fruta, idade} = req.body;
  res.status(201).json({fruta: fruta, idade: idade});
});


/* DELETE rota 1*/
router.delete('/visitante', function(req, res) {
  // eslint-disable-next-line no-unused-vars
  const {fruta, idade} = {fruta: '', idade: ''};
  res.status(201).json({nome: nome, dataNasc: dataNasc});
});

module.exports = router;
