discussion_app.factory('topicFactory', function($http) {
  var factory = {};
  var topics = [];
  var topic = "";
  var categories = [{name: 'mexican food'}, {name: 'rollercoasters of death'}, {name: 'zika virus'}, {name: 'bashar al-assad'}, {name: 'the kardashians'}, {name: 'bitcoin'}]

  factory.index = function(callback) {
    $http.get('/topics').success(function(output) {
      topics = output;
      callback(topics);
    })
  }
  factory.create = function(info, callback) {
    console.log('factory', info);
    $http.post('/topics', info).success(function(output) {
      topics.push(info);
      callback(output);
    })
  }
  factory.getCategory = function(callback) {
    callback(categories);
  }
  factory.show = function(info, callback) {
    $http.get('/topics/' + info.id).success(function(output) {
      topic = output;
      callback(topic);
    })
  }
  return factory;
})
