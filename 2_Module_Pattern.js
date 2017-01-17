//=========================================
//Object Literal
var myModule = {
    myProperty:'something',
    myConfig:{
        useCaching:true,
        language:'en'
    },
    saySomething: function(){
        console.log("where in the world is Paul Irish today?")
    },
    reportMyConfig:function(){
        console.log(`Caching is: ${this.myConfig.useCaching ? "enabled" : "disabled"}`)
    },
    updateMyConfig: function(newConfig){
        if(typeof this.myConfig == 'object'){
            this.myConfig = newConfig
        }
    }
}

myModule.saySomething()
myModule.reportMyConfig()

myModule.updateMyConfig({
    language:'ru',
    useCaching:false
})

myModule.reportMyConfig()

//=========================================
// Module Pattern
var testModule = (function(){
    var counter = 0
    return {
        incrementCounter: function(){
            return counter++
        },
        resetCounter:function(){
            console.log(`Counter value prior to reset: ${counter}`)
            counter = 0
        }
    }
})()
//usage
testModule.incrementCounter()
testModule.resetCounter()

var basketModule = (function(){
    var bascket = []
    function doSomethingPrivate(){}

    return {
        addItem: function(values){
            bascket.push(values)
        },
        getItemCount: function(){
            return bascket.length
        },
        doSomething:doSomethingPrivate,
        getTotal:function(){
            var q = this.getItemCount(),
                p = 0
            while(q--){
                p += bascket[q].price
            }

            return p
        }
    }
})()
//Usage
basketModule.addItem({
    item:'Bread',
    price:0.5
})

basketModule.addItem({
    item:'Butter',
    price:0.3
})

basketModule.getTotal()
basketModule.getItemCount()
//==========================================