var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gift', { title: 'Search results Gift' });
});

module.exports = router;
