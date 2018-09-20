(function()
{
	angular.module("app.forecast").controller("Forecast",function($scope,$routeParams,weatherSvc){
		$scope.forecast=null;
		$scope.fore1=null;
		if($routeParams.id!==undefined)
		{
			getForecast($routeParams.id);
		}

		function getForecast(id)
		{ $scope.fore1=id;
			weatherSvc.forecast(id)
	.then(
		function(response){
			console.log(response);
		$scope.forecast=response.data.list;
		}, 
		function(err)
		{
			console.log("error loading current data",err);
		}
		)
		}

});
})();