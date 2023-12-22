const byteSize = (str) => {
  // write your code here
	if(str.length==0){
		return 0;
	}
	let countCharacter=0;
	let bound=str.length;
	for (let index = 0; index < bound; index++) {
		countCharacter++;
	}
	return countCharacter;
};

// Do not change the code below
const str = prompt("Enter some string.")
alert(byteSize(str));
