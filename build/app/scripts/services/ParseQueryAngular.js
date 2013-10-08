angular.module('ParseServices')

.factory('ParseQueryAngular',['$q','$timeout',function ($q, $timeout) { 


  // we use $timeout 0 as a trick to bring resolved promises into the Angular digest
  var angularWrapper = $timeout;

	return function(query,options) {

      // if unspecified, the default function to call is 'find'
      var functionToCall = "find";
      if (!_.isUndefined(options) && !_.isUndefined(options.functionToCall)) {
        functionToCall = options.functionToCall;
      }

      // create a promise to return
      var defer = $q.defer();
      
      // this is the boilerplate stuff that you would normally have to write for every Parse call
      var defaultParams = [{
        success:function(data) {

          /* We're using $timeout as an "angular wrapper" that will force a digest
          * and kind of bring back the data in Angular realm.
          * You could use the classic $scope.$apply as well but here we don't need
          * to pass any $scope as a parameter.
          * Another trick is to inject $rootScope and use $apply on it, but well, $timeout is sexy.
          */
          angularWrapper(function(){
            defer.resolve(data);
          });
        },
        error:function(data,err) {
          angularWrapper(function(){
            defer.reject(err);
          });
        }
      }];
      // Pass custom params if needed.
      if (options && options.params) {
        defaultParams = options.params.concat(defaultParams);
      }
      if (options && options.mergeParams) {
        defaultParams[0] = _.extend(defaultParams[0],options.mergeParams);
      }

      // this is where the async call is made outside the Angular digest
      query[functionToCall].apply(query,defaultParams);

      return defer.promise;

    };

}]);