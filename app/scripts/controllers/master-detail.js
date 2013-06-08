angular.module('demo')

.controller('MasterDetailController', ['$rootScope', '$scope', '$state', 'MonsterService', function($rootScope, $scope, $state, MonsterService) {
  
  $scope.masterDetailCtrl = {
    animate : { enter: 'waveForward-enter', leave: 'waveForward-leave' },
    menu : [
      {
        title: "CRUD Example",
        icon: "icon-th-list",
        path: "#/",
        state: "demo.crud"

      },
      {
        title: "Features",
        icon: "icon-bolt",
        path: "#/features/",
        state: "features.list"

      },
      {
        title: "About",
        icon: "icon-info-sign",
        path: "#/about/",
        state: "about.list"

      }

    ],
    features : [
      {
        title: "Parse & Facebook SDK",
        icon: "icon-facebook-sign",
        path: "#/features/facebook"
      },
      {
        title: "Angular Wrapper for Parse API calls",
        icon: "icon-cloud",
        path: "#/features/parse"
      },
      {
        title: "Extend Parse SDK for Angular Promises",
        icon: "icon-cogs",
        path: "#/features/parse-sdk"
      },
      {
        title: "Use Backbone for Models & Collections",
        icon: "icon-heart",
        path: "#/features/data"
      },

    ],

    about : [
      
      {
        title: "Angular State Manager",
        icon: "icon-sitemap",
        path: "#/about/state"
      },
      {
        title: "BRANDiD UI Kit",
        icon: "icon-tint",
        path: "#/about/theme"
      },
      {
        title: "SASS Bootstrap",
        icon: "icon-twitter",
        path: "#/about/bootstrap"
      },
      {
        title: "Font Awesome",
        icon: "icon-flag",
        path: "#/about/font-awesome"
      }

    ]


  };

  // get the collection from our data definitions
  var Monsters = MonsterService.collection;

  // new up a collection
  $scope.masterDetailCtrl.collection = new Monsters;

  // use the extended Parse SDK to load the whole collection
  $scope.fetchMonstersPromise = $scope.masterDetailCtrl.collection.load();


  $scope.animate = function() {

    // TODO: make this go backwards for back buttons
    return { enter: 'waveForward-enter', leave: 'waveForward-leave' };
    // return { enter: 'waveBackward-enter', leave: 'waveBackward-leave' };
  }

  $scope.goBackTo = function(state) {
    
    $state.transitionTo(state);
    // $scope.masterDetailCtrl.animate = { enter: 'waveForward-enter', leave: 'waveForward-leave' };
  }

  $scope.transitionTo = function(state) {
    $state.transitionTo(state);
  }

  $scope.isActiveState = function(state) {

    if($state.current.name.indexOf(state) >= 0) {
      return 'light-back';
    } else {
      return
    }
  }



  $scope.createMonster = function() {
    // new up the model
    $scope.masterDetailCtrl.collection.addMonster('Joe', 'exploding feces').then(function() {

      alert('OMG you created a monster named: ' + $scope.masterDetailCtrl.collection.last().get('name'));

    });

  }

  $scope.destroyMonster = function(monster) {
    monster.destroyParse().then(function() {
      alert('Destroyed model with destroyParse()')
      $state.transitionTo('demo.crud');
    });
  }


}]);