// reference the module we declared earlier
angular.module('ExternalDataServices')

// add a factory
.factory('MonsterService', ['ParseQueryAngular', function(ParseQueryAngular) {

	var Monster = Parse.Object.extendAngular({
		className:"Monster",
		setName: function(name) {
			this.set('name',name);
			return this;
		},
		setReason: function(reason) {
			this.set('reason', reason);
			return this;
		},
		getName: function(name) {
			return this.get('name');
		},
		getReason: function(reason) {
			return this.get('reason');
		},
		destroyParse:function(){
			return ParseQueryAngular(this,{functionToCall:"destroy"});
		}
	});

	var Monsters = Parse.Collection.extendAngular({
		model: Monster,
		comparator: function(model) {
			return -model.createdAt.getTime();
		},
		loadMonstersWithName: function(name) {
			this.query = (new Parse.Query(Monster));
			this.query.equalTo('name', name);
			// use the enhanced load() function to fetch the collection
			return this.load();
		},
		addMonster: function(name, reason) {
	 		// save request_id to Parse
	 		var _this = this;

			var monster = new Monster;
			monster.setName(name);
			monster.setReason(reason);

			// use the extended Parse SDK to perform a save and return the promised object back into the Angular world
			return monster.saveParse().then(function(data){
				_this.add(data);
			})
	 	},
	 	removeMonster:function(monster) {
	 		if (!this.get(monster)) return false;
	 		var _this = this;
	 		return monster.destroyParse().then(function(){
	 			_this.remove(monster);
	 		});
	 	}
	});

	// Return a simple API : model or collection.
	return {
		model: Monster,
		collection: Monsters
	};

}]);