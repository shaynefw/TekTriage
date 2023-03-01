const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers.js');
const sequelize = require('./config/connection');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express(); // This is the Express.js server
const PORT = process.env.PORT || 3001; // This is the port that the server will listen on

const sess = {
  secret: 'super secret secret',
  cookie: {}, // This is the cookie that will be sent to the browser
  resave: false, 
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize, // This is the connection to the database
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Set up Handlebars.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
}); 