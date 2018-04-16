var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    path = require('path'),
    app = express(),
    port = 6789;

    mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(session({
    secret: 'secretpassword',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');

var NinjaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    weapons: { type: Array, 'default': [] }
}, { timestamps: true });

var Ninja = mongoose.model('Ninja', NinjaSchema);

app.get('/', (req, res) => {
    let ninjas = Ninja.find({}, function(err, ninjas) {
        if (err) {
            console.log(err);

            return res.render('index');
        }
        res.render('index', { ninjas: ninjas });
    });
    
});

app.post('/ninjas', (req, res) => {
    let ninja = new Ninja(req.body);

    ninja.save((error, ninja) =>{
        if (error) {
            console.log(error);
        }
        else {
            console.log(ninja);
        }

        return res.redirect('/');
    });   
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

