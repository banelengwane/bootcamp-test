describe('The regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck('DV 22 LM ND', 'ND'), true);
    });

    it('should check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck('DV 22 LM ND', 'CA'), false);
    });

    it('should check if the car registrations are invalid' , function(){
        assert.equal(regCheck(1000, 'CY'), 'the car registrations is / are invalid');
    });

    it('should check if the prefix is invalid.' , function(){
        assert.equal(regCheck('DV 22 LM ND', 99), 'the prefix is invalid');
    });
});
