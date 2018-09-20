(function(){
	angular.module("app.weather").controller("Weather",function($scope,$routeParams,weatherSvc){
		$scope.current=null;
		$scope.getTime=getTime;
		if($routeParams.id!==undefined)
		{
			getCurrnt($routeParams.id);
		}

function getCurrnt(id)
{
	weatherSvc.getCurr(id)
	.then(
		function(response){
			console.log(response);
		$scope.current=response;
		}, 
		function(err)
		{
			console.log("error loading current data",err);
		}
		)
}
function getTime(dt)
{
	return new Date(dt*1000);
}

	});

})();