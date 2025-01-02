require('dotenv').config(); // Asegura que .env se cargue

const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

(async () => {
  try {
    await client.connect();
    const query = fs.readFileSync('src/infrastructure/postgres/scripts/init.sql', 'utf8');
    await client.query(query);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error executing init.sql:', err);
  } finally {
    await client.end();
  }
})();
