// we isolate our data module so we can reuse them independently
angular.module('brandid.models.Monsters', ['parse-angular.enhance'])
.run(function() {

	// --------------------------
	// Monster Object Definition
	// --------------------------

	// Under the hood, everytime you fetch a Monster object from Parse,
	// the SDK will natively use this extended class, so you don't have to 
	// worry about objects instantiation if you fetch them from a Parse query for instance

	var Monster = Parse.Object.extend({
		className:"Monster",
		// Extend the object with getter and setters  (see parse-angular-patch GitHub repo)
		attrs: ["name", "reason"]
	});


	// --------------------------
	// Monster Collection Definition
	// --------------------------
	var Monsters = Parse.Collection.extend({
		model: Monster,
		// We give a className to be able to retrieve the collection
		// from the getClass helper. See parse-angular-patch git repo
		className: "Monster",
		comparator: function(model) {
			return -model.createdAt.getTime();
		},
		loadMonstersWithName: function(name) {
			this.query = (new Parse.Query(Monster));
			this.query.equalTo('name', name);
			// use the enhanced load() function to fetch the collection
			return this.find();
		},
		addMonster: function(name, reason) {
	 		// save request_id to Parse
	 		var _this = this;

			var monster = new Monster;
			monster.setName(name);
			monster.setReason(reason);

			// perform a save and return the promised object back into the Angular world
			return monster.save().then(function(object){
				// here object === monster basically
				_this.add(object);
				return object;
			})
	 	},
	 	removeMonster:function(monster) {
	 		if (!this.get(monster)) return false;
	 		var _this = this;
	 		return monster.destroy().then(function(){
	 			_this.remove(monster);
	 		});
	 	}
	});


});