function Car(options){
	this.doors = options.doors || 4
	this.state = options.state || 'brand new'
	this.color = options.color || 'silver'
}

function Truck(options){
	this.state = options.state || 'used'
	this.wheelSize = options.wheelSize || 'large'
	this.color = options.color || 'blue'
}

function VehicleFactory(){}
VehicleFactory.prototype.vehicleClass = Car

VehicleFactory.prototype.createVehicle = function(options){
	switch(options.vehicleType){
		case 'car':
			this.vehicleClass = Car
			break
		case 'truck':
			this.vehicleClass = Truck
			break
	}
	return new this.vehicleClass(options)
}

var carFactory = new VehicleFactory()
var car = carFactory.createVehicle({ 
	vehicleType:'car',
	color:'yellow',
	doors:6
})

console.log(car instanceof Car)
console.log(car)

var movingTruck = carFactory.createVehicle({
	vehicleType:'truck',
	state: 'like new',
	color: 'red',
	wheelSize: 'small'
})

console.log(movingTruck instanceof Truck)
console.log(movingTruck)
// OR
function TruckFactory(){}
TruckFactory.prototype = new VehicleFactory()
TruckFactory.prototype.vehicleClass = Truck

var truckFactory = new TruckFactory()
var myBigTruck = truckFactory.createVehicle({
	state:'omg..so bad',
	color: 'pink',
	wheelSize: 'so big'
})

console.log(myBigTruck instanceof Truck)
console.log(myBigTruck)

//=================================================
// Abstract Factories
var abstractVehicleFactory = (function(){
	// Storage for our vehicle types
	var types = {}

	return {
		getVehicle: function(type, customizations){
			var Vehicle = types[type]
			return (Vehicle ? new Vehicle(customizations) : null)
		},

		registerVehicle: function(type, Vehicle){
			var proto = Vehicle.prototype
			if(proto.drive && proto.prakeakDown){
				types[type] = Vehicle
			}
			return abstractVehicleFactory
		}
	}
})()

abstractVehicleFactory.registerVehicle('car', Car)
abstractVehicleFactory.registerVehicle('truck', Truck)

var car = abstractVehicleFactory.getVehicle('car', {
	color:'Lime green',
	state: 'Like new'
})

var truck = abstractVehicleFactory.getVehicle('truck', {
	wheelSize: 'Medium',
	color: 'Neon yellow'
})


