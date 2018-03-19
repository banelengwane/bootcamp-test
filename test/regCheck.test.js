describe('The regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck('DV 22 LM ND', 'ND'), true);
    });
});
