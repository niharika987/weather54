(function(){
	angular.module("app.data").factory("weatherSvc",function($http, $q)
	{
		return{
			find:findbyloc,
			getCurr:getCurrent,
			forecast:getforecast
		}
		function findbyloc(location)
		{var defer= $q.defer();
			var url="https://api.openweathermap.org/data/2.5/find?appid=95dbe131cfa5c377b38b3846e4ebc618&q=" + location;
         	$http.get(url)
			.then(
				function(response){
					defer.resolve(response);
				},
			function(err){
				defer.reject(err);
			}
			);
			return defer.promise;
		}

		function getCurrent(id)
		{
			var defer=$q.defer();
			var url="https://api.openweathermap.org/data/2.5/weather?appid=95dbe131cfa5c377b38b3846e4ebc618&id=" + id;
			$http.get(url)
			.then(
				function(response){
					defer.resolve(response);
				},
				function(err){
					defer.reject(err);
				}
				);
			return defer.promise;

			
		}

		function getforecast(id)
		{
			var defer=$q.defer();
			//var url="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=95dbe131cfa5c377b38b3846e4ebc618&id=" + id;
			var url="https://api.openweathermap.org/data/2.5/forecast?appid=95dbe131cfa5c377b38b3846e4ebc618&id=" + id;
			
			$http.get(url)
			.then(
				function(response){
					defer.resolve(response);
				},
				function(err){
					defer.reject(err);
				}
				);
			return defer.promise;

			
		}
	});
}());