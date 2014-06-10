# A Quickstart Boilerplate for Big AngularJS x Parse apps


An opinionated, battle-tested boilerplate for building large, powerful, serverless apps with AngularJS and Parse.



Built by guys who would rather be coding than [shopping](http://www.getbrandid.com)

------

### Live Demo and Documentation


<http://brandid.github.io/parse-angular-demo>


------
### Who is this for?
Maybe you're already using Parse for mobile and you need a web presence now too.

Maybe you’re an AngularJS beginner and you want to learn how big AngularJS apps are built.

Maybe you're already familiar with AngularJS or Backbone and you need a solid architecture that will scale nicely as your app scales.

Maybe you're at a hackathon, and you need to quickly launch a dynamic web app that requires user sessions and data storage.


------

### Why we made this

Thanks to [Mahmoud](https://twitter.com/mahmoudimus) from [Balanced](https://github.com/balanced) for the inspiration to be more open.

-------

We love [Parse](http://parse.com) and AngularJS. We hate servers. Whilst building [BRANDiD](http://www.getbrandid.com) we developed some best practices around this stack, so we decided to open source it here. We even talked about it on the [Parse Blog](http://blog.parse.com/2013/10/17/guest-post-parse-x-angular-js-boilerplate/).

This boilerplate is a quickstart for large, maintainable, database enabled AngularJS apps. Let us know what we can improve via twitter [@spacenick](http://www.twitter.com/spacenick) and [@arush](http://www.twitter.com/arush)!

------
### Features
* AngularJS wrapper for the **Parse JS SDK**
* AngularJS wrapper for **Cloud Code**
* AngularJS wrapper for the **Facebook API**
* Bootstrap 2.3.2 + HTML5BP
* Enhanced Parse.Object and Parse.Collection with `load()`, `saveParse()`, `destroyParse()`
* State Manager using [ui-router](https://github.com/angular-ui/ui-router)
* Resolve Parse Data Before State Changes for awesome UX e.g. `return collection.load()`
* Easy Animations on State Change
* Enhanced Load Performance of the Parse and Facebook SDKs
* Data Modules for Parse Models and Collections
* [Genesis-Skeleton](https://github.com/ericclemmons/genesis-skeleton) node / grunt setup for local development
* …and lots more

Read about all the features [here](http://brandid.github.io/parse-angular-demo/#/features)

------

### Installation Instructions

1. Install node - http://nodejs.org/
1. Install grunt v0.4.x - http://gruntjs.com/getting-started
1. Install bower `npm install -g bower`
1. Install coffee-script `npm install -g coffee-script`
1. Make sure you have compass installed (http://compass-style.org/install/)
1. Make sure you are running the latest version of Node (we can't assure you this is gonna work on older versions of Node)
1. Clone this repo `git clone git@github.com:brandid/parse-angular-demo.git`
1. Switch out your Parse keys in **ParseServices.js** (see below)
1. Switch out your Facebook App ID in **ParseServices.js**
1. Remove our [GoSquared](www.gosquared.com) tracking snippet from **index.html**
1. `cd parse-angular-demo`
1. `npm install`
1. `grunt server` - builds and fires up the local node server on localhost:3000
1. Visit http://localhost:3000 to develop your site
1. `grunt prod` to build a deployable version in the parse-angular-demo/build folder (`grunt prod` is actually `build` followed by `optimize`)

------
### Wire up your own Parse backend in seconds
##### [client/app/scripts/services/ParseServices.js](https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseServices.js)

    // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
    
    ...
    Parse.initialize("***APP ID***", "***JAVASCRIPT KEY***");
    ...

------
### Help / Knowledge base

Feel free to open an issue if you need help, check the [Wiki](https://github.com/brandid/parse-angular-demo/wiki/Knowledge-base) before to check what has been answered already!

------
### Performance
[BRANDiD](https://www.getbrandid.com/) regularly gets over 100 concurrent connections, and this architecture handles it with ease.

------

### Credits

[ericlemmons/genesis-skeleton](https://github.com/ericclemmons/genesis-skeleton) - server boilerplate

[daneden/animate.css](https://github.com/daneden/animate.css) - animations

[Bootstrap CDN](http://www.bootstrapcdn.com/) - Bootstrap hosting

------

### Contribute

* Angular Backbone bindings for easier forms with Parse SDK (60% complete - @spacenick)
* Better documentation/video on how to customise queries like ParseQueryTableViewController
* Convert to [grunt-takana](https://github.com/mechio/grunt-takana) instead of grunt-contrib-compass (too slow)
* Tests (help!)
* Upgrade to Bootstrap 3.0.x
* Docs and examples on User session handling
* Docs and examples on ACL to protect against [this](https://www.webniraj.com/2013/08/01/using-the-parse-javascript-sdk-be-careful/) Parse API design decision. For those who need to retrospectively protect their database, read [this thread](https://www.parse.com/questions/cant-update-user-acl-on-the-dashboard-cloud-code-w-master-key)
* Open source the BRANDiD [Customer.io](www.customer.io) Cloud Code module to securely trigger transactional emails with unlimited custom data (You cannot send large payloads with the Customer.io JS SDK)
* Include [AngularFirebasePatch](https://github.com/spacenick/angular-firebase-patch) for real-time support, which is our simple alternative to [AngularFire](www.angularfire.com)

------

### License
parse-angular-demo is licensed under the &#9786; license. (http://licence.visualidiot.com/)


------

### If you found this useful


![BRANDiD](https://d2asqqdjv2zbgw.cloudfront.net/logos/header-logo.png)

Next time you think of clothes,  think [BRANDiD - Shop. Like a Man](https://www.getbrandid.com).



* A dedicated expert shopper searches the ends of the earth just for you
* Try clothes from any ecommerce store in the world before you buy them, no commitment
* We ship and collect returns for free even if the retailer doesn't

Watch our TechCrunch Disrupt Battlefield Video [here](http://techcrunch.com/2013/09/10/dude-friendly-e-commerce-site-brandid-rolls-out-personal-shopping-for-guys-at-techcrunch-disrupt/)

