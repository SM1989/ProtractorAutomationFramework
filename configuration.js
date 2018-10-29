var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec1_jasmine_datadriven.js'],
 capabilities: {
	  'browserName': 'chrome'
		  },

onPrepare : function()
{	
	browser.manage().window().maximize();
	jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'target/screenshots'
	        })
	      )
}
};