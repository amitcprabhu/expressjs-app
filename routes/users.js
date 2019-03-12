var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

const users = [{ id: 1, name: 'amit', city: 'pune' }, 
{ id: 2, name: 'pradnya', city: 'pune' }, 
{ id: 2, name: 'pradnya', city: 'pune' }, 
{ id: 2, name: 'pradnya', city: 'pune' }];

// create application/json parser
var jsonParser = bodyParser.json()

/* GET users listing. */
router.get('/', function (req, res, next) {
  const result = req.query.id != undefined ? users.filter(val => val.id == req.query.id) : users;
  res.json(result);
});

/* Post users listing. */
router.post('/', jsonParser, function (req, res, next) {
  users.push(req.body);
  console.log(users);
  res.json(users)
});

module.exports = router;
