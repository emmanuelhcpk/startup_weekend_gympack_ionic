angular.module('app.controllers', [])
  
.controller('inicioDeSesióNCtrl', function($scope,$http) {
	
	$scope.hacerLogin = function(){
		login={
		username:$scope.username,
		password:$scope.password
		}
		console.log('entre en el login');
		$http.post('http://localhost:3000/login',login).
		success(function(data){
			console.log(data);
		})
	}


})
   
.controller('registroCtrl', function($scope,$http) {

	$scope.signup = function(){
		console.log('entre en el signup',$scope.username);
		$http.post('http://localhost:3000/signup',{
		username:$scope.username,
		password:$scope.password
		}).
		success(function(data){
			console.log(data);
		})
	}

})
   
.controller('rutinasCtrl', function($scope) {

})
   
.controller('progresoCtrl', function($scope) {

})
   
.controller('establecimientosCtrl', function($scope) {

})
    