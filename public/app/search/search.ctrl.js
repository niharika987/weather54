(function()
{
	angular.module("app.search").controller("Search",function($scope,weatherSvc){
		$scope.cities=null;
		$scope.$on("search",search);

		function search(evt,dat)
		{
			console.log(dat.str);
			weatherSvc.find(dat.str)
			.then(
				function(response){
					$scope.cities=response.data.list;
					console.log(response.data.list);
				},
				function(err)
				{
					console.log("error finding cities",err);			
					}	
				
				)
		}

});
})();