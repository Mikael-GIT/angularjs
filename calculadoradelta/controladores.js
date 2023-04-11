app.controller("controladorDelta",
	function ($scope) {
		$scope.calcularDelta = function(){

            $scope.delta = Math.pow($scope.b, 2) - 4 * $scope.a * $scope.c;
            $scope.x1 = ((-$scope.b + Math.sqrt($scope.delta)) / 2 * $scope.a).toFixed(2);
            $scope.x2 = ((-$scope.b - Math.sqrt($scope.delta)) / 2 * $scope.a).toFixed(2);
        }
	}
);

app.controller("controladoraEsfera",
	function ($scope) {
        
        $scope.calcularEsfera = function(){
            $scope.comprimento = (2 * Math.PI * $scope.raio).toFixed(2);
            $scope.area = (Math.PI * Math.pow($scope.raio, 2)).toFixed(2);
            $scope.volume = (4/3 * Math.PI * Math.pow($scope.raio, 3)).toFixed(2);
        }
	}
);