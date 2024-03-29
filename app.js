
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , figlet_service = require('./figlet_service').figlet_service;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.logger({ format: ':method :url' }));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.post('/', figlet_service);
app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
