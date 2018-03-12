var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Topic.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res) {
      var topicInstance = new Topic({name: req.body.name, desc: req.body.desc, category: req.body.category, user_id: req.body.user_id, user_name: req.body.user_name});
      topicInstance.save(function(err, results) {
        if(err) {
          console.log(err);
        } else {
          User.update({name: req.body.user_name}, {$inc : {topicsCt: 1}}, function(err, results) {
            console.log('update results', results);
          })
          console.log(results);
        }
      })
      Topic.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    show: function(req, res) {
      Topic.findOne({_id: req.params.id})
        .populate({
          path: 'posts',
          model: 'Post',
        })
        .exec(function(err, topic) {
          if(err) {
            console.log(err)
          } else {
            res.json(topic);
          }
        })
    }
  }
})();
