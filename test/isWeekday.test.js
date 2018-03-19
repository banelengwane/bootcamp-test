describe('The isWeekday function' , function(){
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});
