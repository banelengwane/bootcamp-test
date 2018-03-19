describe('The transportFee' , function(){
    it('should return the right price of the morning shift' , function(){
        assert.equal(transportFee('Morning'), 'R20');
    });

    it('should return the right price of the afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return the right price of the night shift' , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

    it('should return a message entered a wrong shift' , function(){
        assert.equal(transportFee('codex'), 'not a shift');
    });

    it('should recognise integers and return a message' , function(){
        assert.equal(transportFee(1234), 'not a shift');
    });
});
