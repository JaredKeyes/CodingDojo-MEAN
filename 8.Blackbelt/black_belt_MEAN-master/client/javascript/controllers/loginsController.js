discussion_app.controller('loginsController', function($scope, $location, userFactory) {
  $scope.users =[];
  $scope.id = "";

  userFactory.index(function(data) {
    // console.log(data);
    $scope.users = data;
    // console.log($scope.users);
  });
  $scope.addUser = function() {
    // console.log($scope.users);
    if($scope.newUser == undefined) {
      var blank = true;
    }
    for(x in $scope.users) {
      if ($scope.users[x].name == $scope.newUser.name) {
        $scope.id = $scope.users[x]._id;
        var dupe = true;
        // console.log($scope.id);
        $location.path('/dashboard/' + $scope.id);
      }
    }
    if (!dupe && !blank) {
      userFactory.create($scope.newUser, function(user) {
        // console.log($scope.newUser);
        // console.log('this is a', user);

        $scope.id = user._id;
        $location.path('/dashboard/' + $scope.id);
      });
    }
    else if (blank) {
      $scope.blank = true;
      $location.path('/');
    }
  }

})
