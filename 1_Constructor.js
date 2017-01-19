//=========================================================
// Object creation
var newObj = {}//or
var newObj = Object.create(Object.prototype)//or
var newObj = new Object()
// to assogne key and value to the object
newObj.someKey = "Hello"
newObj['someKey'] = 'Hello'
Object.defineProperty(newObj, 'someKey',{
    value: `for more control of the property's behavior`,
    writable:true,
    enumerable:true,
    configurable:true
})
// or
var defineProp = function(obj, key, value){
    var config = {
        value:value,
        writable:true,
        enumerable:true,
        configurable:true
    }
    Object.defineProperty(obj, key, config)
}// usage
var person = {}
defineProperty(person, 'car', 'Ferrary')
// or
Object.defineProperties(newObj, {
    'someKey':{
        value:"hi",
        writable:true
    },
    'anotherKey':{
        value:'By',
        writable:false
    }
})
// usage
var driver = Object.create(person)
defineProperty(driver, "topSpeed", "260mph")
driver.topSpeed // 260mph
driver.car // Ferrary  - from prototype

//============================================
// Basic Constructors
function Car(model, year, miles){
    this.model = model
    this.year = year
    this.miles = miles

    this.toString = function(){
        return `${this.model} has done ${this.miles} miles`
    }
}

var civic = new Car("Honda Civic", 1009, 20000)
var mondeo = new Car("Ford Mondeo", 2010, 5000)

//============================================
// Constructors with Prototypes
function Car(model, year, miles){
    this.model = model
    this.year = year
    this.miles = miles
}

Car.prototype.toString = function(){
    return `${this.model} has done ${this.miles} miles`
}

var civic = new Car("Honda Civic", 1009, 20000)
var mondeo = new Car("Ford Mondeo", 2010, 5000)