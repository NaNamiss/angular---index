/*店铺详情页*/
app.controller("shopdetails",function($scope,$routeParams,$http){
	$scope.pageName = '店铺详情页';
	$scope.shop_hashid = $routeParams.hashid;
	/*alert(111);*/

	/*店铺详情页的头部请求*/
	$http.get('/restapi/v4/restaurants/'+$routeParams.hashid,{
		params:{
			type:$scope.shop_hashid
		}
	}).then(function(res){
		console.log(res);
		$scope.name = res.data.name;
		/*$localStorage.setItem('$scope.name','res.data.name');*/

	})

	/*店铺详情页的菜单请求*/
	$http.get('/restapi/v4/restaurants/'+$routeParams.hashid+'/menu',{
		params:{}
	}).then(function(res){
		console.log(res);
		$scope.menu = res.data;
		$scope.change = function(index){
			$scope.foodlists = res.data[index].foods; 
			$scope.num = index;
			if(res.data[index].description == ""){
				$scope.news = res.data[index].name;
			}else{
				$scope.news = res.data[index].description;
			}
		}
		$scope.change(2);
	});
});
