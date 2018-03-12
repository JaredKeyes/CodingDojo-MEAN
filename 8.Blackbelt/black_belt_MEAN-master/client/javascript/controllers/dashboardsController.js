discussion_app.controller('dashboardsController', function($scope, $location, $routeParams, userFactory, topicFactory, postFactory, commentFactory) {
  $scope.user = [];
  $scope.id = {id: $routeParams.id};
  $scope.categories = [];
  $scope.topics = [];

  // console.log($routeParams.id);
  userFactory.show($scope.id, function(data) {
    $scope.user = data;
    // console.log('return data in controller', $scope.user);
  });
  topicFactory.index(function(data) {
    $scope.topics = data.reverse();
    // console.log($scope.topics);
  })
  topicFactory.getCategory(function(data) {
    $scope.categories = data;
    // console.log($scope.categories);
  })
  $scope.addTopic = function() {
    $scope.newTopic['user_id'] = $routeParams.id;
    $scope.newTopic['user_name'] = $scope.user.name;
    // console.log('new topic: ', $scope.newTopic);
    topicFactory.create($scope.newTopic, function(data) {
      // console.log(data);
      $scope.topics = data;
    })
    $scope.newTopic = {};
    $location.path('/dashboard/' + $routeParams.id);
  }
  $scope.viewUser = function(target_id) {
    $scope.target_id = target_id;
    $location.path('/user').search({targetID: $scope.target_id, userID: $scope.id.id});
  }
  $scope.viewTopic = function(topic_id) {
    // console.log(topic_id);
    $scope.topic_id = topic_id;
    $location.path('/topic').search({topic_id: $scope.topic_id, userID: $scope.id.id});
  }
  $scope.addAnswer = function(topic_id) {
    $scope.topic_id = topic_id;
    $location.path('/addAnswer').search({topic_id: $scope.topic_id, userID: $scope.id.id});
  }
  $scope.applySearch = function() {
    $scope.search = $scope.searchInput;
    $scope.searchInput = {};
  }
})
