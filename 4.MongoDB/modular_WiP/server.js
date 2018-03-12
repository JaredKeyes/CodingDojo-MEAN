var express     = require('express'),
    bodyParser  = require('body-parser'),
    session     = require('express-session'),
    path        = require('path'),
    app         = express(),
    routes      = require('./server/config/routes.js'),
    port        = 6789;

require('./server/config/mongoose.js'),

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
    
app.use(bodyParser.urlencoded({extended: true}));
    
app.use(express.static(path.join(__dirname, '/client/static')));
    
app.set('views', path.join(__dirname, '/client/views'));
    
app.set('view engine', 'ejs');

routes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});