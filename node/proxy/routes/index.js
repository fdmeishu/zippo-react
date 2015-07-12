var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}).get('/pager', function (req, res, next) {
  res.render('pager');
});

module.exports = router;