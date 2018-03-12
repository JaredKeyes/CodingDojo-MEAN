var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    app = express(),
    port = 6789;

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'secretpassword',
    name: 'new_app',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.get('/', (request, response) => {
    request.session.name = request.session.name || "";
    request.session.count = request.session.count || 0;

    let users = [
        {name: 'Matt', email: 'mtucker@codingdojo.com'},
        {name: 'Caleb', email: 'calebw.dekker@gmail.com'}
    ];

    response.render('index', {users: users, count: request.session.count});
});

app.post('/incredment', (request, response) => {
    request.session.count += 2;

    response.redirect('/');
});
