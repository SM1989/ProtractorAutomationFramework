describe('This is the name of describe test suite', function(){
	
	var obj = require('./locators.js');
	
	beforeEach(function() {
		obj.getURL()
	})
	
	
	it('This is the name of it Test Case' , function(){
		var i = 5;
		var j = 19;		
		browser.waitForAngularEnabled(false);		 
			 console.log("Inside .then function");;	
			 obj.firstinput.clear();
			 obj.firstinput.sendKeys(i);
			 obj.operator.click();
			 obj.addoperator.click();
			 obj.secondinput.clear();
			 obj.secondinput.sendKeys(j);
			 obj.gobutton.click().then(function(){
				 browser.sleep(5000);
				 console.log('Waited 5 seconds');				 
			 })	
			 obj.resulttext.getText().then(function(result){
			 console.log('The reult of the operation is::', result);	
			 result = parseInt(result);			 
			 expect(result).toEqual(i+j);
			 })			 
		 })	
		 
	afterEach(function() {
		console.log("Test is Completed")
		
		})
	})

	
