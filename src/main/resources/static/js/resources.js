angular.module('app')
	.factory('NewBlogEntry', ['$resource', function($resource) {
	  return $resource('/new/blog', {}, {
	    update: {method: 'PUT'}
	  });
}]);