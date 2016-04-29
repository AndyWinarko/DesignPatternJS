var mySingleton = {
    property1: 'something',
    property2: 'something else',

    method1: function(){
        console.log(this.privateVariable);
    }
};

mySingleton.method1();
