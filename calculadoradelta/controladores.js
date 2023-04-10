app.controller("controladorDelta",
	function ($scope) {
		$scope.calcularDelta = function(){

            $scope.delta = Math.pow($scope.b, 2) - 4 * $scope.a * $scope.c;
            $scope.x1 = ((-$scope.b + Math.sqrt($scope.delta)) / 2 * $scope.a).toFixed(2);
            $scope.x2 = ((-$scope.b - Math.sqrt($scope.delta)) / 2 * $scope.a).toFixed(2);
        }
	}
);