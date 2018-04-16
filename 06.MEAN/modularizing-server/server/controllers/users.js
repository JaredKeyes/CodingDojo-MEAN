const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersController {
    
    index(req, res){
        User.find({}, (err, users) => {
            if(err){
                console.log(err);
            }
            res.render('index', { users: user })
        })
    }
}

module.exports = new UsersController();