
// PRINT NUMBERS FROM 0 TO 5
for(i = 0; i < 6; i++){
	console.log(i)
}


// PRINT ARRAY FROM BEGINNING TO END
const words = ["cherry", "apple", "peach", "pear", "currant", "strawberry", "guava"]
for(i = 0; i < words.length; i++){
	//
	console.log(words[i])

}



// PRINT ARRAY FROM END TO BEGINNING
const prez = ["Obama", "Bush 2", "Clinton", "Bush 1", "Reagan", "Carter"]
for(i = prez.length-1; i >= 0; i--) {

	console.log(prez[i])

}



// let x = 77
// let y = 430
// let divisor = 7

//PRINT NUMBERS BETWEEN 77 & 430 THAT ARE DIVISIBLE BY 7
for(i = 77; i <= 430;  i++){

	// if i is divisible by 7
	if(i % 7 == 0) {

		// print i
		console.log(i)

	}
	else {
		//do nothing
	}
}
