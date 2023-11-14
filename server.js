

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers');
const sequelize = require('./config/connection');
// const { ok } = require('assert');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 7 * 24 * 60 * 60 * 1000, // expires after week
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// all other routes are directed elsewhere
// if routes are breaking, maybe check this first
app.use('/', routes);

//const okToSync = (process.env.NODE_ENV === 'production') ? false : true;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// git remote add origin https://github.com/lavollmer/songquest.git