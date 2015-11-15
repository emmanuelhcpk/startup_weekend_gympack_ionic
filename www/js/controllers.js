angular.module('app.controllers', [])
  
.controller('LoginController', function($scope,$state,$http,$location) {
	
	$scope.hacerLogin = function(){
		login={
		username:$scope.username,
		password:$scope.password
		}
		console.log('entre en el login');
		$http.post('http://localhost:3000/login',login).
		success(function(data){
			$state.go('gymPack.rutinas');
			console.log(data);
		})
	}
})
.controller('SignupController', function($scope,$http) {
	$scope.username="";
	$scope.password="";
	$scope.signup = function(){

		console.log('entre en el signup',$scope);
		$http.post('http://localhost:3000/signup',{
		username:$scope.username,
		password:$scope.password
		}).
		success(function(data){
			console.log(data);
		})
	}

})
   
.controller('rutinasCtrl', function($scope,$http,$state,$location) {

	$scope.semaforo= true;
	$http.get('http://localhost:3000/rutinas/all').
			success(function(data){
				console.log(data);
				$scope.rutines = data;
			})
	$scope.abrirRutina= function(rutina){
		$scope.rutina= rutina;
		$scope.semaforo= false;
		//$state.go('ver-rutina');
		//$location.path('page7')
		}		
	$scope.verRutinas= function(){
		$scope.semaforo= true;
	}


})
   
.controller('progresoCtrl', function($scope) {

})
   
.controller('GymController', function($scope) {

})
    