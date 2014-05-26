angular.module('brandid.directives.forms', [])

.directive('editMonsterForm', ['$location', function($location) {

  var addLoaderTo = function(element, name, message) {
    element.append('<div id="'+name+'" class="important-white-back opacity-9 loading absolute top" style="width:100%; height:100%;"><div class="v-outer-container" style="height: 100%"><div class="v-inner-container"><div class="v-aligned-content big-top-margin"><span class="muted">' + message + '</span></div></div></div></div>');
  }

  return {
    restrict: 'A',
    scope: {
      monsterToSave: "="
    },
    transclude: true,
    templateUrl: "app/scripts/modules/directives/templates/editMonsterForm.html",
    link: function(scope, element, attrs) {

      // need to put a watch here because directive is loaded but Parse promise is not finished loading the monsters yet

      scope.editedMonster = {
        name: null,
        reason: null
      };

      scope.$watch('monsterToSave.attributes.name', function(name) {
        scope.editedMonster.name = name;
      });

      scope.$watch('monsterToSave.attributes.reason', function(reason) {
        console.log(reason);
        scope.editedMonster.reason = reason;
      });
      

      scope.saveMonster = function() {

        // put the form in a loading state
        var loadingContainer = $('#loadingContainer');
        addLoaderTo(loadingContainer, 'savingForm', 'Saving');
        element.find('button').attr('disabled','disabled');

        // set the new attributes
        scope.monsterToSave.setName(scope.editedMonster.name);
        scope.monsterToSave.setReason(scope.editedMonster.reason);

        // perform the save
        scope.monsterToSave.save().then(function(monster) {

          //remove the loader
          $('#savingForm').remove()

          $location.path('/crud/' + monster.id);

        }, function(err) {
          // catch any errors
          alert('Error saving to Parse, check the console and network tab')
          console.log(err)
        });


      }

      // need to do stuff to the element when it is clicked
    }
  }
}])

