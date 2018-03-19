describe('The yearsAgo function' , function(){
    it('should calculate how many years that was.' , function(){
        assert.equal(yearsAgo(1990), 28);
    });

    it('should not calculate non-integers.' , function(){
        assert.equal(yearsAgo('codex'), 'invalid year');
    });

    it('should not calculate negetive years.' , function(){
        assert.equal(yearsAgo(-22), 'invalid year');
    });
});
