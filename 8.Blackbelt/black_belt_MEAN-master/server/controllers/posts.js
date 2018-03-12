var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');

module.exports = (function() {
  return {
    index: function(req, res) {
      Post.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res) {
      Topic.findOne({_id: req.params.id}, function(err, topic) {
          var postInstance = new Post({text: req.body.text, details: req.body.details, user_name: req.body.user_name, user_id: req.body.user_id});
          console.log('server controller', topic);
          postInstance._topic = topic._id;
          topic.posts.push(postInstance);
          postInstance.save(function(err){
            topic.save(function(err) {
              if(err) {
                console.log(err);
              } else {
                res.json();
              }
            })
          })
      })
    },
    update: function(req, res) {
      Post.update({_id: req.params.id}, {$inc : {likes: 1}}, function(err, post) {
        if(err) {
          console.log(err);
        } else {
          res.json(post);
        }
      })
    }

  }
})();
