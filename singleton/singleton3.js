var Singleton = (function(){
    var instantiated;

    function init(){
        // singleton here
        return {
            publicMethod: function(){
                console.log('Hello World');
            },
            publicProperty: 'test'
        };
    }

    return{
        getInstance: function(){
            if(!instantiated){
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();
