describe('This is the name of describe test suite', function(){
	
	var obj = require('./locators.js');
	var using = require('jasmine-data-provider');
	var dataobj = require('./jasminedataprovider.js')
	
	
	beforeEach(function() {
		obj.getURL()
	})
	
	
	using(dataobj.Dataset, function (data, description) {		
		it('This is the it block to test calculator '+description, function(){
			obj.firstinput.clear();
			 obj.firstinput.sendKeys(data.firstnumber);
			 obj.operator.click();
			 obj.addoperator.click();
			 obj.secondinput.clear();
			 obj.secondinput.sendKeys(data.secondnumber);
			 obj.gobutton.click().then(function(){
				 browser.sleep(5000);
				 console.log('Waited 5 seconds');				 
			 })	
			 obj.resulttext.getText().then(function(result){
			 console.log('The reult of the operation is::', result);	
			 result = parseInt(result);			 
			 expect(result).toEqual(data.results);			
			 })		
		})      
	})
	
	
		 
	afterEach(function() {
		console.log("Test is Completed")
		
		})
	})

	
