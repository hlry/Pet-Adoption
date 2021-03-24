const express = require('express');
const exphbs  = require('express-handlebars');
const session = require('express-session');

const sequelize = require('./config/connection');

const path = require('path');
// const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
  );

app.use('/static', express.static(path.join(__dirname, 'public', 'assets')))
var hbs = exphbs.create({
  helpers: {
      id : function() {return this.id},
      pet_name : function () { return this.pet_name; },
      age : function () { return this.age; },
      color : function () { return this.color; },
      size : function () { return this.size; },
      species: function() {return this.species},
      user_id : function () { return this.user_id; },
      description: function() {return this.description}
      },
  defaultLayout : 'main'
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers/'));





// app.set('jsonp callback name', 'adopt_cb');



app.get('/', function(req,res) {
  console.log('\n@@ IN SERVER.JS @@@\n===================')
  res.render('home')
});
// app.get('/adopt', function(req,res) {
//   console.log('\n@@ IN SERVER.JS @@@\n===================')
//   // res.render('adopt', res.json(req.body));
// });
// app.get('/api/*', function(req,res) {
//   res.jsonp(req.body.data) 
// });
// app.get('/adopt', function( req, res) {
//   res.render('adopt')
// })
// app.get('/', function(req,res) {
//   res.render('index', (err,html) => {
//     res.send(html)
//   })
// });
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)});
  });

