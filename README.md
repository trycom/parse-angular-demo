# A Quickstart Boilerplate for Big AngularJS x Parse apps


An opinionated, battle-tested boilerplate for building large, powerful, serverless apps with AngularJS and Parse.

Built by guys who would rather be coding than [shopping](http://www.getbrandid.com)

------

### Live Demo and Documentation


<http://brandid.github.io/parse-angular-demo>


------

### Why we made this

Thanks to [Mahmoud](https://twitter.com/mahmoudimus) from [Balanced](https://github.com/balanced) for the inspiration to be more open.

-------

We love [Parse](http://parse.com) and AngularJS. We hate servers. Whilst building [BRANDiD](http://www.getbrandid.com) we developed some best practices around this stack, so we decided to open source it here. We even talked about it on the [Parse Blog](http://blog.parse.com).

This boilerplate is a quickstart for large, maintainable, database enabled AngularJS apps. Let us know what we can improve via twitter [@spacenick](http://www.twitter.com/spacenick) and [@arush](http://www.twitter.com/arush)!

------

### Get Started
##### node v0.10.x, grunt v0.4.x

    git clone git@github.com:brandid/parse-angular-demo.git
    npm install
    bower install
    grunt server

------
### Wire up your own Parse backend in seconds
##### [client/app/scripts/services/ParseServices.js](https://github.com/brandid/parse-angular-demo/blob/master/client/app/scripts/services/ParseServices.js)

    // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
    
    ...
    Parse.initialize("***APP ID***", "***JAVASCRIPT KEY***");
    ...

------
### Features
* AngularJS wrapper for the **Parse JS SDK**
* AngularJS wrapper for **Cloud Code**
* AngularJS wrapper for the **Facebook API**
* Enhanced Parse.Object and Parse.Collection with `load()`, `saveParse()`, `destroyParse()`
* State Manager using [ui-router](https://github.com/angular-ui/ui-router)
* Resolve Parse Data Before State Changes for awesome UX e.g. `return collection.load()`
* Easy Animations on State Change
* Enhanced Load Performance of the Parse and Facebook SDKs
* Data Modules for Parse Models and Collections
* …and lots more


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

* Tests (help!?)
* Guidance on User object creation / ACL to protect against [this](https://www.webniraj.com/2013/08/01/using-the-parse-javascript-sdk-be-careful/) Parse API design decision. For those who need to retrospectively protect their database, read [this thread](https://www.parse.com/questions/cant-update-user-acl-on-the-dashboard-cloud-code-w-master-key)
* Open source the BRANDiD [Customer.io](www.customer.io) Cloud Code module to securely trigger transactional emails with unlimited custom data (You cannot send large payloads with the Customer.io JS SDK)
* Include [AngularFirebasePatch](https://github.com/spacenick/angular-firebase-patch) for real-time support, which is a simple alternative to [AngularFire](www.angularfire.com)

------

### License
parse-angular-demo is licensed under the &#9786; license. (http://licence.visualidiot.com/)


------

### If you found this useful


![BRANDiD](https://d2asqqdjv2zbgw.cloudfront.net/logos/header-logo.png)

Next time you think of clothes,  think BRANDiD - Shop. Like a Man.



* A dedicated expert shopper searches the ends of the earth just for you
* Try clothes from any ecommerce store in the world before you buy them, no commitment
* We ship and collect returns for free even if the retailer doesn't

Watch our TechCrunch Disrupt Battlefield Video [here](http://techcrunch.com/2013/09/10/dude-friendly-e-commerce-site-brandid-rolls-out-personal-shopping-for-guys-at-techcrunch-disrupt/)

