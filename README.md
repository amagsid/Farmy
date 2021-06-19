# Farmy - MERN stack application
<p align="center">
  <img width="900" height="708" src="https://user-images.githubusercontent.com/66121679/122647880-b6c10e80-d126-11eb-8ab5-e1397b2d5c36.png">
</p>

##Stack used:
<p align="center">
  <img width="750" height="405" src="https://user-images.githubusercontent.com/66121679/122647879-b4f74b00-d126-11eb-923b-f6c5b4d1ae74.jpg">
</p>

##Customer journey:
<p align="center">
  <img width="750" height="420" src="https://user-images.githubusercontent.com/66121679/122647877-b32d8780-d126-11eb-9e5a-e1479a03a113.jpg">
</p>

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
