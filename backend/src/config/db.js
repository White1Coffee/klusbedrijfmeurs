const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

pool
	.connect()
	.then((client) => {
		console.log('Verbonden met PostgreSQL');
		client.release();
	})
	.catch((error) => {
		console.error('PostgreSQL-verbinding mislukt:', error.message);
	});

module.exports = pool;
