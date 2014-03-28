
angular.module('app')
.directive('bootyShake', ['$timeout', function($timeout) {
	return {
		link: function(scope, element, attrs) {
			scope.$on('bootyShake', function(ev) {
				element.addClass('ani shake ani-fast');
				$timeout(function() {
					element.removeClass('ani shake ani-fast');
				}, 400)
				// $element.removeClass('ani shake ani-fast');
			})
		}
	}
}])