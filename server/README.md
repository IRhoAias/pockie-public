Built on Node version v14.16.0

# .env

There is a .env-mock file that needs to be filled out with your information and renamed .env

# Postgres

Create a database with whatever name you desire. Make sure that the PG_DATABASE name in your .env file matches the database you created.

Download: https://www.postgresql.org/download/

Now open a Terminal an Run both "node runtable"/"node runtable2" to create the proper tables and base server.

# Redis

Currently you need redis enterprise to use the redis json storage features. You can get a free version on https://app.redislabs.com/
But one recommendation is Install Redis on Docker usin This command: docker run -d --name PNTEST -p 6379:6379 redis/redis-stack-server:latest
just update your .env file to match the port, host and password to your redis version.

# Start The server

Open a Terminal on the folder and execute "npm start"