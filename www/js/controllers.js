angular.module('app.controllers', [])
  
.controller('inicioDeSesióNCtrl', function($scope,$http) {
	login={
		username:$scope.username,
		password:$scope.password
	}
	$scope.hacerLogin = function(){
		console.log('entre en el login');
		$http.post('http://localhost:3000/login',login).
		success(function(data){
			console.log(data);
		})
	}

})
   
.controller('registroCtrl', function($scope) {

})
   
.controller('rutinasCtrl', function($scope) {

})
   
.controller('progresoCtrl', function($scope) {

})
   
.controller('establecimientosCtrl', function($scope) {

})
    