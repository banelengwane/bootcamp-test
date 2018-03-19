describe('The countAllFromTown function' , function(){
    it('should return number registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
    });

    it('should return number registration numbers in the string that is for another town.' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CA'), 0);
    });

    it('should notice an invalid registration number.' , function(){
        assert.equal(countAllFromTown(1000, 'CL'), 'registration numbers are invalid');
    });

    it('should notice an invalid prefix' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 99), 'prefix is invalid');
    });
});
