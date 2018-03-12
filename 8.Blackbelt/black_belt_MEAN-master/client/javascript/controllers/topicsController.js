discussion_app.controller('topicsController', function($scope, $location, $routeParams, topicFactory, userFactory, postFactory) {
  $scope.topic = [];
  $scope.user = [];
  $scope.topic_id = {id: $routeParams.topic_id}
  $scope.user_id = {id: $routeParams.userID};
  $scope.posts = [];

  // console.log($scope.user_id);
  // console.log('topic factory', $scope.topic_id);
  topicFactory.show($scope.topic_id, function(data) {
    // console.log(data.posts);
    $scope.topic = data;
    $scope.posts = data.posts;
    console.log($scope.posts);
  })
  userFactory.show($scope.user_id, function(data) {
    $scope.user = data;
  })
  $scope.viewUser = function(target_id) {
    $scope.target_id = target_id;
    $location.path('/user').search({targetID: $scope.target_id, userID: $scope.user_id.id});
  }
  $scope.addPost = function() {
      $scope.newPost['user_id'] = $routeParams.userID;
      $scope.newPost['user_name'] = $scope.user.name;
      $scope.newPost['topic_id'] = $scope.topic._id;
      // console.log('controller', $scope.newPost);
      postFactory.create($scope.newPost, function(data) {
        // console.log(data);
      })
      topicFactory.show($scope.topic_id, function(data) {
        // console.log(data.posts);
        $scope.topic = data;
        $scope.posts = data.posts;
      })
      $scope.newPost = {};
      $location.path('/dashboard/' + $routeParams.userID);

  }
  $scope.addLike = function(target_id) {
    $scope.post_id = {id: target_id};
    postFactory.update($scope.post_id, function(data) {

    })
    topicFactory.show($scope.topic_id, function(data) {
      // console.log(data.posts);
      $scope.topic = data;
      $scope.posts = data.posts;
    })
  }

})
