var mongoose = require('mongoose');
var UserModel = require('./schemas/users');
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToYourProductionMongoDb';
var usedDb;

if(process.env.NODE_ENV === 'development') {
	usedDb = developmentDb;
	mongoose.connect(usedDb);
};

if(process.env.NODE_ENV === 'production') {
	usedDb = productionDb;
	mongoose.connect(usedDb);
};

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	console.log('Database Connection Successfully Opened at ' + usedDb);
});

exports.users = UserModel;