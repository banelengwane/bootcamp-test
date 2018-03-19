describe('The fromWhere' , function(){
    it('should return Bellville for the car registration which starts with CY' , function(){
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });

    it('should return Paarl for the car registration which starts with CJ' , function(){
        assert.equal(fromWhere('CJ 123'), 'Paarl');
    });

    it('should return Cape Town for the car registration which starts with CA' , function(){
        assert.equal(fromWhere('CA 123'), 'Cape Town');
    });

    it('should return Some other place! for the car registration which starts with any other prefix' , function(){
        assert.equal(fromWhere('CL 1234'), 'Some other place!');
    });

    it('should return recognise empty / no entered car registration and send a message' , function(){
        assert.equal(fromWhere(), 'not a car registration');
    });
    it('should recognise integers and return a message' , function(){
        assert.equal(fromWhere(1234), 'not a car registration');
    });
});
