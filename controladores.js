app.controller("controladorPaciente",
	function ($scope) {
		$scope.nome = 'Gabriel Duarte';
		$scope.idade = 19;
		$scope.peso = 79.3;
		$scope.altura = 1.74;
		$scope.sexo = 'M';
	}
);

app.controller("controladorTime",
	function ($scope) {
		$scope.times = [
			'Fluminense',
			'Vasco',
			'Flamengo',
			'Volta Redonda',
			'Botafogo'
		];
	}
);

app.controller("controladorTabela",
	function ($scope) {
		$scope.tabela = [
			{ pos: '1º', time: 'Fluminense', pts: 25 },
			{ pos: '2º', time: 'Vasco da Gama', pts: 23 },
			{ pos: '3º', time: 'Flamengo', pts: 23 },
			{ pos: '4º', time: 'Volta Redonda', pts: 20 },
			{ pos: '5º', time: 'Botafogo', pts: 19 },
			{ pos: '6º', time: 'Audax Rio', pts: 16 },
			{ pos: '7º', time: 'Nova Iguaçu', pts: 13 },
			{ pos: '8º', time: 'Portuguesa-RJ', pts: 13 },
			{ pos: '9º', time: 'Bangu', pts: 12 },
			{ pos: '10º', time: 'Madureira', pts: 9 },
		];
	}
);

app.controller("controladorNome",
	function ($scope) {
		$scope.nome = "José da Silva";

		$scope.trocarNome = function () {
			if ($scope.nome == "José da Silva")
				$scope.nome = "Maria da Conceição";
			else
				$scope.nome = "José da Silva";
		}
	}
);

app.controller("controladorIdade",
	function ($scope) {
		$scope.nome = "Gabriel Duarte";
		$scope.nasc = 2003;
		$scope.data = new Date();
		$scope.anoa = $scope.data.getFullYear();

		$scope.calcularIdade = function () {
			return $scope.anoa - $scope.nasc;
		}
	}
);

app.run(
	function ($rootScope) {
		$rootScope.linguagem1 = 'JavaScript';
		$rootScope.linguagem2 = 'Python';
	}
);

app.controller("controladorLinguagem",
	function ($scope) {
		$scope.linguagem2 = 'Java';
		$scope.msg = 'I love ' + $scope.linguagem1;
	}
);
app.controller("controladorDados",
	function ($scope) {
		$scope.nome = "Fernanda da Costa";
		$scope.email = "FERNADA.COSTA@GMAIL.COM";
	}
);
app.controller("controladorAlunos",
	function ($scope) {
		$scope.alunos = [
			{ nome: 'José', cidade: 'Duque de Caxias' },
			{ nome: 'Maria', cidade: 'Nova Iguaçu' },
			{ nome: 'Renata', cidade: 'Belford Roxo' },
			{ nome: 'Natalia', cidade: 'São João de Meriti' },
			{ nome: 'Marco', cidade: 'Magé' },
			{ nome: 'Augusto', cidade: 'Nilópolis' },
			{ nome: 'João', cidade: 'Seropédica' },
			{ nome: 'Mariana', cidade: 'Paracambi' },
			{ nome: 'Fernanda', cidade: 'Mesquita' },
			{ nome: 'Gerson', cidade: 'Queimados' }
		];
	}
);
app.controller("controladorProduto",
	function ($scope) {
		$scope.descricao = 'Mouse Óptico';
		$scope.dolar = 3.99;
		$scope.real = $scope.dolar * 5.06;
	}
);
app.controller("controladorTurma",
	function ($scope) {
		$scope.alunos = ['Rafael', 'Gabriel', 'Andrew', 'Raphael P.', 'Dimitrius', 'Diego', 'Raphael F.', 'Lucas', 'Victor', 'Arthur', 'Jonatha'];
	}
);

app.controller("calculadoraDelta",
	function ($scope) {
	
	}
);