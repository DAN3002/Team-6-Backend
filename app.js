const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/temp', (req, res) => res.render('temp'));


const learningRouter = require('./src/routes/learning');
app.use('/learning', learningRouter);

const questionRouter = require('./src/routes/question-route');
app.use('/api', questionRouter);

const homeRouter = require('./src/routes/index');
app.use('/', homeRouter);

app.listen(port, () =>
{
    console.log(`-- Server running on port ${port}`);
});

module.exports = app;
