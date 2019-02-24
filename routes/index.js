var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

var jsonParser = bodyParser.json()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',jsonParser,function(req,res,next){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});


module.exports = router;
