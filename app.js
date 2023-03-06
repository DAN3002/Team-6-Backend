const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 7777;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const learningRouter = require('./src/routes/learning');
app.use('/learning', learningRouter);

const questionRouter = require('./src/routes/question-route');
app.use('/api', questionRouter);

const homeRouter = require('./src/routes/index');
app.use('/', homeRouter);

<<<<<<< HEAD
app.listen(port, () =>
{
    console.log(`Server running on port ${port}`);
=======
app.listen(3000, () =>
{
    console.log(`-- Server running on port ${3000}`);
>>>>>>> fb579318026af60159e79028afae73d4575e46a4
});
