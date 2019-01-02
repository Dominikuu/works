app.controller('controller', ['$scope','$http',function($scope, $http){

	$scope.messagelist = []
	$scope.addMessage = ()=>{

		if($scope.title == null){
			alert("請輸入標題")
			return
		}
		if($scope.message == null){
			alert("請輸入留言")
			return 
		}
		var message = new Object();
		message.title = $scope.title;
		message.message = $scope.message;

		$scope.messagelist.push(message);
		console.log($scope.messagelist)
		
	}
	$scope.del = index =>{
		$scope.messagelist.splice(index,1)
	}
}])