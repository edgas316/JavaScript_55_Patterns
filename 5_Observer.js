/*
	"One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."

	* Subject: maintains a list of observers, facilitates adding or removing observers
	* Observer: provides a update interface for objects that need to be notified of a Subject's changes of state
	* Concrete Subject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
	* Concrete Observer: stores a reference to the ConcreteSubject, implements an update interface for the Observer to 	
	  ensure state is consistent with the Subject's
*/

function ObserverList(){
	this.observerList = []
}

ObserverList.prototype = {
	add: function(obj){
		return this.observerList.push(obj)
	},
	count: function(){
		return this.observerList.length
	},
	get: function(index){
		if(index > -1 && index < this.observerList.length){
			return this.observerList[index]
		}
	},
	indexOf: function(obj, startIndex){
		var i = startIndex
		while(i < this.observerList.length){
			if(this.observerList[i] === obj){
				return i
			}
			i++
		}
		return -1
	},
	removeAt: function(index){
		this.observerList.splice(index, 1)
	}
}

function Subject(){
	this.observers = new ObserverList()
}

Subject.prototype = {
	addObserver: function(observer){
		this.observers.add(observer)
	},
	removeObserver: function(observer){
		this.observers.removeAt(this.observers.indexOf(observer, 0))
	},
	notify: function(context){
		var observerCount = this.observers.count()
		for(var i=0; i<observerCount; i++){
			this.observers.get(i).update(context)
		}
	}
}

// The Observer
function Observer(){
	this.update = function(){}
}

function extend(obj, extension){
	for(var key in extension){
		obj[key] = extension[key]
	}
}

// References to our DOM element
var controlCheckbox = document.getElementById('mainCheckbox'),
	addBtn = document.getElementById('addNewObserver'),
	container = document.getElementById('observersContainer')


// Concrete Subject
// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject())

controlCheckbox.onclick = function(){
	controlCheckbox.notify(controlCheckbox.checked)
}

addBtn.onclick = addNewObserver

// Concrete Observer
function addNewObserver(){
	var check = document.createElement('input')
	check.type = 'checkbox'

	extend(check, new Observer())

	check.update = function(value){
		this.checked = value
	}

	controlCheckbox.addObserver(check)
	container.appendChild(check)
}
//===================================================
// Publish/Subscribe Implementation
var pubSub = {}
(function(myObject){
	var topics = {},
		subUid = -1


	myObject.publish = function(topic, args){
		if(!topics[topic]){
			return false
		}

		var subscribers = topics[topic],
			len = subscribers ? subscribers.length : 0

		while(len--){
			subscribers[len].func(topic, args)
		}
		return this
	}

	myObject.subscribe = function(topic, func){
		if(!topics[topic]){
			topics[topic] = []
		}

		var token = (++subUid).toString()
		topics[topic].push({
			token:token,
			func:func
		})
		return token
	}
	myObject.unsubscribe = function(token){
		for(var m in topics){
			if(topics[m]){
				for(var i = 0; j = topics[m].length; i < j; i++){
					if(topics[m][i].token === token){
						topics[m].splice(i, 1)
						return token
					}
				}
			}
		}
		return this
	}

})(pubSub)

// Usage
var messageLogger = function(topics, data){
	console.log("Logging: " + topics + ": " + data)
}

var subscription = pubSub.subscribe("inbox/mewMessage", messageLogger)

pubsub.publish( "inbox/newMessage", "hello world!" );
 
// or
pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );
 
// or
pubsub.publish( "inbox/newMessage", {
	sender: "hello@google.com",
	body: "Hey again!"
});

pubSub.unsubscribe(subscription)
pubSub.publish('inbox/newMessage', "Hello! are you still there?")