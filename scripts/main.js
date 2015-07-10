(function() {
	angular.module('YAppApp', ['infinite-scroll'])
		.controller('YAppCtrl', function ($scope) {

			var pageDataSize = 2,
				first = 0;

			$scope.displayData = data.slice(first, pageDataSize);

			$scope.getNewItems = function() {
				first += pageDataSize;
				var newArray = data.slice(first, first + pageDataSize);
				$scope.displayData = $scope.displayData.concat(newArray);
			}
		});
})()
