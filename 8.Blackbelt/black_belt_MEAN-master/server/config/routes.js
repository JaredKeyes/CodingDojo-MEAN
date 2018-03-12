var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');

module.exports = function(app) {
  app.get('/users', function(req, res) {
    users.index(req, res);
    // console.log('in routes');
  });
  app.get('/users/:id', function(req, res) {
    users.show(req, res);
  })
  app.post('/users', function(req, res) {
    console.log('in routes', req.body);
    users.create(req, res);
  });
  app.get('/topics', function(req, res) {
    topics.index(req, res);
  });
  app.get('/topics/:id', function(req, res) {
    topics.show(req, res);
  })
  app.post('/topics', function(req, res) {
    // console.log(req.body);
    topics.create(req, res);
  });
  app.post('/posts/:id', function(req, res) {
    // console.log('routes', req.body);
    posts.create(req, res);
  })
  app.put('/posts/:id', function(req, res) {
    // console.log('routes');
    posts.update(req, res);
  })
}
