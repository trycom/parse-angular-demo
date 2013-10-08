angular.module('FacebookPatch', [])
.factory('FacebookAngularPatch',function ($q, $timeout) { 

  var fbApiAngular = function() {

    var params = [].splice.call(arguments, 0);
    var defer = $q.defer();
    var angularWrap = $timeout;

    window.fbPromise.then(function(){
      
      // Pushing callback function that will resolve to the params array
      params.push(function(response){
        if (!_.isUndefined(response.error)) {
          angularWrap(function(){
            defer.reject(response.error);
          });
          return;
        }

        angularWrap(function(){
          defer.resolve(response);
        });
      });

      FB.api.apply(FB, params);  

    });

    return defer.promise;
  };


  // using the fbPromise we set up in index.html, we extend the FB SDK with FB.apiAngular
  // now we use FB.apiAngular instead of FB.api, which gives us an angular wrapped promise

  window.fbPromise.then(function(){
    FB.apiAngular = fbApiAngular;
  });



});