function person(){
	
	this.name = "Saurabh";
	this.age = 29;
	this.gender = "Male";
	
	this.names = function(){
		
		console.log("The name is::", this.name);
	}
	this.ages = function(){
		
		console.log("The age is::", this.age)
	}
	this.gendres = function(){
		
		console.log("The gender is::", this.gender)
	}	
}

var output = new person();
output.names();

module.exports = new person();