discussion_app.factory('commentFactory', function($http) {
  var factory = {};
  var comments = [];

  factory.index = function(callback) {
    $http.get('/comments').success(function(output) {
      comments = output;
      callback(comments);
    })
  }
  return factory;
})
