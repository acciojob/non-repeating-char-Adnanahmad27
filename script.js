function firstNonRepeatedChar(s) {
 // Write your code here
	
	for(let i=0 ; i<=s.length-1 ;i++){
		let cnt = 0;
		while(i+1<s.length && s.charAt(i)===s.charAt(i+1)){
			cnt++;
			i++;
		}
		if(cnt===0){
			return s.charAt(i);
		}
	}
	return;
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
