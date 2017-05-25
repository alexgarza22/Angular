angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	if (localStorageService.get("ATDL")){
		$scope.todo = localStorageService.get("ATDL");
	}
	else{
		$scope.todo = [];
	}
	
	$scope.newAct = {};

	$scope.$watchCollection("todo", function(nVal,oldVal)
		{
			localStorageService.set("ATDL",$scope.todo);
		});
	$scope.addAcvtivity = function()
	{
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};
		
	}
	$scope.despejar = function()
	{
		$scope.todo = [];
		
	}
})