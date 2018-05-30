# Passport with React
This version uses React to control the login requests and redirection in coordination with client-side routing.
`Fork` this repo and make your own copy!

## Create database and table

Create a new database called `passport_intro` and create the following tables:

```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "person_id" INT REFERENCES "person"
);
```

## Start the server

- `npm install`
- `npm run server`
- `npm run client`

## Passport

This project has been set up with passport. There is a lot of code that has already been written. You're not expected to understand all of the code but will need to be able to check if the user is authenticated in your routes.

### High Level

Let's look through some of the provided code to get an idea of what's happening.

- server.js
- strategies/user.strategy.js
- modules/session-middleware.js
- modules/authentication-middleware.js
- constants/warnings.js

### Key Components

- `req.isAuthenticated()` is a function available to you on all of your routes.
- If the user is authenticated, `req.user` will be available to you.

### pet.router.js

Let's take a look at this in practice.

