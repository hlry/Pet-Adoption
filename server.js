const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const uid = require('uid-safe')

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(
    session({
      secret: 'This is a major secret!',
      resave: false,
      saveUninitialized: false
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use apiRoutes
app.use(routes);

//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)});
  });
