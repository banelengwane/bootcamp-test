describe('The countRegNumber function' , function(){
    it('should returns the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CJ 123'), 2);
        assert.equal(countRegNumber('CA 1234,CY 12345,CL 1'), 3)
    });

    it('should see when the car registrations are invalid.' , function(){
        assert.equal(countRegNumber(), 'The registrations are invalid');
        assert.equal(countRegNumber(33.54), 'The registrations are invalid')
    });
});
