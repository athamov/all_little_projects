var binaryNumber='0';

// Clicking button '1'
document.querySelector('#one').onclick=()=>{
	binaryNumber = binaryNumber.search('0')!==0 ? binaryNumber+'1':'1';

	document.querySelector('#binary-display').innerHTML=binaryNumber;
	document.querySelector('#decimal-display').innerHTML=parseInt(binaryNumber,2);
}

// Clicking button '0'
document.querySelector('#zero').onclick=()=>{
	binaryNumber = binaryNumber.search('0')!==0 ? binaryNumber+'0':'0';

	document.querySelector('#binary-display').innerHTML=binaryNumber;
	document.querySelector('#decimal-display').innerHTML=parseInt(binaryNumber,2);
}

//Clicking 'Trash' button
document.querySelector('#trash').onclick=()=>{
	binaryNumber='0';

	document.querySelector('#binary-display').innerHTML='0';
	document.querySelector('#decimal-display').innerHTML='0';
}

//Clicking 'Backspace' button
document.querySelector('#backspace').onclick=()=>{
	binaryNumber=binaryNumber.length==1?'0':binaryNumber.substring(0, binaryNumber.length - 1);

	document.querySelector('#binary-display').innerHTML=binaryNumber;
	document.querySelector('#decimal-display').innerHTML=parseInt(binaryNumber,2);
}

