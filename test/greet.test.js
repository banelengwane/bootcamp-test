describe('The greet function' , function(){
    it('should greet Jenine properly' , function(){
        assert.equal(greet('Jenine'), 'Hello, Jenine');
    });

    it('should not greet a number' , function(){
        assert.equal(greet(1000), 'not a string');
    });
});
