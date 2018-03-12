discussion_app.factory('userFactory', function($http) {
  var factory = {};
  var users = [];
  var user = "";

  factory.index = function(callback) {
    $http.get('/users').success(function(output) {
      users = output;
      callback(users);
    })
  }
  factory.show = function(info, callback) {
    // console.log(info);
    $http.get('/users/' + info.id).success(function(output) {
      // $console.log(output);
      user = output;
      callback(user);
    })
  }
  factory.create = function(info, callback) {
    info['topicsCt'] = 0;
    info['postsCt'] = 0;
    info['commentsCt'] = 0;
    $http.post('/users', info).success(function(output) {
      // console.log(info);
      users.push(info);
      callback(output);
    });
  }
  return factory;
})
