describe('The findItemsOver' , function(){
    it('should calculate and return items over a given threshold' , function(){
        var myObj = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(findItemsOver(myObj, 9), [{name : 'apples', qty : 10}, {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

    it('should also tell if the threshold is invalid' , function(){
        var myObj = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(findItemsOver(myObj, 'banele'), 'invalid threshold');
    });

    it('should also tell when the object is invalid' , function(){
        assert.deepEqual(findItemsOver(), 'That was not an object');
    });
});
