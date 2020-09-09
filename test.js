var assert = require('assert');
var shell = require('shelljs');

describe('Calculator tests',function(){
    it('returns 1+1=2',function(done){
        console.log("GGG Show");
        //if (shell.exec('git commit -am ""'))
        assert.equal(1+1,2);
        done(); 
    })
});