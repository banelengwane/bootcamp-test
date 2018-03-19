describe('The countAllPaarl function' , function(){
    it('should calculate registration numbers are from Paarl.' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });

    it('should send a message if there no registration numbers from Paarl.' , function(){
        assert.equal(countAllPaarl('CA 345 123, CA 2345, CL 123-546, CK 345, CA 123'), 'No car registration from Paarl');
    });

    it('should catch all invalid car registrations' , function(){
        assert.equal(countAllPaarl(1000), 'car registration is invalid');
    });

});
