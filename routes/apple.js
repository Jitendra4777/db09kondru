var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apple', { title: 'Search Results by Apple' });
});

module.exports = router;
