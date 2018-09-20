(function(){
angular.module("app.component").directive("neSearchBox",function(){
return{
	templateUrl:"app/component/search-form.html",
	controller:searchboxfun
}
});
function searchboxfun($scope)
{
$scope.search=function(searchStr){
$scope.$emit("search",{ str:searchStr });
}

}
})();