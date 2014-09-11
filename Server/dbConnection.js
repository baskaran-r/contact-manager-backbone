var mongoose      = require('mongoose'),
		config				=	require('./config'),
		dbUrl 				= 'mongodb://',
		connection;

dbUrl = 'mongodb://';
dbUrl += config.database.mongodb.host + ':' + config.database.mongodb.port;
dbUrl += '/' + config.database.db;

connection = mongoose.createConnection(dbUrl);
connection.on('error', console.error.bind(console, 'Database connection error:'));

connection.once('open', function (argument) {
  console.log('Database connection established!');
});

module.exports = connection;