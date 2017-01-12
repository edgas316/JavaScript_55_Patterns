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
