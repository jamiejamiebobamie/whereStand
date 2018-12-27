const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const port = process.env.PORT || 17000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//About page route
app.get('/', (req, res) => {
  res.render('sketch', {});
});

app.listen(port);

module.exports = app;
