var express    = require('express');    // call express

// more routes for our API will happen here
var routes = require('./index');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

router.route('/')
  .get(routes.index);

module.exports = router;