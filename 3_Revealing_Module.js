//===============================================
// Revealing Module Pattern
myRevealingModule = (function(){
	var privateVar = "Edwin Gasparian",
		publicVar = "Hey there!"

	function privateFunction(){
		console.log("Name:" + privateVar)
	}

	function publicSetName(strName){
		privateVar = strName
	}

	function publicGetName(){
		privateFunction()
	}

	return {
		setName:publicSetName,
		greeting:publicVar,
		getName:publicGetName
	}
})()

myRevealingModule.setName('David Gasparian')

var myRevealingModule = (function(){
	
	var privateCounter = 0

	function privateFunction(){
		privateCounter++
	}

	function publicIncrement(){
		privateFunction()
	}

	function publicFunction(){
		publicIncrement()
	}

	function publicGetCount(){
		return privateCounter
	}

	return {
		start:publicFunction,
		increment:publicIncrement,
		count:publicGetCount
	}
})()

myRevealingModule.start()