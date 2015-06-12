var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chella Man Art' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Chella Man Art' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Chella Man Art' });
});

router.get('/artwork', function(req, res, next) {
  res.render('artwork', { title: 'Chella Man Art' });
});

router.get('/artwork/sketches', function(req, res, next) {
  res.render('sketches', { title: 'Chella Man Art' });
});

router.get('/artwork/paint', function(req, res, next) {
  res.render('paint', { title: 'Chella Man Art' });
});

router.get('/artwork/apparel', function(req, res, next) {
  res.render('apparel', { title: 'Chella Man Art' });
});

router.get('/artwork/photography', function(req, res, next) {
  res.render('photography', { title: 'Chella Man Art' });
});

router.get('/artwork/pastels', function(req, res, next) {
  res.render('pastels', { title: 'Chella Man Art' });
});

router.get('/artwork/collages', function(req, res, next) {
  res.render('collages', { title: 'Chella Man Art' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Chella Man Art' });
});

router.get('/shop/confirmation', function(req, res, next) {
  res.render('confirmation', { title: 'Chella Man Art' });
});

module.exports = router;
