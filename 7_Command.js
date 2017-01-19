//==========================================
//Command pattern
(function(){
	var carManager = {
		requestInfo: function(model, id){
			return `The information for ${model} with ID ${id} is foobar`
		},
		buyVehicle: function(model, id){
			return `You have successfully purchased Irem ${id}, a ${model}`
		},
		arrangeViewing: function(model, id){
			return `You have successfully booked a viewing of ${model} ( ${id} )`
		},
		execute: function(name){
			return this[name] && this[name].apply(this, [].slice.call(arguments, 1))
		}
	}
})()

carManager.execute( "arrangeViewing", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buyVehicle", "Ford Escort", "34232" );