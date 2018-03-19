describe('The findItemsOver20' , function(){
    it('should calculate and return items over 20 on an object' , function(){
        var myObj = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(findItemsOver20(myObj), [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

    it('should notice if a non-object was entered' , function(){
        assert.deepEqual(findItemsOver20('banele'), "That was not an object");
    });
});
