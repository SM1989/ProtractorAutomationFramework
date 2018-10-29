describe('This is the Describe of actions', function(){
	
	it('This is the it of actions', function(){
		var EC = protractor.ExpectedConditions;
		
		browser.get("http://posse.com/");
		
		browser.wait(EC.visibilityOf(element(by.xpath("//div/input[@ng-model='userInputQuery']"))))
		
		element(by.xpath("//div/input[@ng-model='userInputQuery']")).clear().sendKeys("river");
		element(by.xpath("//input[@ng-model='locationQuery']")).clear().sendKeys("London").then(function(){
			
			browser.sleep(10000)
		})
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();		
	})	
})