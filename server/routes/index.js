var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', function (request, response) {
  response.sendFile(path.resolve('../public/index.html'))
})

module.exports = router;