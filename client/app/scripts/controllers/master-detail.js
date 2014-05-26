angular.module('brandid.states.demo')

.controller('MasterDetailController', ['$rootScope', '$location', '$scope', '$state', 'monsters', function($rootScope, $location, $scope, $state, monsters) {
    
  // this controller controls navigation, navigation animations, menu and master-detail layout




  // NB: there are a number of implementations for a menu. This one is not great, but simple enough to start with
  $scope.masterDetailCtrl = {
    // waiting on ui-router to support angular 1.2 dynamic animations properly, for now everything is 'crossfade'
    // https://github.com/angular-ui/ui-router/issues/320

    animate : "crossfade",
    collection: monsters,
    menu : [
      {
        title: "Angular Parse CRUD",
        icon: "icon-cloud",
        path: "#/",
        state: "demo.crud"

      },
      {
        title: "Angular Facebook API",
        icon: "icon-facebook",
        path: "#/facebook",
        state: "demo.facebook.example"
      },
      {
        title: "Parse Features",
        icon: "icon-bolt",
        path: "#/features/",
        state: "demo.features.list"

      },
      {
        title: "Other Features",
        icon: "icon-info-sign",
        path: "#/about/",
        state: "demo.about.list"

      }

    ],
    features : [
      {
        title: "Parse SDK for data, AngularJS for UI",
        icon: "icon-code",
        path: "#/features/data"
      },
      // {
      //   title: "Angular Wrapper for Parse SDK",
      //   icon: "icon-cloud",
      //   path: "#/features/parse"
      // },
      // {
      //   title: "Angular Wrapper for Parse Cloud Code",
      //   icon: "icon-cloud",
      //   path: "#/features/cloud-code"
      // },
      {
        title: "Angular Wrapper for Facebook SDK",
        icon: "icon-facebook-sign",
        path: "#/features/facebookSDK"
      },
      {
        title: "Extend Parse.Object & Parse.Collection",
        icon: "icon-terminal",
        path: "#/features/parse-sdk"
      },
      {
        title: "Parse SDK + Facebook SDK Load Performance",
        icon: "icon-time",
        path: "#/features/facebook"
      }

    ],

    about : [
      
      {
        title: "Angular State Manager",
        icon: "icon-sitemap",
        path: "#/about/state"
      },
      {
        title: "Angular Animations",
        icon: "icon-magic",
        path: "#/about/animations"
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

  

  $scope.goBackTo = function(state) {
    
    $state.transitionTo(state);
    // $scope.masterDetailCtrl.animate = { enter: 'waveForward-enter', leave: 'waveForward-leave' };
  }

  
  $scope.transitionBack = function() {
    // $scope.masterDetailCtrl.animate = "moveleft";

    var stateName = $state.current.name.split('.');
    stateName.pop(); // pop the current state
    var to = stateName.join('.')

    $state.transitionTo(to);
  }

  $scope.goForwardToPath = function(path) {

    // $scope.masterDetailCtrl.animate = "moveright";
    
    if(path.charAt(0) == '#') {
      // remove #
      path = path.substring(1);
    }

    $location.path(path);

  }

  $scope.transitionTo = function(stateName) {
    if ($state.current.name.indexOf(stateName) >= 0) {
      // same path, booty shake
      $rootScope.$broadcast('bootyShake');

    } else {

      $rootScope.setLoading();

      // set view animation
      if(stateName.indexOf($state.current.name) >= 0) {
        // $scope.masterDetailCtrl.animate = "moveright";
        $scope.masterDetailCtrl.animate = "crossfade";
      } else {
        $scope.masterDetailCtrl.animate = "crossfade";
      }

      $state.transitionTo(stateName);
    }

  }

  $scope.isActiveState = function(state) {

    if($state.current.name.indexOf(state) >= 0) {
      return 'white-back shadow-ninja right-light inset';
    } else {
      return
    }
  }


  $scope.createMonster = function() {
    // new up the model

    var f1Drivers = [
      'Sebastian Vettel',
      'Fernando Alonso',
      'Kimi Raikkonen',
      'Lewis Hamilton',
      'Mark Webber',
      'Nico Rosberg',
      'Felipe Massa',
      'Romain Grosjean',
      'Jenson Button',
      'Paul di Resta',
      'Nico Hulkenberg',
      'Adrian Sutil',
      'Sergio Perez',
      'Daniel Ricciardo',
      'Jean-Eric Vergne',
      'Pastor Maldonado',
      'Esteban Gutierrez',
      'Valtteri Bottas',
      'Jules Bianchi',
      'Charles Pic',
    ];

    var reasons = [
      'Because what the hell is a: "through button bias cut front and centre back box pleat with hanger loop, finished with mitred button cuffs, bias cut spade chest pocket, contrast lined back yoke and curved hem." - (bensherman.com)',
      'Missed the returns window? Fuck you very much.',
      'On mobile? Forget about it',
      'They know I\'m a dude, but they keep emailing me chicks shoes! WTF',
      'I don\'t even wanna think about dealing with customer support or the lack thereof',
      'I don\'t have to pay to try clothes on in a store, so why do I have to pay to try 2 different sizes online?',
      'Because I know I\'m gonna get screwed with the returns',
      'Paid $80 for a shirt that doesn\'t fit because I lost the returns form',
      'Because they\'re banking on me to screw up the returns',
      '"Oh sorry sir, didn\'t you read the terms? You pay return shipping and a 10% restocking fee"',
      'What happens if it doesn\'t fit?',
      'Why pay for shipping when I can go to the mall?'
    ];

    var randomNumber = Math.floor(Math.random()*f1Drivers.length);

    var randomNumber2 = Math.floor(Math.random()*reasons.length);

    $scope.masterDetailCtrl.collection.addMonster(f1Drivers[randomNumber], reasons[randomNumber2]).then(function() {

      alert('You created a new object for: ' + $scope.masterDetailCtrl.collection.first().get('name'));

    });

  }

  $scope.destroyMonster = function(monster) {
    monster.destroy().then(function() {
      alert('Destroyed model with destroy()')
      $state.transitionTo('demo.crud');
    });
  }


}]);