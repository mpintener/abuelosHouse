var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/client')(app, mongoose);
var ClientCtrl = require('./api/ClientController');

var router = express.Router();

// Index
router.get('/', function(req, res) { 
 res.send("Hola Mundo - www.programacion.com.py");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/clients') 
	.get(ClientCtrl.findAll)
	.post(ClientCtrl.add);

api.route('/clients/:id') 
	.get(ClientCtrl.findById)
	.put(ClientCtrl.update)
	.delete(ClientCtrl.delete);

app.use('/api', api);

app.use(router);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});

// DB connection
mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});