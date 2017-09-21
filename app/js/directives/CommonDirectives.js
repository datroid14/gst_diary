gstDiary.directive('restrictToDigits', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var re = RegExp(attrs.restrictToDigits);
			var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

			element[0].addEventListener('keydown', function (event) {
				if (!exclude.test(event.key) && !re.test(event.key)) {
					event.preventDefault();
				}
			});
		}
	}
});

gstDiary.directive('loadingBar', function () {
	return {
		restrict: 'A',
		replace: true,
		template: '<div>dsgd dhhxdt</div>', // Define a template where the image will be initially loaded while waiting for the ajax request to complete
		link: function (scope, element, attr) {
			scope.$watch('loadingBar', function (val) {
				val = val ? $(element).show() : $(element).hide();  // Show or Hide the loading image   
			});
		}
	}
});