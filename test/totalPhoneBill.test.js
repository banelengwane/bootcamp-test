describe('The totalPhoneBill' , function(){
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
    it('should not calculate the total bill for non data i.e values which are not sms/call' , function(){
        assert.equal(totalPhoneBill('3call, 4sms, c5all, sm4s, 1sms'), 'R0.00');
    });

    it('should notice a non-string / empty value bill and return a message' , function(){
         assert.equal(totalPhoneBill(), 'billing error');
     });

   it('should notice a non-string bill and return a message' , function(){
        assert.equal(totalPhoneBill(1000), 'billing error');
    });
});
