var express     = require('express'),
    bodyParser  = require('body-parser'),
    session     = require('express-session'),
    mongoose    = require('mongoose'),
    path        = require('path'),
    app         = express()
    port        = 6789;
    
mongoose.connect('mongodb://localhost/figuring_it_out');

var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date }
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

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

app.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            console.log(err);
        }

        return res.render('index', { users: users });
    });
});

app.post('/users', (req, res) => {
    let user = new User(req.body);

    user.save((err) => {
        if (err) {
            console.log(err.message);
            
        }
        
        return res.redirect('/')
    });
});

app.get('/users/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            console.log(err.message);

            return res.redirect('/');
        }

        return res.render('show', { user: user });
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});