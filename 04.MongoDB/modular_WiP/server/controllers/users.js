var session = require('express-session');
var User = require('../models/users.js');

module.exports = {
    index: (req, res) => {
        if ('errors' in session) {
            var errors = session['errors'];
    
            console.log(typeof errors);
    
            delete session['errors'];
        }
        
        User.find({}, (err, users) => {
            if (err) {
                console.log(err);
            }
    
            return res.render('users/index', { users: users });
        });
    },
    create: (req, res) => {
        let user = new User(req.body);
        
            user.save((err) => {
                if (err) {
                    console.log(err.message);
                    
                }
                
                return res.redirect('/')
            });
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id }, (err, user) => {
            if (err) {
                console.log(err.message);
    
                return res.redirect('/');
            }
    
            return res.render('users/show', { user: user });
        });
    }
}
