// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


var stock = {"Cola":10,"Fanta":10,"Sprite":10};
router.get('/stock', function(req, res) {
	console.log("GET: stock");
    res.json(stock);   
});

router.post('/stock', function(req, res) {
	console.log("POST: stock");
	stock = req.body;
    res.json({ message: 'Stock Updated' });   
});

app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('FixxIt Technical Test API started http://localhost:' + port);