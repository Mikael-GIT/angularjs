app.controller("controladorDelta",
	function ($scope) {
		$scope.calcularDelta = function(){

            $scope.delta = Math.pow($scope.b, 2) - 4 * $scope.a * $scope.c;
        }
	}
);