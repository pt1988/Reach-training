var data = [1,2,3]
var new_data = data.map(function(item){
	return item+1;
})
console.log(new_data)

var new_data2 = data.map((item) => item + 1); 
console.log(new_data2)

data.map((item) => {console.log(item)});
