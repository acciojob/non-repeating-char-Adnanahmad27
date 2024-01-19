function firstNonRepeatedChar(s) {
 // Write your code here
	 let r = "";
	for(let i=0 ; i<s.length ; i++){
		let cnt = 0;
		for( let j=0 ; j < s.length ; j++){
			if(s.charAt(i)===s.charAt(j)){
				cnt++;
			}
		}
		if(cnt===1){
			r += s.charAt(i);
			return r;
		}
	}
	return null;
	// for(let i=0 ; i<s.length-1 ;i++){
	// 	let cnt = 0;
	// 	while(i+1<s.length && s.charAt(i)===s.charAt(i+1)){
	// 		cnt++;
	// 		i++;
	// 	}
	// 	if(cnt===0){
	// 		return s.charAt(i);
	// 	}
	// }
	// return null;
	
 }
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
