angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("app/test/e2e/runner.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <title>End2end Test Runner</title>\n" +
    "    <script src=\"../../../../components/angular-scenario/angular-scenario.js\" ng-autotest></script>\n" +
    "    <script src=\"scenarios.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  </body>\n" +
    "</html>\n"
  );

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
    "<div class=\"container med-grey-back dark-dust top-margin\">\n" +
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
    "<div class=\"row-fluid center-align\">\n" +
    "\t<h5 class=\"power\">App State</h5>\n" +
    "</div>\n" +
    "<pre>\n" +
    "$state = {{$state.current.name}}\n" +
    "$stateParams = {{$stateParams}}\n" +
    "</pre>"
  );

  $templateCache.put("app/views/demo.html",
    "<div ng-controller=\"MasterDetailController\">\n" +
    "\t\n" +
    "\t<div class=\"one-third light-dark-back shadow-ninja right-light inset\" style=\"height: 1500px\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid top-padding bottom-padding width-padding light-border-top light-border-bottom\">\n" +
    "\t\t\t<div ng-include src=\"'/app/views/debug.html'\"></div>\n" +
    "\t\t\t<!-- <h3 class=\"punchy\">Your Profile is {{profileCompletion | number:0 }}% Complete</h3> -->\n" +
    "\t\t\t<!-- <div class=\"row-fluid\">\n" +
    "\t\t\t\t<div class=\"large center-align row-fluid\">\n" +
    "\t\t\t\t\t<h1 class=\"power muted\"><i class=\"icon icon-user icon-large small-right-margin\"></i></h1>\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div> -->\n" +
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
    "\t\t\t<!-- <div ui-view=\"tip\"></div> -->\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"two-thirds\">\n" +
    "\t\t<div ui-view=\"detail\" class=\"relative\" ng-animate=\"animate()\"></div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("app/views/detail/about.list.bootstrap.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/about\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">SASS Twitter Bootstrap</h1>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-twitter small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "          \t<h4 class=\"punchy\">Because who actually uses LESS?</h4>\n" +
    "            \n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        <span class=\"muted\">We use <a href=\"https://github.com/thomas-mcdonald/bootstrap-sass\">sass-bootstrap</a> which is just a version of Bootstrap converted to SASS. </span>\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/about\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/about.list.font-awesome.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/about\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">Font Awesome</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-flag small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "          \t<h4 class=\"punchy\">Font Awesome is Awesome</h4>\n" +
    "            \n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        <span class=\"muted\">Anything with the word <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\">awesome</a> in its name better be pretty damn good. Luckily it is.</span>\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/about\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/about.list.html",
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\t\t<h1 class=\"punchy title trans\">About</h1>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-info-sign small-right-margin\"></i></h1>\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t\t\t<span class=\"muted\">We love Parse, Backbone.js and AngularJS. We hate servers.<br/><br/>Whilst building <a href=\"https://www.getbrandid.com\">getbrandid.com</a> we developed some best practices around this stack, so we decided to open source it here. We even talked about it on the <a target=\"_blank\" href=\"http://blog.parse.com/\">Parse Blog</a>.<br/><br/>This boilerplate is great for launching complex database enabled apps really fast. Let us know what we can improve via twitter!</span>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"row-fluid small-top-margin\">\n" +
    "\t\t\t\t<a href=\"https://twitter.com/spacenick\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @spacenick</a>\n" +
    "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> <a href=\"https://twitter.com/arush\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @arush</a>\n" +
    "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row-fluid white-back withShadow withRadius center-align\">\n" +
    "\t\t\t\n" +
    "\n" +
    "\t\t\t<a href=\"{{item.path}}\"\n" +
    "\t\t\t\tclass=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top line height-med\"\n" +
    "\t\t\t\tng-repeat=\"item in masterDetailCtrl.about\"\n" +
    "\t\t\t\tng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"\n" +
    "\t\t\t>\n" +
    "\t\t\t\t<div class=\"span11 muted left-align\">\n" +
    "\t\t\t\t\t<div class=\"med-width-padding\">\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-right-margin\">\n" +
    "\t\t\t\t\t\t\t<i class=\"icon {{item.icon}} icon-large muted small-right-margin\"></i><span class=\"small-left-margin punchy bold\">{{item.title}}</span> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"span1 muted pull-right\"><i class=\"icon icon-chevron-right\"></i></div>\n" +
    "\t\t\t</a>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/about.list.state.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/about\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">Angular State Manager</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-sitemap small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "          \t<h4 class=\"punchy\">Ui-router</h4>\n" +
    "            \n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        <span class=\"muted\">We use <span class=\"bold\"><a href=\"https://github.com/angular-ui/ui-router\">ui-router</a></span> instead of the core Angular router because it handles application states excellently, a lot like the <a href=\"http://emberjs.com/api/classes/Ember.Router.html\">Ember.Router</a>. This is important when building a large complex app, as you often need a better way to handle nested views, parent views and have the ability to override them depending on the application's state.</span>\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/about\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/about.list.theme.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/about\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">BRAND<span class=\"lowercase\">i</span>D UI Kit</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-tint small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "          \t<h4 class=\"punchy\">Master Detail Theme + OOCSS + SASS</h4>\n" +
    "            \n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        <span class=\"muted\">We developed a <a href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/styles/_brandid-ui.scss\">UI Kit</a> that augments Twitter Bootstrap with some awesome helper classes, animations and this master-detail theme you're looking at now.</span>\n" +
    "      <br/><br/>\n" +
    "        <span class=\"muted\">We subscribe to our friend <a href=\"http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/\">Ian Storm Taylor</a>'s philosophy of OOCSS + Sass, and our UI Kit is pretty flexible, so we hardly ever have to write ANY new classes when developing new features. This means our CSS filesize remains relatively constant.</span>\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/about\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
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
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/crud.detail.html",
    "<div class=\"row-fluid\" ng-controller=\"DetailController\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "\t\t<a class=\"navi-button-prev trans\" ng-click=\"goBackTo('demo.crud')\">\n" +
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
    "\t\t\t<a ng-click=\"destroyMonster(detailCtrl.current)\" class=\"btn btn-block btn-large btn-danger\">Delete this model</a>\t\t\t\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/crud.list.html",
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "\n" +
    "\t\t    <h1 class=\"punchy title trans\">CRUD</h1>\n" +
    "\n" +
    "\t\t<a ng-click=\"createMonster()\" class=\"navi-button trans\">\n" +
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
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/features.list.data.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/features\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">AngularJS & Backbone</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-heart small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "            <h4 class=\"power\">AngularJS + Backbone.js = <i class=\"icon icon-heart\"></i></h4>\n" +
    "            <span class=\"muted\">AngularJS for views, Backbone for models</span>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        The awesome thing about the Parse Javascript SDK is that it's a fork of Backbone, so we can make use of the kickass Model and Collection architecture, but still use AngularJS for all UI events and views (this is where Backbone loses out to other frameworks).<br/><br/>\n" +
    "\n" +
    "The best way to stay organised is to separate each Parse Object definition into a separate file in a <strong>data</strong> folder. Each definition is a factory of an overall Angular module we have called 'ExternalDataServices' which you'll see is first declared above in #2. Extending the 'ExternalDataServices' module with new factories is easy, just leave out the square brackets. Here's what our folder structure looks like with this architecture.<br/><br/>\n" +
    "<pre>|-- app\n" +
    "  |-- scripts\n" +
    "    |-- modules\n" +
    "      |-- data\n" +
    "        // this is where all your model definitions \n" +
    "        |-- Monster.js</pre>\n" +
    "And this is what a Parse Object definition would look like:<br/><br/>\n" +
    "\n" +
    "<strong><a target=\"_blank\" href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/modules/data/Monsters.js\">Monsters.js</a></strong>\n" +
    "\n" +
    "<pre>// Monster.js\n" +
    "\n" +
    "// reference the module we declared earlier\n" +
    "angular.module('ExternalDataServices')\n" +
    "\n" +
    "// add a factory\n" +
    ".factory('MonsterService', ['ParseQueryAngular', function(ParseQueryAngular) {\n" +
    "\n" +
    "  // use the extendAngular instead of just extend to gain enhanced Angular functionality\n" +
    "\n" +
    "  var Monster = Parse.Object.extendAngular({\n" +
    "    className:\"Monster\",\n" +
    "    setScaryMove: function(move) {\n" +
    "      this.set('scaryMove',move);\n" +
    "      return this;\n" +
    "    }\n" +
    "  });\n" +
    "  \n" +
    "\n" +
    "  // use the extendAngular instead of just extend to gain enhanced Angular functionality\n" +
    "\n" +
    "  var Monsters = Parse.Collection.extendAngular({\n" +
    "    model: Monster,\n" +
    "    loadMonstersWithMove: function(move) {\n" +
    "      this.query = (new Parse.Query(Monster));\n" +
    "\n" +
    "      // use the enhanced load() function to fetch the collection\n" +
    "      return this.load();\n" +
    "    }\n" +
    "  });\n" +
    "\n" +
    "  // Return a simple API : model or collection.\n" +
    "  return {\n" +
    "    model: Monster,\n" +
    "    collection: Monsters\n" +
    "  }\n" +
    "\n" +
    "}])</pre><br/>\n" +
    "Now wherever we need a Monster model or collection, like in the directive below, we can instantiate it using the MonsterService like this:<br/><br/>\n" +
    "<pre>// SomeDirective.js\n" +
    "\n" +
    "// inject the MonsterService into your directive\n" +
    "\n" +
    "angular.module('foo',[]).directive('bar',['MonsterService',function(\n" +
    "\n" +
    "  return {\n" +
    "    controller: ['$scope','$element','$attrs', function($scope, $element, $attrs) {\n" +
    "\n" +
    "      // new up a collection so we can use it to perform a query\n" +
    "      var monsters = new MonsterService.collection;\n" +
    "\n" +
    "      // perform the Parse.Query\n" +
    "      $scope.monsters = monsters.loadMonstersWithMove('fireBreath');\n" +
    "\n" +
    "      // and remember its a promise, so we can add synchronous logic here with a .then()\n" +
    "\n" +
    "    }\n" +
    "  }]\n" +
    "\n" +
    "}])</pre><br/>\n" +
    "A great side-effect of injecting your Parse data services only when you need it is that AngularJS's awesome dependency injection system knows when to remove this stuff from memory. Also, if you build your app in a modular way, in Angular 2.0 you will also be able to take advantage of lazy loading modules which will speed up the load-time of your app tremendously.\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/features\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/features.list.facebook.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/features\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">Parse & Facebook SDK</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-facebook-sign small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "            <h4 class=\"power\">Use a Promise to Init Parse.FacebookUtils</h4>\n" +
    "            <span class=\"muted\">Allowing you to Asynchronously Load the Parse SDK and the Facebook SDK</span>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        We all know that we should asynchronously load the Facebook SDK near the closing <span class=\"bold\">body</span> tag to speed up page loads. We load the Parse SDK here too instead of in the <span class=\"bold\">head </span>for the same reason. But if you try to<span class=\"bold\"> </span>asynchronously load the <span class=\"bold\">Parse SDK and Facebook SDK</span> you will run into the problem where Parse will try to call FB.init() at some point, and the FB object does not exist because the Facebook SDK has not yet loaded.\n" +
    "<br/><br/>\n" +
    "We developed an clever way to get around this. The key thing here is that Facebook calls a function <span class=\"bold\">window.fbAsyncInit</span> as soon as the SDK is finished loading. We use this to resolve the <span class=\"bold\">window.fbPromise</span>, which in turn is used to trigger <span class=\"bold\">Parse.FacebookUtils.init()</span>. This method is flawless, and you never get any out of sync errors. Here's the code to define the <span class=\"bold\">fbPromise</span>:<br/><br/>\n" +
    "<strong><a target=\"_blank\" href=\"https://github.com/brandid/parse-angular-demo/blob/master/index.html\">index.html</a></strong>\n" +
    "<pre>\n" +
    "\n" +
    "  var fbDeferred = $.Deferred();\n" +
    "  window.fbPromise = fbDeferred.promise();\n" +
    "  window.fbAsyncInit = function() {\n" +
    "    fbDeferred.resolve();\n" +
    "  };\n" +
    "\n" +
    "</pre>\n" +
    "\n" +
    "<br/>... and here's the code to subsequently trigger the init()<br/><br/>\n" +
    "<strong><a target=\"_blank\" href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/services/ParseServices.js\">ParseServices.js</a></strong>\n" +
    "<pre>\n" +
    "// FACEBOOK init\n" +
    "window.fbPromise.then(function() {\n" +
    "  Parse.FacebookUtils.init({\n" +
    "    appId: /*** FB APP ID ***/, \n" +
    "    channelUrl: /*** HTTP://YOURDOMAIN.COM/ ***/channel.html',\n" +
    "    cookie: true, // enable cookies to allow Parse to access the session\n" +
    "    xfbml: true, // parse XFBML\n" +
    "    frictionlessRequests: true // recommended\n" +
    "  });\n" +
    "});\n" +
    "</pre>\n" +
    "\n" +
    "Simple, elegant, highly effective.\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/features\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/features.list.html",
    "<div class=\"row-fluid\">\n" +
    "\t<div class=\"navi-bar-title dark trans\">\n" +
    "\t\t<h1 class=\"punchy title trans\">FEATURES</h1>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-bolt small-right-margin\"></i></h1>\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid bottom-margin\">\n" +
    "\t\t\t\t<div class=\"row-fluid center-align\">\n" +
    "\t\t\t\t\t<span class=\"muted\">Some best practices from our <a href=\"#\">guest blog post</a> on Parse.com</span>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row-fluid white-back withShadow withRadius center-align\">\n" +
    "\t\t\t\n" +
    "\n" +
    "\t\t\t<a href=\"{{item.path}}\"\n" +
    "\t\t\t\tclass=\"block row-fluid top-padding bottom-padding relative light-border-bottom white-border-top line height-med\"\n" +
    "\t\t\t\tng-repeat=\"item in masterDetailCtrl.features\"\n" +
    "\t\t\t\tng-animate=\"{ enter: 'waveForward-enter', leave: 'waveForward-leave' }\"\n" +
    "\t\t\t>\n" +
    "\t\t\t\t<div class=\"span11 muted left-align\">\n" +
    "\t\t\t\t\t<div class=\"med-width-padding\">\n" +
    "\t\t\t\t\t\t<div class=\"pull-left small-right-margin\">\n" +
    "\t\t\t\t\t\t\t<i class=\"icon {{item.icon}} icon-large muted small-right-margin\"></i><span class=\"small-left-margin punchy bold\">{{item.title}}</span> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"span1 muted pull-right\"><i class=\"icon icon-chevron-right\"></i></div>\n" +
    "\t\t\t</a>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\t\n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/features.list.parse-sdk.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/features\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">Extend Parse SDK</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-cogs small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "            <h4 class=\"power\">Give Parse AngularJS Superpowers</h4>\n" +
    "            <span class=\"muted\">Extending Parse.Object gives all your Parse data load() and save() methods auto wrapping them in AngularJS promises</span>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        With the simple code below, we beefed up all our Parse objects and collections with enhanced functionality, allowing us to save and load any Parse.Object or Parse.Collection inside the AngularJS digest with finesse.<br/><br/>\n" +
    "<strong><a target=\"_blank\" href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/services/ParseServices.js\">ParseServices.js</a></strong>\n" +
    "<pre>\n" +
    "  Parse.Object.extendAngular = function(options) {\n" +
    "    return ParseAbstractService.EnhanceObject(Parse.Object.extend(options));\n" +
    "  };\n" +
    "\n" +
    "  Parse.Collection.extendAngular = function(options) {\n" +
    "    return ParseAbstractService.EnhanceCollection(Parse.Collection.extend(options));\n" +
    "  };\n" +
    "</pre>\n" +
    "<br/>It doesn't take a genius to notice that this requires something we called ParseAbstractService, which is a simple bit of code that adds the Parse.Object and Parse.Collection methods.<br/><br/>\n" +
    "\n" +
    "<strong><a target=\"_blank\" href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/modules/data/_ParseObjects.js\">_ParseObjects.js</a></strong>\n" +
    "\n" +
    "<pre>angular.module('ExternalDataServices',[])\n" +
    ".factory('ParseAbstractService', ['ParseQueryAngular', function(ParseQueryAngular) {\n" +
    " /********\n" +
    " This service provides an enhanced Parse.Object and Parse.Collection\n" +
    " So we can call load and saveParse from any extending Class and have that wrapped\n" +
    " within ParseQueryAngular\n" +
    " **********/\n" +
    "\n" +
    "  var object = function(originalClass) {\n" +
    "    originalClass.prototype = _.extend(originalClass.prototype,{\n" +
    "      load:function() {\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"fetch\"});\n" +
    "      },\n" +
    "      saveParse:function(data) {\n" +
    "        if (data &amp;&amp; typeof data == \"object\") this.set(data);\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"save\", params:[null]});\n" +
    "      }\n" +
    "    });\n" +
    "   return originalClass;\n" +
    "  }\n" +
    "\n" +
    "  var collection = function(originalClass){\n" +
    "    originalClass.prototype = _.extend(originalClass.prototype,{\n" +
    "      load:function() {\n" +
    "        return ParseQueryAngular(this,{functionToCall:\"fetch\"});\n" +
    "      }\n" +
    "    });\n" +
    "    return originalClass;\n" +
    "  };\n" +
    "\n" +
    "  return {\n" +
    "    EnhanceObject:object,\n" +
    "    EnhanceCollection:collection\n" +
    "  }\n" +
    "}]);</pre><br/>\n" +
    "We can now make use of these new methods on any models or collections that extend Parse.Object.extendAngular or Parse.Collection.extendAngular, like so:<br/><br/>\n" +
    "<pre>// =============\n" +
    "// new way using enhanced Parse.Object\n" +
    "// =============\n" +
    "\n" +
    "var collection = new TestCollection();\n" +
    "collection.load();</pre><br/>\n" +
    "For a clearer idea of how much more awesome this is, below is the old way:<br/><br/>\n" +
    "<pre>// ============\n" +
    "// old way\n" +
    "// ============\n" +
    "\n" +
    "var collection = new TestCollection();\n" +
    "\n" +
    "var defer = $q.defer();\n" +
    "\n" +
    "// fetch all models\n" +
    "collection.fetch({\n" +
    "  success: function(result) {\n" +
    "    $rootScope.$apply(function() {\n" +
    "      defer.resolve(result);\n" +
    "  },\n" +
    "  error: function(error) {\n" +
    "    $rootScope.$apply(function() {\n" +
    "      defer.reject(error);\n" +
    "    }\n" +
    "  }\n" +
    "});\n" +
    "\n" +
    "defer.promise.then(function(data) {\n" +
    "\n" +
    "  collection = data;\n" +
    "  // now, finally the collection is ready to use in AngularJS\n" +
    "});</pre><br/>\n" +
    "Yuck! And you would have to repeat all that for every save or fetch!\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/features\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/detail/features.list.parse.html",
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"navi-bar-title dark trans\">\n" +
    "\n" +
    "    <a class=\"navi-button-prev trans\" href=\"#/features\">\n" +
    "      Back\n" +
    "    </a>\n" +
    "\n" +
    "        <h1 class=\"title trans\">Parse Angular Wrapper</h1>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\n" +
    "    <div class=\"row-fluid center-align\">\n" +
    "      <div class=\"row-fluid bottom-margin\">\n" +
    "        <h1 class=\"punchy muted light-text-shadow\"><i class=\"icon icon-cloud small-right-margin\"></i></h1>       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid white-back withShadow withRadius width-padding top-padding bottom-padding center-align\">\n" +
    "      \n" +
    "\n" +
    "      <div class=\"row-fluid\" >\n" +
    "        <div class=\"row-fluid bottom-margin\">\n" +
    "          <div class=\"row-fluid center-align\">\n" +
    "            <h4 class=\"power\">A Service to Wrap All Parse Calls</h4>\n" +
    "            <span class=\"muted\">Saving you from writing the same code over and over</span>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid left-align muted\">\n" +
    "        We really love AngularJS. However, you often hit the WTF ZONE of Angular, especially when you try to update scope variables outside of the \"Angular Kingdom\". Since all your data will be pulled in asynchronously from Parse, you'll run in to this issue pretty quickly.\n" +
    "\n" +
    "        <br/><br/>\n" +
    "        So we wrote <strong><a href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/services/ParseQueryAngular.js\">ParseQueryAngular</a></strong>, a simple AngularJS wrapper for the Parse JS SDK, saving gazillions of lines of code (at least), and we're also using deferred promises, because they're awesome. This allows you to call any Parse API method on any Parse.Object, pass in any parameters, and it wraps the result in a promise <em>inside</em> the \"Angular Kingdom\".\n" +
    "\n" +
    "Here's an example:<em></em><br/><br/>\n" +
    "<pre>ParseQueryAngular(Parse.FacebookUtils,{functionToCall:\"link\", params:[user, \"email,user_likes,publish_actions\"]})</pre>\n" +
    "        <br/>This single line of code calls Parse.FacebookUtils.link to connect the current Parse User with their Facebook account, and passes in some parameters for permissions and wraps the result in an AngularJS promise.\n" +
    "\n" +
    "        <br/><br/>If you're familiar with the Parse docs, you 'll notice something magical here: there is no need to write the same old success: and error: functions every time you make an API call to Parse.\n" +
    "\n" +
    "        <br/><br/>If you're familiar with AngularJS you'll also notice something magical here: the result of the API call is automatically wrapped into the AngularJS digest for use within your $scope. No need to do any<strong> $scope.$apply </strong>nonsense. Here's another example that we do all the time:<br/><br/>\n" +
    "<pre>var user = new Parse.User();\n" +
    "\n" +
    "user.set('username', 'spacenick');\n" +
    "user.set('password', 'sp4c3n1ck');\n" +
    "user.set('email','space@nick.com');\n" +
    "\n" +
    "ParseQueryAngular(user,{functionToCall:\"signUp\", params:[null]}).then(function(registeredUser) {\n" +
    "\n" +
    "    // since we know that the result will be inside the Angular digest, we make use of Angular's two-way data binding and automatically update all our views by simply updating the user object\n" +
    "\n" +
    "    user = registeredUser;\n" +
    "\n" +
    "    // we can even use it with Parse.Query\n" +
    "    var query = new Parse.Query(MyObject);\n" +
    "    query.include('myStuff').equalTo('someRandom','thing');\n" +
    "    return ParseQueryAngular(query);\n" +
    "}).then(function(queriedObj) {\n" +
    "\n" +
    "    // assuming $scope.obj is used elsewhere in the app, this would update any views automatically\n" +
    "    $scope.obj = queriedObj;\n" +
    "\n" +
    "    return queriedObj;\n" +
    "}, function(error) {\n" +
    "\n" +
    "    // any rejected promises in the chain will be caught here\n" +
    "    console.log(error);\n" +
    "\n" +
    "});</pre>\n" +
    "<br/>\n" +
    "Without ParseQueryAngular, doing two API calls one after the other would have been a nightmare of asynchronous spaghetti mess with lots of repetitive callback handling code. We just tamed it into a synchronous process and our AngularJS views would have been auto-updated every step of the way thanks to two-way data binding.\n" +
    "\n" +
    "<br/><br/>We also didn't need write any repetitive success: error: functions. This is the guts of creating a seamless Parse x Angular integration, we use this anytime we need talk to Parse. Check out the <strong><a href=\"https://github.com/brandid/parse-angular-demo/blob/master/app/scripts/services/ParseQueryAngular.js\">ParseQueryAngular</a></strong> source and read the code comments on how we did this.\n" +
    "\n" +
    "      </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"top-margin\">\n" +
    "      <a href=\"#/features\" class=\"btn btn-block btn-secondary btn-large\">Back</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row-fluid ani delay-3 fadeIn\" ng-include src=\"'app/views/footer.html'\"></div>"
  );

  $templateCache.put("app/views/footer.html",
    "<div class=\"row-fluid big-top-margin width-padding big-bottom-margin\">\n" +
    "\t<div class=\"muted white-back withShadow withRadius\">\n" +
    "\t\t<div class=\"row-fluid width-padding top-padding bottom-padding\">\n" +
    "\t\t\t<img src=\"http://brandid.s3.amazonaws.com/logo.png\" alt=\"BRANDiD Logo\" class=\"pull-left small-right-margin\" width=\"90px\"> If you found this useful, consider kicking shopping's ass at <a href=\"http://www.getbrandid.com\">getbrandid.com</a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );

  $templateCache.put("app/views/header.html",
    "<header class=\"row-fluid center-align\">\n" +
    "\t<div class=\"row-fluid top-margin\">\n" +
    "\t\t<h2 class=\"lightest-text text-shadow\" style=\"text-transform:none\">AngularJS x Backbone.js x Parse Boilerplate</h2>\t\n" +
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
    "\t\t\t\tAn opinionated, battle-tested boilerplate for building large, powerful, serverless apps with AngularJS, Backbone and Parse\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-text=\"Beautiful demo app using AngularJS x Backbone x @parseit by @BRANDiD\" data-related=\"male\" data-hashtags=\"javascript\">Tweet</a>\n" +
    "\t<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<hr>\n" +
    "\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t\t<a href=\"https://www.getbrandid.com\" class=\"\"><img src=\"http://brandid.s3.amazonaws.com/logo.png\" alt=\"BRANDiD Logo\" style=\"width:90px\"></a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"row-fluid\">\n" +
    "\t\t\t\t\tBuilt by dudes who would rather be coding than <a href=\"http://www.getbrandid.com\">shopping</a>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
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
    "\t\t<a href=\"{{menuItem.href}}\" class=\"muted line height-btn center-align menuItem\" ng-class=\"isActive(menuItem)\">\n" +
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
