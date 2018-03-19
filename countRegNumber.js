describe('The countRegNumber function' , function(){
    it('should returns the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CJ 123'), 2);
        assert.equal(countRegNumber('CA 1234,CY 12345,CL 1'), 3)
    });
});
