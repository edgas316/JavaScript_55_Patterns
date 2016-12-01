// Constructior Pattern
var newObject = {}
//newObject.someKey = "hello world"
//var value = newObject.someKey
//// or
//Object.defineProperty(newObject, "newKey", {
//    value:"for more control the property's behavior",
//    writable:true,
//    enumerable:true,
//    configurable:true
//});
// or
var defineProp = function(obj, key, value){
    var config = {
        value:value,
        writable:true,
        enumerable:true,
        configurable:true        
    };
    Object.defineProperty(obj, key, config)
}
var person = Object.create(Object.prototype)
defineProp(person, "car", "Delorean")
defineProp(person, "dateOfBirth", "1981")
defineProp(person, "hasBeard", false)
console.log(person)// Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

var driver = Object.create(person)
defineProp(driver, "topSpeed", "100pmh")
console.log(driver.dateOfBirth)
console.log(driver.topSpeed)

// Module Pattern
var testModule = (function(){
    var counter = 0
    return {
        incrementCounter:function(){
            return counter++
        },
        resetCounter:function(){
            console.log("counter value prior to reset: " + counter)
            cpunter = 0
        }
    }
})();

testModule.incrementCounter()
testModule.resetCounter()

//==============================
var myNamespace = (function(){
    var myPrivateVar, myPrivateMethod
    
    myPrivateVar = 0
    myPrivateMethod = function(foo){
        console.log(foo)
    }
    return {
        myPublicVar: "foo",
        myPublicFunction:function(bar){
            myPrivateVar++
            myPrivateMethod(bar)
        }
    }
})();

//===================================
var basketModule = (function(){
    var basket = []
    function doSomethingPrivate(){}
    function doSomeMotePrivate(){}
    
    return {
        addItem:function(values){
            basket.push(values)
        },
        getItem:function(){
            return basket
        },
        getItemCunt: function(){
            return basket.length
        },
        doSomething:doSomethingPrivate,
        getTotal:function(){
            var q = this.getItemCunt(),
                p = 0
            while(q--){
                p += basket[q].price
            }
            return p;
        }
    }
})();
basketModule.addItem({
    item:"TV set",
    price:500.99
});
basketModule.addItem({
    item:"SotyPS",
    price:499.99
});

console.log(basketModule.getItemCunt())
console.log(basketModule.getTotal())


// === Module Pattern Variations === \\

// Import mixins
// Global module...
var myImportModule = (function(jQ, _){
    function privateMethod1(){
        jQ(".container").html("test")
    }
    
    function privateMethod2(){
        console.log(_.min([10, 5, 100, 2, 1000]))
    }
    
    return {
        publicMethod:function(){
            privateMethod1()
            privateMethod2()
        }
    }
// Pull in jQuery and UNderscore
})(jQuery, _)

myImportModule.publicMethod()
console.log(jQuery())

// Exports
var myExportModule = (function(){
    
    // Module object
    var module = {},
        privateVariable = "Hello World";
    
    function privateMethod(){}
    
    module.publicProperty = "Foobar";
    module.publicMethod = function(){
        console.log(privateVariable)
    }
    return module
})();

// Revealing Module Pattern
var myRevealingModule = (function(){
    var privateVar = "Edwin Gasparian",
        publicVar = "Hey There!";
    
    function privateFunction(){
        console.log("Name: " + privateVar)
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
    };
})();

myRevealingModule.setName("Marine Gabrielyan")
myRevealingModule.getName()// Name: Marine Gabrielyan

var myRevealingModule2 = (function(){
    var privateCounter = 0;
    
    function privateFunction(){
        privateCounter++
    }
    
    function publicFunction(){
        publicIncrement()
    }
    
    function publicIncrement(){
        privateFunction()
    }
    
    function publicGetCount(){
        return privateCounter
    }
    
    return {
        start:publicFunction,
        increment:publicIncrement,
        count:publicGetCount
    };
})();
myRevealingModule2.start()

// The singleton Pattern
var mySingleton = (function(){
    var instance;
    function init(){
        // Singleton
        
        // Private methods and variables
        function privateMethod(){
            console.log("I am private")
        }
        
        var privateVar = "I'm also private"
        var privateRundomNumber = Math.random()
        
        return {
            // Public methods and variables
            publicMehtod: function(){
                console.log("I am public and you can see me")
            },
            publicProperty:"I am public property",
            getRundomNumber: function(){
                return privateRundomNumber
            }
        }
    }
    
    return {
        // Get the singleton instance if one exists
        // Or create one if doesn't
        getInstance:function(){
            if(!instance){
                instance = init()
            }
            return instance
        }
    }
})()

var singleA = mySingleton.getInstance()
var singleB = mySingleton.getInstance()
console.log(singleA.getRundomNumber() === singleB.getRundomNumber())



































