describe('The isWeekday function' , function(){
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });

    it('should tell if its an invalid day.' , function(){
        assert.equal(isWeekday(100), 'invalid day');
    });
});
