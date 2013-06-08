angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("app/views/about.html",
    "<section class=\"jumbotron\">\n" +
    "  <h1>Welcome!</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    You're ready to start working on your next Parse AngularJS app!\n" +
    "  </p>\n" +
    "\n" +
    "  <a ng-click=\"createMonster()\" class=\"btn btn-secondary\">Create Monster</a>\n" +
    "  <br/>\n" +
    "  The New Monster ID is: {{ homeCtrl.monster.id }}\n" +
    "</section>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"npm packages span6\">\n" +
    "    <h3><a href=\"https://npmjs.org/\">NPM</a> Packages</h3>\n" +
    "\n" +
    "    <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"(module, version) in server.data.dependencies | orderBy:module\">\n" +
    "          <th>\n" +
    "            <a ng-href=\"https://npmjs.org/package/{{ module }}\">{{ module }}</a>\n" +
    "          </th>\n" +
    "          <td class=\"text-right\">\n" +
    "            {{ version }}\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"bower packages span6\">\n" +
    "    <h3><a href=\"http://bower.io/\">Bower</a> Packages</h3>\n" +
    "    <pre>\n" +
    "      \n" +
    "      {{ client.data.dependencies }}\n" +
    "\n" +
    "    </pre>\n" +
    "    <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"(module, version) in client.data.dependencies\">\n" +
    "          <th>\n" +
    "            {{ module }}\n" +
    "          </th>\n" +
    "          <td class=\"text-right\">\n" +
    "            {{ version }}\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("app/views/app-layout.html",
    "<div ui-view=\"subheader\"></div>\n" +
    "\n" +
    "<!-- <div ng-include src=\"'views/shopper/profile-subheader.html'\"></div> -->\n" +
    "\n" +
    "<div class=\"container med-grey-back dark-dust\">\n" +
    "\n" +
    "    <div class=\"med-grey-back dark-dust\">\n" +
    "\n" +
    "        <div class=\"row-fluid\">\n" +
    "\n" +
    "            <div class=\"span10-90 expands-phone\">\n" +
    "              <div ng-include src=\"'app/views/leftnav.html'\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"span90-10 contracts-phone light-back shadow-ninja left-dark right-dark hide-overflow\">\n" +
    "                <div ui-view=\"panel\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>      \n" +
    "</div>"
  );

  $templateCache.put("app/views/debug.html",
    "<div class=\"row-fluid\">\n" +
    "\t<h5 class=\"power\">State Machine</h5>\n" +
    "</div>\n" +
    "<pre>\n" +
    "  $state = {{$state.current.name}}\n" +
    "  $stateParams = {{$stateParams}}\n" +
    "</pre>"
  );

  $templateCache.put("app/views/demo.html",
    "<div ng-controller=\"MasterDetailController\">\n" +
    "\t\n" +
    "\t<div class=\"one-third light-dark-back shadow-ninja right-light inset\" style=\"height: 900px\">\n" +
    "\t\t<div class=\"row-fluid top-padding bottom-padding width-padding light-border-top light-border-bottom\">\n" +
    "\t\t\t<!-- <h3 class=\"punchy\">Your Profile is {{profileCompletion | number:0 }}% Complete</h3> -->\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<div class=\"large center-align row-fluid\">\n" +
    "\t\t\t\t\t<h1 class=\"power muted\"><i class=\"icon icon-user icon-large small-right-margin\"></i></h1>\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<!-- <div class=\"row-fluid tiny-top-margin progress progress-warning progress-striped active withShadow height-tiny\"> -->\n" +
    "\t\t\t  <!-- <div class=\"bar bar-success\" style=\"width: {{profileCompletion | number:0 }}%;\"></div> -->\n" +
    "\t\t\t<!-- </div> -->\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<!-- <div class=\"horizontal-line full-fade\"></div> -->\n" +
    "\n" +
    "\t\t<a  ng-click=\"transitionTo(item.state)\"\n" +
    "\t\t\thref=\"\"\n" +
    "\t\t\tclass=\"block light-back-hover width-padding row-fluid top-padding bottom-padding light-border-top light-border-bottom\"\n" +
    "\t\t\tng-class=\"isActiveState(item.state)\"\n" +
    "\t\t\tng-repeat=\"item in masterDetailCtrl.menu\"\n" +
    "\t\t>\n" +
    "\t\t\t<div class=\"span3 center-align\">\n" +
    "\t\t\t\t<h4 class=\"power muted no-height-margin line height-btn\">\n" +
    "\t\t\t\t\t<i class=\"icon {{item.icon}} small-right-margin\"></i>\n" +
    "\t\t\t\t</h4>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"span7\">\n" +
    "\t\t\t\t<h4 class=\"punchy muted no-height-margin line height-btn\">\n" +
    "\t\t\t\t\t{{item.title}}\n" +
    "\t\t\t\t</h4>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"span1 pull-right\">\n" +
    "\t\t\t\t<h4 class=\"muted no-height-margin line height-btn\"><i class=\"icon icon-chevron-right\"></i></h4>\n" +
    "\t\t\t</div>\n" +
    "\t\t</a>\n" +
    "\t\t\n" +
    "\t\t<div class=\"row-fluid width-padding top-margin\">\n" +
    "\t\t\t<div ui-view=\"tip\"></div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div> \n" +
    "\n" +
    "\t<div class=\"two-thirds\">\n" +
    "\t\t<div ui-view=\"detail\" class=\"relative\" ng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"></div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("app/views/detail/crud.detail.edit.html",
    "<div class=\"row-fluid\" ng-controller=\"DetailController\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "\t\t<a class=\"navi-button-prev trans\" href=\"#/crud/{{detailCtrl.current.id}}\">\n" +
    "\t\t\tBack\n" +
    "\t\t</a>\n" +
    "\n" +
    "\t\t    <h1 class=\"title trans\">Edit Monster</h1>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t<h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-user small-right-margin\"></i></h1>\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div id=\"loadingContainer\" class=\"relative row-fluid\">\n" +
    "\t\t\t<div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "\t\t\n" +
    "\t\t\t\t<div class=\"row-fluid left-align\">\n" +
    "\n" +
    "\t\t\t\t\t<form edit-monster-form monster-to-save=\"detailCtrl.current\" name=\"editForm\" class=\"form-horizontal\" ng-submit=\"saveMonster()\" novalidate>\n" +
    "\t\t\t\t\t  <div class=\"control-group\">\n" +
    "\t\t\t\t\t    <label class=\"control-label\" for=\"inputEmail\">Name</label>\n" +
    "\t\t\t\t\t    <div class=\"controls\">\n" +
    "\t\t\t\t\t      <input style=\"width:97%\" type=\"text\" ng-model=\"editedMonster.name\" placeholder=\"Email\" required>\n" +
    "\t\t\t\t\t    </div>\n" +
    "\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t  <div class=\"control-group\">\n" +
    "\t\t\t\t\t    <label class=\"control-label\" for=\"inputPassword\">Special Move</label>\n" +
    "\t\t\t\t\t    <div class=\"controls\">\n" +
    "\t\t\t\t\t      <input style=\"width:97%\" type=\"text\" ng-model=\"editedMonster.scaryMove\" required>\n" +
    "\t\t\t\t\t    </div>\n" +
    "\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t  <div class=\"control-group\">\n" +
    "\t\t\t\t\t    <div class=\"controls\">\n" +
    "\t\t\t\t\t      <button type=\"submit\" ng-disabled=\"editForm.$invalid\" class=\"btn btn-block btn-large btn-success\">Save To Parse</button>\n" +
    "\t\t\t\t\t    </div>\n" +
    "\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t</form>\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row-fluid\"></div>\n" +
    "\t\t\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n"
  );

  $templateCache.put("app/views/detail/crud.detail.html",
    "<div class=\"row-fluid\" ng-controller=\"DetailController\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "\t\t<a class=\"navi-button-prev trans\" href=\"#/crud\">\n" +
    "\t\t\t<i class=\"icon icon-th-list small-right-margin \"></i>List\n" +
    "\t\t</a>\n" +
    "\n" +
    "\t\t    <h1 class=\"title trans\">Monster Detail</h1>\n" +
    "\n" +
    "\t\t<a class=\"navi-button trans\" href=\"#/crud/{{detailCtrl.current.id}}/edit\">\n" +
    "\t\t\tEdit\n" +
    "\t\t</a>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t<h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-user small-right-margin\"></i></h1>\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "\t\t\t\n" +
    "\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t\t\t\t<h4 class=\"power\">Monster's Name</h4>\n" +
    "\t\t\t\t\t\t<span class=\"muted\">{{detailCtrl.current.get('name')}}</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\n" +
    "\t\t\t<div class=\"horizontal-line full-fade top-margin bottom-margin\"></div>\n" +
    "\t\t\t<h4 class=\"punchy\">Scary Move</h4>\n" +
    "\t\t\t<span class=\"muted\">{{detailCtrl.current.get('scaryMove')}}</span>\n" +
    "\t\t</div>\n" +
    "\t\n" +
    "\t\t<div class=\"row-fluid top-margin\">\n" +
    "\t\t\t<a ng-click=\"destroyModel()\" class=\"btn btn-block btn-large btn-danger\">Delete this model</a>\t\t\t\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n"
  );

  $templateCache.put("app/views/detail/crud.list.html",
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "\n" +
    "\t\t    <h1 class=\"punchy title trans\">CRUD</h1>\n" +
    "\n" +
    "\t\t<a ng-click=\"createMonster()\" class=\"navi-button trans\" href=\"#/shopper/profile/email\">\n" +
    "\t\t\t<i class=\"icon icon-plus\"></i>\n" +
    "\t\t</a>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-th-list small-right-margin\"></i></h1>\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t\t\t<h4 class=\"power\">Load Collections</h4>\n" +
    "\t\t\t\t\t<span class=\"muted\">Click the <i class=\"icon icon-plus-sign\"></i> up top to create a new model!</span>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row-fluid white-back withShadow withRadius center-align\">\n" +
    "\t\t\t\n" +
    "\n" +
    "\t\t\t<a href=\"#/crud/{{item.id}}\"\n" +
    "\t\t\t\tclass=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top line height-med\"\n" +
    "\t\t\t\tng-repeat=\"item in masterDetailCtrl.collection.models\"\n" +
    "\t\t\t\tng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"\n" +
    "\t\t\t>\n" +
    "\t\t\t\t<div class=\"span4 muted left-align\">\n" +
    "\t\t\t\t\t<div class=\"med-width-padding\">\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-right-margin\">\n" +
    "\t\t\t\t\t\t\t<span class=\"punchy bold\">Name:</span> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-left-margin\">\n" +
    "\t\t\t\t\t\t\t<span class=\"punchy\">{{item.get('name')}}</span>\n" +
    "\t\t\t\t\t\t</div>\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"span7 muted left-align\">\n" +
    "\t\t\t\t\t<div class=\"med-width-padding clearfix\">\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-right-margin\">\n" +
    "\t\t\t\t\t\t\t<span class=\"punchy bold\">Scary Move:</span> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-left-margin\">\n" +
    "\t\t\t\t\t\t\t<span class=\"punchy\">{{item.get('scaryMove')}}</span>\n" +
    "\t\t\t\t\t\t</div>\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"span1 muted pull-right\"><i class=\"icon icon-chevron-right\"></i></div>\n" +
    "\t\t\t</a>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n"
  );

  $templateCache.put("app/views/header.html",
    "<header class=\"row-fluid center-align\">\n" +
    "\t<div class=\"row-fluid top-margin\">\n" +
    "\t\t<h2 class=\"lightest-text text-shadow\" style=\"text-transform:none\">AngularJs x Backbone.js x Parse</h2>\t\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid small-top-margin\">\n" +
    "\t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=brandid&repo=parse-angular-demo&type=watch&count=true\"\n" +
    "  allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"110\" height=\"20\"></iframe>\n" +
    "  \t\t<iframe src=\"http://ghbtns.com/github-btn.html?user=brandid&repo=parse-angular-demo&type=fork&count=true\"\n" +
    "  allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"95\" height=\"20\"></iframe>\n" +
    "\n" +
    "  \t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid top-margin small-bottom-margin max-width-600\">\n" +
    "\t\t<div class=\"well muted withShadow\">\n" +
    "\t\t\t<div class=\"row-fluid small-bottom-margin\">\n" +
    "\t\t\t\tAn opinionated, battle-tested architecture for building powerful serverless apps with AngularJS, Backbone and Parse\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-text=\"Beautiful demo app using AngularJS x Backbone x @parseit by @BRANDiD\" data-related=\"male\" data-hashtags=\"javascript\">Tweet</a>\n" +
    "\t<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<hr>\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\tIf you found this useful, consider visiting <a href=\"http://www.getbrandid.com\">getbrandid.com</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid small-top-margin\">\n" +
    "\t\t\t\t<a href=\"https://twitter.com/spacenick\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @spacenick</a>\n" +
    "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> <a href=\"https://twitter.com/arush\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @arush</a>\n" +
    "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t\n" +
    "\t<a href=\"https://github.com/brandid/parse-angular-demo\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\" alt=\"Fork me on GitHub\"></a>\n" +
    "</header>"
  );

  $templateCache.put("app/views/leftnav.html",
    "<div class=\"\" ng-controller=\"MenuController\">\n" +
    "\t<!-- check out this ng-show condition, shows correct stuff for shoppers and everything in god mode -->\n" +
    "\t<div class=\"row-fluid top-margin {{menuItem.css}}\" ng-repeat=\"menuItem in menuCtrl.menu\">\n" +
    "\t\t<a href=\"#{{menuItem.path}}\" class=\"muted line height-btn center-align menuItem\" ng-class=\"isActive(menuItem)\">\n" +
    "\t\t\t<div class=\"row-fluid center-align dark-text text-shadow\">\n" +
    "\t\t\t\t<div class=\"line height-btn font-size-large\">\n" +
    "\t\t\t\t\t<i class=\"icon {{menuItem.icon}} icon-large\"></i>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"line height-btn row-fluid tichy\">\n" +
    "\n" +
    "\t\t\t\t\t<span class=\"muted uppercase small\">{{menuItem.name}}</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t</a>\n" +
    "\t</div>\n" +
    "</div>"
  );

  $templateCache.put("app/views/tips/crud-tips.html",
    "<div class=\"row-fluid\">\n" +
    "\t<h5 class=\"punchy\">How To CRUD:</h5>\n" +
    "</div>\n" +
    "<pre class=\"muted white-back left-align ani flash\">\n" +
    "// create\n" +
    "$scope.masterDetailCtrl.collection.addComment('Joe', 'exploding feces')\n" +
    "\n" +
    "// update\n" +
    "current.set('name', 'Bob');\n" +
    "ParseQueryAngular(current, {functionToCall:\"save\", params:[null]});\n" +
    "\n" +
    "// delete\n" +
    "ParseQueryAngular(current, {functionToCall:\"destroy\"});\n" +
    "</pre>"
  );

  $templateCache.put("app/views/tips/load-collections.html",
    "<div class=\"row-fluid\">\n" +
    "\t<h5 class=\"punchy\">How To Load Collections:</h5>\n" +
    "</div>\n" +
    "<pre class=\"muted white-back left-align ani flash\">\n" +
    "// get the collection from our data definitions\n" +
    "var Monsters = Monsterservice.collection;\n" +
    "\n" +
    "// new up a collection\n" +
    "$scope.masterDetailCtrl.collection = new Monsters;\n" +
    "\n" +
    "// use the extended Parse SDK to load the whole collection\n" +
    "$scope.masterDetailCtrl.collection.load();\n" +
    "</pre>"
  );

  $templateCache.put("app/views/welcome.html",
    "<div class=\"row-fluid\">\n" +
    "\ttest\n" +
    "</div>"
  );

}]);
