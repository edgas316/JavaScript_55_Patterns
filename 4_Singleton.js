//================================
// Singleton Pattern
var mySingleton = (function(){
	var instance

	function init(){
		// Singleton

		function privateMethond(){
			console.log("I am private")
		}

		var privateVariable = "I'm also private",
			privateRandomNumber = Math.random()

		return {
			publickMethod:function(){
				console.log('The public can see me!')
			},
			publicProperty: "I am also public",

			getRandomNumber: function(){
				return privateRandomNumber
			}
		}
	}

	return {
		// get the singleton instance if one exists
		// or create one if it doesn't

		getInstance:function(){
			if(!instance){
				instance = init()
			}
			return instance
		}
	}
})()
// Usage
var singleA = mySingleton.getInstance()
var singleB = mySingleton.getInstance()
console.log(singleA.getRandomNumber() == singleB.getRandomNumber()) // will always give true

// one more example 
var SingletonTester = (function(){
	function Singleton(options){
		options = options || {}

		this.name = "SingletonTester"
		this.pointX = options.pointX || 6
		this.pointY = options.pointY || 10
	}

	var instance

	var _static = {
		name: "SingletonTester",
		getInstance: function (options) {
			if(instance === undefined){
				instance = new Singleton(options)
			}
			return instance
		}
	}
	return _static
})()

var singletonTest = SingletonTester.getInstance({pointX:5})

console.log(singletonTest.pointX)