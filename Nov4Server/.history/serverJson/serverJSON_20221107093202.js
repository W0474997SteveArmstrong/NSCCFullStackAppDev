const jsonArr =  [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]


console.log(jsonArr[2].color);

for (const iterator of jsonArr) {
    console.log(iterator.value); 
}


for (index=1; index < jsonArr.length;index+=2) {
    const element = jsonArr[index];
    console.log(element);
}

for (let index = 0; index < jsonArr.length; index++) {
    console.log(jsonArr[i]);
    
}





