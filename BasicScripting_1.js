function calculator(a,b,operation)
{
	if (operation == 'add')
		{
		return (a+b);
		}
	
	else if (operation == 'subtract')
		{
		return (a-b);
		}
	else if (operation == 'multiply')
		{
		return (a*b);
		}
	else if (operation == 'divide')
		{
		return (a/b);
		}
	
	}

console.log(calculator(10, 5, 'add'))
console.log(calculator(10, 5, 'subtract'))
console.log(calculator(10, 5, 'multiply'))
console.log(calculator(10, 5, 'divide'))

var x = [4,10,12, 'Saurabh', 'Mukherjee']
console.log(x.length)
for (i=0;i<x.length;i++)
{
console.log(x[i])	
}

for (i=x.length-1;i>=0;i--)
	{
	console.log(x[i])
	}

s = 'Saurabh Mukherjee'
	console.log(s.slice(2, 10))