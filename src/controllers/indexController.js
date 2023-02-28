const express = require('express');
const { render } = require('ejs');

class indexController
{
    home(req, res)
    {
        res.render('index');
    }

    document(req, res)
    {
        res.render('doc');
    }
}

module.exports = new indexController();