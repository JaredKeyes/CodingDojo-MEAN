discussion_app.factory('postFactory', function($http) {
  var factory = {};
  var posts = [];

  factory.index = function(callback) {
    $http.get('/posts').success(function(output) {
      posts = output;
      callback(posts);
    })
  }
  factory.create = function(info, callback) {
    console.log('factory', info);
    $http.post('/posts/' + info.topic_id, info).success(function(output) {
      posts.push(info);
      callback(output);
    })
  }
  factory.update = function(info, callback) {
    console.log(info);
    $http.put('/posts/' + info.id).success(function(output) {
      callback(output);
    })
  }
  return factory;
})
