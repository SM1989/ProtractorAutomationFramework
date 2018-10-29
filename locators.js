function locators(){
	
	this.firstinput = element(by.xpath("//input[@ng-model='first']"))
	this.secondinput = element(by.xpath("//input[@ng-model='second']"))
	this.operator = element(by.xpath("//select[@ng-model='operator']"))
	this.addoperator = element(by.xpath("//select[@ng-model='operator']/option[@value='ADDITION']"))	
	this.gobutton = element(by.xpath("//button[@id='gobutton']"))
	this.resulttext = element(by.xpath("(//tr[@ng-repeat='result in memory']/td[3])[1]"))
	
	this.getURL = function(){
		
		browser.get("http://juliemr.github.io/protractor-demo/")		
	}
}

module.exports = new locators();