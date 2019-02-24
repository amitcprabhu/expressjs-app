var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

const users=[{id:1,name:'amit',city:'pune'},{id:2,name:'pradnya',city:'pune'}];

// create application/json parser
var jsonParser = bodyParser.json()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users)
});

/* Post users listing. */
router.post('/', jsonParser,function(req, res, next) {
  console.log('user post')
  users.push(req.body);
  console.log(users);
  res.json(users)
});

module.exports = router;
