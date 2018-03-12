var users = require('../controllers/users.js');
var quotes = require('../controllers/quotes.js');

module.exports = (app) => {
    //USERS

    //Index
    app.get('/', users.index);
    //Create
    app.post('/users', users.create);
    //Show
    app.get('/users/:id', users.show);
    
    //QUOTES

    //Index
    app.get('/quotes', quotes.index);
    //Create
    app.post('/quotes', quotes.create);
}