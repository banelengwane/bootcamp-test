describe('The isFromBellville' , function(){
    it('should return true for the bellville car registration' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return true for the other town car registration' , function(){
        assert.equal(isFromBellville('CA 123'), false);
    });

    it('should recognise integers and return a message' , function(){
        assert.equal(isFromBellville(1234), 'not a car registration');
    });
});
