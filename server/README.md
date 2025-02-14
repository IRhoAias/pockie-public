Built on Node version v14.16.0

# Postgres

Create a database with whatever name you desire. Make sure that the PG_DATABASE name in your .env file matches the database you created.

Download: https://www.postgresql.org/download/

Now open a Terminal an Run both "node runtable"/"node runtable2" to create the proper tables and base server.

# Redis

Currently you need redis enterprise to use the redis json storage features. You can get a free version on https://app.redislabs.com/
But one recommendation is Install Redis on Docker usin This command: docker run -d --name PNTEST -p 6379:6379 redis/redis-stack-server:latest
just update your .env file to match the port, host and password to your redis version.

# Final .env

There is a .env-mock file that needs to be filled out with your information and renamed .env
Example:
		JWT_SECRET=123456789
		NODE_ENV=dev
		NODE_CONFIG_DIR=F:\PNpub\server\config
		PG_HOST=localhost
		PG_PORT=5432
		PG_DATABASE=PNpub
		PG_USERNAME=postgres
		PG_PASSWORD=123456
		REDIS_HOST=localhost
		REDIS_PORT=6379

# Start The server

Open a Terminal on the folder and execute "npm start"