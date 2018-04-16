discussion_app.controller('usersController', function($scope, $location, $routeParams, userFactory) {
  $scope.user = [];
  $scope.target_id = {id: $routeParams.targetID};
  $scope.user_id = $routeParams.userID;
  // console.log('in controller', $routeParams);
// console.log('user id', $scope.target_id);
  userFactory.show($scope.target_id, function(data) {
    $scope.user = data;
  });
})
