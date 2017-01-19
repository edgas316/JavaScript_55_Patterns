var addMyEvent = function(el, ev, fn){
	if(el.addEventListener){// window.onload
		el.addEventListener(ev, fn, false)
	}else if(el.attachEvent){ // IE
		el.attachEvent('on'+ev, fn)
	}else{
		el['on'+ev] = fn
	}
}

// facade with module
var module = (function(){
	var _private = {
		i: 5,
		get: function(){
			console.log(`current value: ${this.i}`)
		},
		set: function(val){
			this.i = val
		},
		run: function(){
			console.log('running')
		},
		jump: function(){
			console.log('jumping')
		}
	}
	return {
		facade: function(args){
			_private.set(args.val)
			_private.get()
			if(args.run){
				_private.run()
			}
		}
	}
}())

module.facade({run:true, val:10})