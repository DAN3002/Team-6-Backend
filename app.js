const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = config.port || 5000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './src/views/partials');

const homeRouter = require('./src/routes/index');
app.use('/', homeRouter);
// app.get('/home', (req, res) =>
// {
//     res.render('index');
// });


app.listen(port, () =>
{
    console.log(`Server running on port ${port}`);
});
